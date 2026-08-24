"""Versiona assets próprios com um hash do conteúdo durante o build."""

from hashlib import sha256
from pathlib import Path
from urllib.parse import urlsplit, urlunsplit


def _versioned_url(url, docs_dir):
    parsed = urlsplit(url)
    if parsed.scheme or parsed.netloc or not parsed.path:
        return url

    asset = Path(docs_dir, parsed.path)
    if not asset.is_file():
        return url

    digest = sha256(asset.read_bytes()).hexdigest()[:10]
    return urlunsplit((parsed.scheme, parsed.netloc, parsed.path, f"v={digest}", parsed.fragment))


def on_config(config):
    """Aplica cache busting ao CSS adicional e ao favicon do projeto."""

    config.extra_css = [
        _versioned_url(path, config.docs_dir)
        for path in config.extra_css
    ]

    favicon = config.theme.get("favicon")
    if favicon:
        config.theme["favicon"] = _versioned_url(favicon, config.docs_dir)

    return config
