(function () {
  "use strict";
  if (new URLSearchParams(window.location.search).get("view") === "planning") {
    window.location.replace("index.html");
    return;
  }
  const data = window.DIGITAL_PORTFOLIO;
  if (!data) return;

  let activeCase = null;

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

  function studies(tier) {
    return data.caseStudies.filter((c) => c.tier === tier);
  }

  function renderHero() {
    const h = data.hero;
    if (!h) return;
    const brand = document.querySelector(".digital-page .brand-type small");
    if (brand) brand.textContent = "ENGINEERING & DIGITAL OPS";
    const eyebrow = document.querySelector(".digital-hero .hero-eyebrow");
    if (eyebrow) eyebrow.innerHTML = `<span class="pulse-dot"></span> ${safe(h.eyebrow)}`;
    const title = document.getElementById("digital-hero-heading");
    if (title) title.innerHTML = `${safe(h.title)}<br/><em>${safe(h.titleEm)}</em>`;
    const intro = document.querySelector(".digital-hero .hero-intro");
    if (intro) intro.textContent = h.intro;
    const caption = document.querySelector(".digital-hero .hero-caption");
    if (caption)
      caption.innerHTML = `<span class="hero-caption-line"></span> ${h.tags.map((t) => safe(t)).join(" · ")}`;
  }

  function renderHowIWork() {
    const block = data.howIWork;
    const head = document.getElementById("how-i-work-heading");
    if (head)
      head.innerHTML = `${safe(block.heading)} <em>${safe(block.headingEm)}</em>`;
    const sub = document.getElementById("how-i-work-sub");
    if (sub) sub.textContent = block.sub;
    const steps = document.getElementById("how-i-work-steps");
    if (steps) {
      steps.replaceChildren(
        ...block.steps.map((s, i) =>
          el(
            "article",
            "how-work-step",
            `<span class="how-work-num">${String(i + 1).padStart(2, "0")}</span><strong>${safe(s.title)}</strong><small>${safe(s.detail)}</small>`
          )
        )
      );
    }
  }

  function buildCaseCard(c) {
    const card = el("article", "digital-case-card");
    const hasDemo = Boolean(c.demoId);
    card.innerHTML = `
      <button type="button" class="digital-case-button">
        <span class="digital-case-visual">
          <img src="${safe(c.image)}" alt="${safe(c.alt)}" loading="lazy" decoding="async"/>
          <span class="digital-card-num">${safe(c.num)}</span>
        </span>
        <span class="digital-case-body">
          <span class="demo-data-tag">Portfolio case</span>
          <h3>${safe(c.title)}</h3>
          <p class="digital-case-sub">${safe(c.subtitle)}</p>
          <p class="digital-case-status">${safe(c.deliveryStatus)}</p>
          <span class="digital-case-cta">Open case study <span aria-hidden="true">↗</span></span>
        </span>
      </button>
      ${
        hasDemo
          ? `<button type="button" class="btn btn-lime digital-try-demo" data-demo="${safe(c.id)}">Try live workflow</button>`
          : ""
      }`;
    card.querySelector(".digital-case-button")?.addEventListener("click", () =>
      openCase(c.id, "overview")
    );
    card.querySelector(".digital-try-demo")?.addEventListener("click", (e) => {
      e.stopPropagation();
      openCase(c.id, "demo");
    });
    return card;
  }

  function renderCaseGrids() {
    const primary = document.getElementById("digital-primary-cases");
    const beyond = document.getElementById("digital-beyond-cases");
    if (primary) primary.replaceChildren(...studies("primary").map(buildCaseCard));
    if (beyond) beyond.replaceChildren(...studies("beyond").map(buildCaseCard));
  }

  function openCase(id, tab) {
    activeCase = data.caseStudies.find((c) => c.id === id);
    if (!activeCase) return;
    const dialog = document.getElementById("digital-case-dialog");
    if (!dialog) return;

    document.getElementById("digital-case-title").textContent = activeCase.title;
    document.getElementById("digital-case-subtitle").textContent = activeCase.subtitle;
    document.getElementById("digital-case-status").textContent = activeCase.deliveryStatus;

    const meta = document.getElementById("digital-case-meta");
    meta.innerHTML = `
      <div><h4>Problem</h4><p>${safe(activeCase.problem)}</p></div>
      <div><h4>My role</h4><p>${safe(activeCase.myRole)}</p></div>
      <div><h4>Workflow</h4><p>${safe(activeCase.workflow)}</p></div>
      <div><h4>Features</h4><ul>${activeCase.features.map((f) => `<li>${safe(f)}</li>`).join("")}</ul></div>
      <div><h4>Testing</h4><p>${safe(activeCase.testing)}</p></div>
      <div><h4>Security / data note</h4><p>${safe(activeCase.securityNote)}</p></div>`;

    document.getElementById("digital-case-visual").innerHTML = activeCase.image
      ? `<img src="${safe(activeCase.image)}" alt="${safe(activeCase.alt)}"/>`
      : "";

    dialog.classList.toggle("digital-case-dialog--wide", activeCase.demoId === "fieldnote-v3");

    setCaseTab(tab || "overview");
    dialog.showModal();
  }

  function setCaseTab(tab) {
    const overview = document.getElementById("digital-tab-overview");
    const demo = document.getElementById("digital-tab-demo");
    const overviewPanel = document.getElementById("digital-panel-overview");
    const demoPanel = document.getElementById("digital-panel-demo");
    const isDemo = tab === "demo" && activeCase?.demoId;
    const statusEl = document.getElementById("digital-case-status");
    if (statusEl) statusEl.hidden = Boolean(isDemo);
    overview?.classList.toggle("active", !isDemo);
    demo?.classList.toggle("active", isDemo);
    overviewPanel?.toggleAttribute("hidden", isDemo);
    demoPanel?.toggleAttribute("hidden", !isDemo);
    if (isDemo && window.DigitalDemos) {
      window.DigitalDemos.mount(activeCase.demoId, document.getElementById("digital-demo-root"));
    } else {
      const root = document.getElementById("digital-demo-root");
      if (root)
        root.innerHTML =
          "<p class=\"demo-hint\">No interactive workflow for this case — overview and visuals only.</p>";
    }
  }

  function bindCaseDialog() {
    const dialog = document.getElementById("digital-case-dialog");
    document.getElementById("digital-case-close")?.addEventListener("click", () => dialog?.close());
    document.getElementById("digital-tab-overview")?.addEventListener("click", () =>
      setCaseTab("overview")
    );
    document.getElementById("digital-tab-demo")?.addEventListener("click", () =>
      setCaseTab("demo")
    );
  }

  function renderEngineering() {
    const root = document.getElementById("digital-engineering-list");
    if (!root) return;
    root.replaceChildren(
      ...data.engineeringHighlights.map((item) =>
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
    toggle?.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

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

  renderHero();
  renderHowIWork();
  renderCaseGrids();
  renderEngineering();
  renderCapabilities();
  bindCaseDialog();
  bindChrome();
})();
