"""Gera o índice consumido pelo painel interativo de acompanhamento."""

import json
import re
from hashlib import sha256
from pathlib import Path


ITEM_RE = re.compile(
    r"^##\s+(?P<id>[A-Z]{3}-\d{2})\.\s+(?P<title>.+?)\s+\{\s*#[^}]+\}",
    re.MULTILINE,
)
PAGE_TITLE_RE = re.compile(r"^#\s+(?:\d+\.\s*)?(?P<title>.+)$", re.MULTILINE)
TYPE_RE = re.compile(r"^`(?P<type>change|feat|spike)`", re.MULTILINE)
CRITERION_RE = re.compile(r"^\s*-\s+\[[ xX]\]\s+", re.MULTILINE)

BLOCK_NAMES = {
    "privativos": "Privativos",
    "sociais": "Sociais e de serviço",
}


def _write_service_worker(site_dir):
    shell = [
        "index.html",
        "404.html",
        "manifest.webmanifest",
        "assets/project-data.json",
        "assets/extra.css",
        "assets/tracker.js",
        "assets/favicon.svg",
        "assets/icon-192.png",
        "assets/icon-512.png",
    ]
    shell.extend(
        path.relative_to(site_dir).as_posix()
        for pattern in ("assets/stylesheets/*.min.css", "assets/javascripts/*.min.js")
        for path in sorted(site_dir.glob(pattern))
    )
    shell = sorted(set(path for path in shell if Path(site_dir, path).is_file()))
    digest = sha256()
    for path in shell:
        digest.update(Path(site_dir, path).read_bytes())
    version = digest.hexdigest()[:12]
    urls = json.dumps([f"./{path}" for path in shell], ensure_ascii=False, indent=2)

    worker = f'''/* Gerado automaticamente por hooks/project_data.py. */
const CACHE = "projeto-ap-{version}";
const SHELL = {urls};

self.addEventListener("install", (event) => {{
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(SHELL)).then(() => self.skipWaiting())
  );
}});

self.addEventListener("activate", (event) => {{
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((key) => key.startsWith("projeto-ap-") && key !== CACHE).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
}});

self.addEventListener("fetch", (event) => {{
  const request = event.request;
  if (request.method !== "GET" || new URL(request.url).origin !== self.location.origin) return;
  const url = new URL(request.url);

  if (request.mode === "navigate" || url.pathname.endsWith("/assets/project-data.json")) {{
    event.respondWith(
      fetch(request)
        .then((response) => {{
          const copy = response.clone();
          caches.open(CACHE).then((cache) => cache.put(request, copy));
          return response;
        }})
        .catch(() => caches.match(request).then((cached) => cached || caches.match("./index.html")))
    );
    return;
  }}

  event.respondWith(
    caches.match(request, {{ ignoreSearch: true }}).then((cached) => cached ||
      fetch(request).then((response) => {{
        if (response.ok) {{
          const copy = response.clone();
          caches.open(CACHE).then((cache) => cache.put(request, copy));
        }}
        return response;
      }})
    )
  );
}});
'''
    Path(site_dir, "service-worker.js").write_text(worker, encoding="utf-8")


def _items_from_page(path, docs_dir):
    source = path.read_text(encoding="utf-8")
    headings = list(ITEM_RE.finditer(source))
    page_title = PAGE_TITLE_RE.search(source)
    room = page_title.group("title") if page_title else path.stem.replace("-", " ").title()
    relative = path.relative_to(docs_dir)
    block = BLOCK_NAMES.get(relative.parts[0], relative.parts[0].title())
    revision = relative.parts[1].upper() if len(relative.parts) > 2 else ""
    page_url = relative.with_suffix("").as_posix() + "/"
    items = []

    for index, heading in enumerate(headings):
        end = headings[index + 1].start() if index + 1 < len(headings) else len(source)
        body = source[heading.end():end]
        item_type = TYPE_RE.search(body)
        item_id = heading.group("id")

        items.append({
            "id": item_id,
            "title": heading.group("title").strip(),
            "type": item_type.group("type") if item_type else "",
            "room": room,
            "block": block,
            "revision": revision,
            "url": f"{page_url}#{item_id.lower()}",
            "criteria": len(CRITERION_RE.findall(body)),
        })

    return items


def on_post_build(config):
    """Escreve um índice determinístico dentro do site gerado."""

    docs_dir = Path(config.docs_dir)
    items = []

    for path in sorted(docs_dir.glob("*/r[0-9]*/*.md")):
        if path.name != "index.md":
            items.extend(_items_from_page(path, docs_dir))

    payload = {
        "version": 1,
        "items": sorted(items, key=lambda item: item["id"]),
    }
    destination = Path(config.site_dir, "assets", "project-data.json")
    destination.parent.mkdir(parents=True, exist_ok=True)
    destination.write_text(
        json.dumps(payload, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )
    _write_service_worker(Path(config.site_dir))
