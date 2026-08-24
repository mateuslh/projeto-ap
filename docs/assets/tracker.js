(() => {
  "use strict";

  const scriptUrl = new URL(document.currentScript.src);
  const dataUrl = new URL("project-data.json", scriptUrl);
  const siteRoot = new URL("../", dataUrl);
  const storageKey = "projeto-ap:acompanhamento:v1";
  const statuses = {
    pending: "Pendente",
    analysis: "Em análise",
    approved: "Aprovado",
    done: "Concluído",
  };

  let manifest = [];
  let state = loadState();
  let installPrompt = null;

  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    installPrompt = event;
    document.querySelector("[data-tracker-install]")?.removeAttribute("hidden");
  });

  function loadState() {
    try {
      const saved = JSON.parse(localStorage.getItem(storageKey));
      if (saved && saved.version === 1 && saved.items) return saved;
    } catch (_) {
      // Um estado inválido não deve impedir o restante do site de carregar.
    }
    return { version: 1, items: {} };
  }

  function recordFor(id) {
    if (!state.items[id]) {
      state.items[id] = { status: "pending", checks: {} };
    }
    return state.items[id];
  }

  function persist() {
    localStorage.setItem(storageKey, JSON.stringify(state));
    renderDashboard();
    syncPageControls();
  }

  function element(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function statusSelect(id, compact = false) {
    const select = element("select", compact ? "tracker-select tracker-select--compact" : "tracker-select");
    select.setAttribute("aria-label", `Status de ${id}`);
    for (const [value, label] of Object.entries(statuses)) {
      const option = element("option", "", label);
      option.value = value;
      select.append(option);
    }
    select.value = recordFor(id).status;
    select.dataset.status = select.value;
    select.addEventListener("change", () => {
      recordFor(id).status = select.value;
      select.dataset.status = select.value;
      persist();
    });
    return select;
  }

  function initShell() {
    if (document.querySelector(".project-tracker-toggle")) return;

    const header = document.querySelector(".md-header__inner");
    if (!header) return;

    const toggle = element("button", "md-header__button md-icon project-tracker-toggle");
    toggle.type = "button";
    toggle.title = "Abrir acompanhamento do projeto";
    toggle.setAttribute("aria-label", "Abrir acompanhamento do projeto");
    toggle.innerHTML = `
      <span class="project-tracker-toggle__ring" aria-hidden="true"></span>
      <span class="project-tracker-toggle__value">0%</span>
    `;

    const source = header.querySelector(".md-header__source");
    header.insertBefore(toggle, source || null);

    const backdrop = element("button", "project-tracker-backdrop");
    backdrop.type = "button";
    backdrop.tabIndex = -1;
    backdrop.setAttribute("aria-label", "Fechar acompanhamento");

    const panel = element("aside", "project-tracker-panel");
    panel.id = "project-tracker-panel";
    panel.setAttribute("role", "dialog");
    panel.setAttribute("aria-modal", "true");
    panel.setAttribute("aria-label", "Acompanhamento do projeto");
    panel.setAttribute("aria-hidden", "true");
    panel.innerHTML = `
      <header class="project-tracker-panel__header">
        <div>
          <span class="project-tracker-panel__eyebrow">Acompanhamento local</span>
          <h2>Progresso do projeto</h2>
        </div>
        <button type="button" class="project-tracker-panel__close" aria-label="Fechar">×</button>
      </header>
      <div class="project-tracker-panel__body">
        <section class="tracker-overview" aria-label="Resumo do progresso">
          <div class="tracker-overview__ring"><strong data-tracker-percent>0%</strong></div>
          <div class="tracker-overview__copy">
            <strong data-tracker-summary>0 de 0 itens concluídos</strong>
            <span data-tracker-criteria>0 de 0 critérios verificados</span>
          </div>
        </section>
        <div class="tracker-status-grid" data-tracker-status-grid></div>
        <div class="tracker-filters">
          <label class="tracker-search">
            <span class="sr-only">Buscar solicitação</span>
            <input type="search" placeholder="Buscar item ou ambiente…" data-tracker-search>
          </label>
          <select aria-label="Filtrar por status" data-tracker-status-filter>
            <option value="">Todos os status</option>
            <option value="pending">Pendentes</option>
            <option value="analysis">Em análise</option>
            <option value="approved">Aprovados</option>
            <option value="done">Concluídos</option>
          </select>
          <select aria-label="Filtrar por tipo" data-tracker-type-filter>
            <option value="">Todos os tipos</option>
            <option value="change">Change</option>
            <option value="feat">Feat</option>
            <option value="spike">Spike</option>
          </select>
        </div>
        <div class="tracker-list" data-tracker-list>
          <p class="tracker-empty">Carregando solicitações…</p>
        </div>
      </div>
      <footer class="project-tracker-panel__footer">
        <button type="button" hidden data-tracker-install>Instalar app</button>
        <button type="button" data-tracker-export>Exportar</button>
        <button type="button" data-tracker-import>Importar</button>
        <button type="button" class="tracker-reset" data-tracker-reset>Limpar dados</button>
        <input type="file" accept="application/json" hidden data-tracker-file>
      </footer>
    `;

    document.body.append(backdrop, panel);

    toggle.addEventListener("click", openPanel);
    backdrop.addEventListener("click", closePanel);
    panel.querySelector(".project-tracker-panel__close").addEventListener("click", closePanel);
    panel.querySelector("[data-tracker-search]").addEventListener("input", renderList);
    panel.querySelector("[data-tracker-status-filter]").addEventListener("change", renderList);
    panel.querySelector("[data-tracker-type-filter]").addEventListener("change", renderList);
    panel.querySelector("[data-tracker-export]").addEventListener("click", exportState);
    panel.querySelector("[data-tracker-install]").addEventListener("click", installApp);
    panel.querySelector("[data-tracker-import]").addEventListener("click", () => {
      panel.querySelector("[data-tracker-file]").click();
    });
    panel.querySelector("[data-tracker-file]").addEventListener("change", importState);
    panel.querySelector("[data-tracker-reset]").addEventListener("click", resetState);
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && document.body.classList.contains("tracker-is-open")) closePanel();
    });

    fetch(dataUrl, { cache: "no-store" })
      .then((response) => {
        if (!response.ok) throw new Error("Índice indisponível");
        return response.json();
      })
      .then((data) => {
        manifest = Array.isArray(data.items) ? data.items : [];
        renderDashboard();
      })
      .catch(() => {
        const list = panel.querySelector("[data-tracker-list]");
        list.innerHTML = '<p class="tracker-empty">Não foi possível carregar o índice do projeto.</p>';
      });
  }

  function openPanel() {
    const panel = document.querySelector(".project-tracker-panel");
    document.body.classList.add("tracker-is-open");
    panel.setAttribute("aria-hidden", "false");
    renderDashboard();
    window.setTimeout(() => panel.querySelector("[data-tracker-search]").focus(), 180);
  }

  function closePanel() {
    const panel = document.querySelector(".project-tracker-panel");
    document.body.classList.remove("tracker-is-open");
    if (panel) panel.setAttribute("aria-hidden", "true");
    document.querySelector(".project-tracker-toggle")?.focus();
  }

  function progressData() {
    let criteriaDone = 0;
    let criteriaTotal = 0;
    const counts = { pending: 0, analysis: 0, approved: 0, done: 0 };

    for (const item of manifest) {
      const record = recordFor(item.id);
      counts[record.status] = (counts[record.status] || 0) + 1;
      criteriaTotal += item.criteria;
      criteriaDone += Object.values(record.checks || {}).filter(Boolean).length;
    }

    const percent = manifest.length ? Math.round((counts.done / manifest.length) * 100) : 0;
    return { counts, criteriaDone, criteriaTotal, percent };
  }

  function renderDashboard() {
    if (!document.querySelector(".project-tracker-panel") || !manifest.length) return;
    const progress = progressData();

    document.querySelectorAll("[data-tracker-percent]").forEach((node) => {
      node.textContent = `${progress.percent}%`;
      node.parentElement.style.setProperty("--tracker-progress", `${progress.percent * 3.6}deg`);
    });
    document.querySelectorAll("[data-tracker-summary]").forEach((node) => {
      node.textContent = `${progress.counts.done} de ${manifest.length} itens concluídos`;
    });
    document.querySelectorAll("[data-tracker-criteria]").forEach((node) => {
      node.textContent = `${progress.criteriaDone} de ${progress.criteriaTotal} critérios verificados`;
    });

    const toggle = document.querySelector(".project-tracker-toggle");
    if (toggle) {
      toggle.querySelector(".project-tracker-toggle__value").textContent = `${progress.percent}%`;
      toggle.style.setProperty("--tracker-progress", `${progress.percent * 3.6}deg`);
    }

    const grid = document.querySelector("[data-tracker-status-grid]");
    grid.innerHTML = "";
    for (const [status, label] of Object.entries(statuses)) {
      const card = element("button", `tracker-status-card is-${status}`);
      card.type = "button";
      card.dataset.status = status;
      card.innerHTML = `<strong>${progress.counts[status] || 0}</strong><span>${label}</span>`;
      card.addEventListener("click", () => {
        document.querySelector("[data-tracker-status-filter]").value = status;
        renderList();
      });
      grid.append(card);
    }

    renderList();
    renderHomeTracker(progress);
  }

  function normalize(value) {
    return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  }

  function renderList() {
    const list = document.querySelector("[data-tracker-list]");
    if (!list || !manifest.length) return;
    const search = normalize(document.querySelector("[data-tracker-search]").value.trim());
    const statusFilter = document.querySelector("[data-tracker-status-filter]").value;
    const typeFilter = document.querySelector("[data-tracker-type-filter]").value;
    const filtered = manifest.filter((item) => {
      const record = recordFor(item.id);
      const haystack = normalize(`${item.id} ${item.title} ${item.room} ${item.block}`);
      return (!search || haystack.includes(search)) &&
        (!statusFilter || record.status === statusFilter) &&
        (!typeFilter || item.type === typeFilter);
    });

    list.innerHTML = "";
    if (!filtered.length) {
      list.append(element("p", "tracker-empty", "Nenhuma solicitação encontrada."));
      return;
    }

    for (const item of filtered) {
      const row = element("article", "tracker-row");
      const main = element("div", "tracker-row__main");
      const link = element("a", "tracker-row__title");
      link.href = new URL(item.url, siteRoot).href;
      link.innerHTML = `<code>${item.id}</code><span>${item.title}</span>`;
      link.addEventListener("click", closePanel);
      const meta = element("span", "tracker-row__meta", `${item.room} · ${item.block}`);
      main.append(link, meta);

      const side = element("div", "tracker-row__side");
      side.append(statusSelect(item.id, true));
      if (item.criteria) {
        const checked = Object.values(recordFor(item.id).checks || {}).filter(Boolean).length;
        side.append(element("span", "tracker-row__criteria", `${checked}/${item.criteria} critérios`));
      }
      row.append(main, side);
      list.append(row);
    }
  }

  function initPage() {
    document.querySelectorAll(".md-typeset h2[id]").forEach((heading) => {
      const id = heading.id.toUpperCase();
      if (!/^[A-Z]{3}-\d{2}$/.test(id) || heading.dataset.trackerReady) return;
      heading.dataset.trackerReady = "true";

      let insertionPoint = heading;
      if (heading.nextElementSibling?.querySelector("code.t")) insertionPoint = heading.nextElementSibling;
      const control = element("div", "item-tracker");
      control.dataset.itemId = id;
      control.append(element("span", "item-tracker__label", "Acompanhamento"), statusSelect(id));
      const criterionSummary = element("span", "item-tracker__criteria");
      control.append(criterionSummary);
      insertionPoint.insertAdjacentElement("afterend", control);

      const checkboxes = [];
      let sibling = heading.nextElementSibling;
      while (sibling && sibling.tagName !== "H2") {
        checkboxes.push(...sibling.querySelectorAll('input[type="checkbox"]'));
        sibling = sibling.nextElementSibling;
      }

      const record = recordFor(id);
      checkboxes.forEach((checkbox, index) => {
        checkbox.disabled = false;
        checkbox.checked = Boolean(record.checks[index]);
        checkbox.dataset.trackerItem = id;
        checkbox.dataset.trackerCriterion = String(index);
        checkbox.addEventListener("change", () => {
          recordFor(id).checks[index] = checkbox.checked;
          persist();
        });
      });
      updateItemSummary(id, checkboxes.length);
    });

    if (manifest.length) renderHomeTracker(progressData());
  }

  function updateItemSummary(id, fallbackTotal) {
    const control = document.querySelector(`.item-tracker[data-item-id="${id}"]`);
    if (!control) return;
    const item = manifest.find((candidate) => candidate.id === id);
    const total = item ? item.criteria : fallbackTotal;
    const done = Object.values(recordFor(id).checks || {}).filter(Boolean).length;
    control.querySelector(".item-tracker__criteria").textContent = total ? `${done}/${total} critérios` : "Sem checklist";
  }

  function syncPageControls() {
    document.querySelectorAll(".item-tracker[data-item-id]").forEach((control) => {
      const id = control.dataset.itemId;
      const select = control.querySelector("select");
      select.value = recordFor(id).status;
      select.dataset.status = select.value;
      document.querySelectorAll(`input[data-tracker-item="${id}"]`).forEach((checkbox) => {
        checkbox.checked = Boolean(recordFor(id).checks[checkbox.dataset.trackerCriterion]);
      });
      updateItemSummary(id, document.querySelectorAll(`input[data-tracker-item="${id}"]`).length);
    });
  }

  function renderHomeTracker(progress) {
    const hero = document.querySelector(".project-hero");
    if (!hero) return;
    let card = hero.querySelector(".project-hero__tracker");
    if (!card) {
      card = element("button", "project-hero__tracker");
      card.type = "button";
      card.innerHTML = `
        <span class="project-hero__tracker-ring"><strong data-tracker-percent>0%</strong></span>
        <span class="project-hero__tracker-copy">
          <strong>Acompanhamento interativo</strong>
          <small data-tracker-summary>0 itens concluídos</small>
        </span>
        <span class="project-hero__tracker-arrow" aria-hidden="true">→</span>
      `;
      card.addEventListener("click", openPanel);
      hero.append(card);
    }
    card.querySelector("[data-tracker-percent]").textContent = `${progress.percent}%`;
    card.querySelector(".project-hero__tracker-ring").style.setProperty("--tracker-progress", `${progress.percent * 3.6}deg`);
    card.querySelector("[data-tracker-summary]").textContent = `${progress.counts.done} de ${manifest.length} itens concluídos`;
  }

  function exportState() {
    const payload = { ...state, exportedAt: new Date().toISOString() };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `acompanhamento-projeto-${new Date().toISOString().slice(0, 10)}.json`;
    link.click();
    URL.revokeObjectURL(url);
  }

  function importState(event) {
    const [file] = event.target.files;
    if (!file) return;
    file.text().then((content) => {
      const imported = JSON.parse(content);
      if (!imported || imported.version !== 1 || typeof imported.items !== "object") {
        throw new Error("Formato inválido");
      }
      state = { version: 1, items: imported.items };
      persist();
      event.target.value = "";
    }).catch(() => window.alert("Este arquivo não contém um acompanhamento válido."));
  }

  function resetState() {
    if (!window.confirm("Remover todos os status e critérios marcados neste navegador?")) return;
    state = { version: 1, items: {} };
    persist();
  }

  async function installApp() {
    if (!installPrompt) return;
    await installPrompt.prompt();
    await installPrompt.userChoice;
    installPrompt = null;
    document.querySelector("[data-tracker-install]")?.setAttribute("hidden", "");
  }

  function registerServiceWorker() {
    const isLocal = ["localhost", "127.0.0.1"].includes(window.location.hostname);
    if (!("serviceWorker" in navigator) || isLocal) return;
    const workerUrl = new URL("../service-worker.js", scriptUrl);
    navigator.serviceWorker.register(workerUrl, { scope: new URL("../", scriptUrl).pathname });
  }

  function start() {
    initShell();
    initPage();
  }

  if (typeof document$ !== "undefined") {
    document$.subscribe(start);
  } else if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start, { once: true });
  } else {
    start();
  }
  registerServiceWorker();
})();
