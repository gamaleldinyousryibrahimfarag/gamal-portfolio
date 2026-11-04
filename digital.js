(function () {
  "use strict";
  if (new URLSearchParams(window.location.search).get('view') === 'planning') {
    window.location.replace('index.html');
    return;
  }
  const data = window.DIGITAL_PORTFOLIO;
  if (!data) return;

  function el(tag, className, html) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (html != null) node.innerHTML = html;
    return node;
  }

  function safe(text) {
    return String(text ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function renderPillars() {
    const root = document.getElementById("digital-pillars");
    if (!root) return;
    root.replaceChildren(
      ...data.pillars.map((p) =>
        el(
          "article",
          "digital-pillar",
          `<h3>${safe(p.title)}</h3><p>${safe(p.text)}</p>`
        )
      )
    );
  }

  function renderSystems() {
    const root = document.getElementById("digital-systems");
    if (!root) return;
    root.replaceChildren(
      ...data.systems.map(
        (s) =>
          el(
            "li",
            "",
            `<strong>${safe(s.title)}</strong><span>${safe(s.text)}</span>`
          )
      )
    );
  }

  function renderWorkflows() {
    const root = document.getElementById("digital-workflows");
    if (!root) return;
    root.replaceChildren(
      ...data.workflows.map((w) => {
        const card = el(
          "article",
          "digital-workflow-card" + (w.image.includes("case-") ? " digital-card--case" : "")
        );
        card.innerHTML = `
          <div class="digital-workflow-visual">
            <img src="${safe(w.image)}" alt="${safe(w.alt)}" loading="lazy" decoding="async" width="640" height="360"/>
            <span class="digital-card-num">${safe(w.num)}</span>
          </div>
          <div class="digital-workflow-copy">
            <h3>${safe(w.title)}</h3>
            <dl class="digital-dl">
              <div><dt>Task</dt><dd>${safe(w.task)}</dd></div>
              <div><dt>Automation</dt><dd>${safe(w.automation)}</dd></div>
              <div><dt>My involvement</dt><dd>${safe(w.involvement)}</dd></div>
            </dl>
          </div>`;
        return card;
      })
    );
  }

  function renderApplications() {
    const root = document.getElementById("digital-applications");
    if (!root) return;
    root.replaceChildren(
      ...data.applications.map((a) => {
        const card = el(
          "article",
          "digital-app-card" + (a.image.includes("case-") ? " digital-card--case" : "")
        );
        card.innerHTML = `
          <div class="digital-app-visual">
            <img src="${safe(a.image)}" alt="${safe(a.alt)}" loading="lazy" decoding="async" width="720" height="400"/>
            <span class="digital-card-num">${safe(a.num)}</span>
          </div>
          <div class="digital-app-copy">
            <h3>${safe(a.title)}</h3>
            <p class="digital-app-sub">${safe(a.subtitle)}</p>
            <ul>${a.points.map((pt) => `<li>${safe(pt)}</li>`).join("")}</ul>
          </div>`;
        return card;
      })
    );
  }

  function renderProcess() {
    const steps = document.getElementById("digital-process-steps");
    if (steps) {
      steps.replaceChildren(
        ...data.processSteps.map(
          (s) =>
            el(
              "div",
              "digital-process-step",
              `<span>${safe(s.num)}</span><strong>${safe(s.title)}</strong><small>${safe(s.detail)}</small>`
            )
        )
      );
    }
    const chain = document.getElementById("digital-value-chain");
    if (chain) {
      chain.replaceChildren(
        ...data.valueChain.map(
          (v) =>
            el(
              "article",
              "digital-value-item",
              `<h4>${safe(v.title)}</h4><p>${safe(v.text)}</p>`
            )
        )
      );
    }
  }

  function renderPredictive() {
    const block = document.getElementById("digital-predictive");
    if (!block || !data.predictive) return;
    const p = data.predictive;
    block.className = "digital-predictive-block digital-card--case";
    block.innerHTML = `
      <div class="digital-predictive-copy">
        <h3>${safe(p.title)}</h3>
        <p>${safe(p.text)}</p>
      </div>
      <figure class="digital-predictive-visual">
        <img src="${safe(p.image)}" alt="${safe(p.alt)}" loading="lazy" decoding="async" width="720" height="200"/>
      </figure>`;
  }

  function renderEngineering() {
    const root = document.getElementById("digital-engineering-list");
    if (!root) return;
    root.replaceChildren(
      ...data.engineeringHighlights.map(
        (item) =>
          el(
            "li",
            "",
            `<strong>${safe(item.name)}</strong><span class="digital-loc">${safe(item.location)}</span><p>${safe(item.note)}</p>`
          )
      )
    );
  }

  function renderCapabilities() {
    const root = document.getElementById("digital-capabilities");
    if (!root) return;
    root.replaceChildren(
      ...data.capabilities.map((c) => {
        const span = document.createElement("span");
        span.textContent = c;
        return span;
      })
    );
  }

  function bindChrome() {
    const year = document.getElementById("current-year");
    if (year) year.textContent = String(new Date().getFullYear());

    const toggle = document.querySelector(".mobile-toggle");
    const nav = document.getElementById("primary-nav");
    if (toggle && nav) {
      toggle.addEventListener("click", () => {
        const open = nav.classList.toggle("open");
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
      });
    }

    const toast = document.getElementById("toast");
    function showToast(msg) {
      if (!toast) return;
      toast.textContent = msg;
      toast.classList.add("show");
      clearTimeout(showToast._t);
      showToast._t = setTimeout(() => toast.classList.remove("show"), 2200);
    }

    document.getElementById("copy-email")?.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText("gamaleldin.yousry@gmail.com");
        showToast("Email copied");
      } catch {
        showToast("Copy email manually");
      }
    });
    document.getElementById("copy-phone")?.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText("+97477738990");
        showToast("Phone copied");
      } catch {
        showToast("Copy phone manually");
      }
    });

    const profile = document.getElementById("digital-profile-text");
    if (profile) profile.textContent = data.profile;
  }

  renderPillars();
  renderSystems();
  renderWorkflows();
  renderApplications();
  renderProcess();
  renderPredictive();
  renderEngineering();
  renderCapabilities();
  bindChrome();
})();
