(function () {
  "use strict";

  function esc(text) {
    return String(text ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function toast(root, message) {
    let t = root.querySelector(".demo-toast");
    if (!t) {
      t = document.createElement("p");
      t.className = "demo-toast";
      root.querySelector(".demo-app")?.prepend(t);
    }
    t.textContent = message;
    t.classList.add("show");
    clearTimeout(toast._id);
    toast._id = setTimeout(() => t.classList.remove("show"), 2600);
  }

  const DEMO_SHELL = (title, subtitle) =>
    `<p class="demo-badge"><span>DEMO TRIAL</span> Synthetic data · portfolio workflow demonstration</p>
     <div class="demo-app">
       <header class="demo-app-header">
         <div><strong>${esc(title)}</strong><span>${esc(subtitle)}</span></div>
         <span class="demo-app-env">SANDBOX</span>
       </header>`;

  function mountProcurement(root) {
    const STAGES = [
      "Site request",
      "Technical",
      "Budget",
      "Procurement",
      "PO issued",
      "Closed"
    ];
    const state = {
      stage: 0,
      role: "site",
      audit: [
        {
          at: timeNow(),
          who: "System",
          type: "system",
          action: "Package PKG-DEMO-074 initialized — electrical materials (demo)."
        }
      ]
    };

    root.innerHTML =
      DEMO_SHELL("Procurement console", "Cross-functional approval workflow") +
      `<div class="demo-procurement demo-app-body">
        <div class="demo-kpi-strip" id="demo-proc-kpi"></div>
        <div class="demo-toolbar demo-toolbar--rich">
          <div class="demo-role-picker">
            <span class="demo-label">Signed in as</span>
            <div class="demo-role-cards" id="demo-proc-roles"></div>
          </div>
        </div>
        <div class="demo-split">
          <div class="demo-split-main">
            <div class="demo-progress-wrap">
              <div class="demo-progress-label"><span>Package progress</span><strong id="demo-proc-pct">12%</strong></div>
              <div class="demo-progress-bar"><i id="demo-proc-bar" style="width:12%"></i></div>
            </div>
            <div class="demo-stage-track demo-stage-track--rich" id="demo-proc-stages"></div>
            <div class="demo-panel demo-panel--rich">
              <h4>Current gate</h4>
              <p id="demo-proc-task" class="demo-task-text"></p>
              <div class="demo-perm" id="demo-proc-perm"></div>
              <div class="demo-actions" id="demo-proc-actions"></div>
            </div>
          </div>
          <aside class="demo-split-aside">
            <div class="demo-package-card">
              <h4>Package detail</h4>
              <dl class="demo-dl-compact">
                <div><dt>ID</dt><dd>PKG-DEMO-074</dd></div>
                <div><dt>Description</dt><dd>Electrical materials — LV switchgear</dd></div>
                <div><dt>Qty</dt><dd>1 lot · demo</dd></div>
                <div><dt>Budget band</dt><dd>QAR 48,000 (demo)</dd></div>
                <div><dt>Required on site</dt><dd>14 Nov 2026</dd></div>
                <div><dt>Attachments</dt><dd>Spec rev B · BOQ snippet</dd></div>
              </dl>
            </div>
            <div class="demo-security-note">
              <strong>Operational controls (design)</strong>
              <ul>
                <li>Role-based actions per stage</li>
                <li>Approval history preserved</li>
                <li>Time-stamped audit log</li>
              </ul>
            </div>
          </aside>
        </div>
        <div class="demo-audit demo-audit--rich">
          <h4>Approval history &amp; audit log</h4>
          <ul id="demo-proc-audit"></ul>
        </div>
      </div></div>`;

    const roles = [
      { id: "site", label: "Site engineer", abbr: "SE" },
      { id: "finance", label: "Accountant", abbr: "AC" },
      { id: "procurement", label: "Procurement", abbr: "PO" }
    ];

    const roleRoot = root.querySelector("#demo-proc-roles");
    roles.forEach((r) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "demo-role-card" + (state.role === r.id ? " active" : "");
      b.dataset.role = r.id;
      b.innerHTML = `<span class="demo-avatar">${r.abbr}</span><span>${esc(r.label)}</span>`;
      b.addEventListener("click", () => {
        state.role = r.id;
        roleRoot.querySelectorAll(".demo-role-card").forEach((c) =>
          c.classList.toggle("active", c.dataset.role === state.role)
        );
        render();
      });
      roleRoot.appendChild(b);
    });

    function timeNow() {
      return new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    }

    function log(who, action, type) {
      state.audit.unshift({ at: timeNow(), who, action, type: type || "action" });
    }

    function requiredRole(stage) {
      if (stage === 0) return "site";
      if (stage === 1) return "finance";
      if (stage === 2 || stage === 3) return "procurement";
      if (stage === 4) return "site";
      return null;
    }

    function render() {
      const pct = Math.min(100, Math.round((state.stage / (STAGES.length - 1)) * 100));
      root.querySelector("#demo-proc-pct").textContent = pct + "%";
      root.querySelector("#demo-proc-bar").style.width = pct + "%";

      root.querySelector("#demo-proc-kpi").innerHTML = `
        <div><small>Open packages (demo)</small><strong>12</strong></div>
        <div><small>In approval</small><strong>${state.stage > 0 && state.stage < 5 ? 1 : 0}</strong></div>
        <div><small>PO issued (demo)</small><strong>${state.stage >= 4 ? 1 : 0}</strong></div>
        <div><small>Audit events</small><strong>${state.audit.length}</strong></div>`;

      root.querySelector("#demo-proc-stages").innerHTML = STAGES.map((name, i) => {
        const cls = i < state.stage ? "done" : i === state.stage ? "active" : "";
        return `<span class="demo-stage ${cls}"><i>${i + 1}</i>${esc(name)}</span>`;
      }).join("");

      const tasks = [
        "Submit material request with specification reference and required-on-site date.",
        "Validate budget commitment and release to procurement.",
        "Accept package for procurement review and RFQ path (demo vendors).",
        "Issue purchase order and open delivery tracking.",
        "Confirm physical receipt on site and trigger closeout.",
        "Package closed — full audit trail retained below."
      ];
      root.querySelector("#demo-proc-task").textContent =
        tasks[Math.min(state.stage, tasks.length - 1)];

      const need = requiredRole(state.stage);
      const perm = root.querySelector("#demo-proc-perm");
      if (state.stage >= 5) {
        perm.innerHTML = `<span class="demo-chip demo-chip--ok">Workflow complete</span>`;
      } else if (need === state.role) {
        perm.innerHTML = `<span class="demo-chip demo-chip--ok">You can act on this gate</span>`;
      } else {
        const label = roles.find((r) => r.id === need)?.label || "Another role";
        perm.innerHTML = `<span class="demo-chip demo-chip--wait">Waiting on: ${esc(label)}</span>`;
      }

      const auditEl = root.querySelector("#demo-proc-audit");
      auditEl.innerHTML = state.audit
        .map(
          (e) =>
            `<li class="demo-audit-${esc(e.type)}"><time>${esc(e.at)}</time> <strong>${esc(e.who)}</strong> <span class="demo-audit-badge">${esc(e.type)}</span> ${esc(e.action)}</li>`
        )
        .join("");

      const actions = root.querySelector("#demo-proc-actions");
      actions.innerHTML = "";
      if (state.stage >= 5) return;

      function btn(label, cls, handler, enabled) {
        const b = document.createElement("button");
        b.type = "button";
        b.className = "btn demo-btn " + (cls || "btn-dark");
        b.textContent = label;
        b.disabled = !enabled;
        if (enabled) b.addEventListener("click", handler);
        actions.appendChild(b);
      }

      const canAct = need === state.role;

      if (state.stage === 0) {
        btn(
          "Submit to finance",
          "btn-lime",
          () => {
            state.stage = 1;
            log("Site engineer", "Request submitted with attachments (demo).", "submit");
            toast(root, "Request queued for budget check");
            render();
          },
          canAct
        );
      } else if (state.stage === 1) {
        btn(
          "Approve budget",
          "btn-lime",
          () => {
            state.stage = 2;
            log("Accountant", "Budget approved — routed to procurement.", "approve");
            toast(root, "Budget gate cleared");
            render();
          },
          canAct
        );
        btn(
          "Return for clarification",
          "btn-quiet",
          () => {
            log("Accountant", "Returned to site — missing cost code (demo).", "review");
            toast(root, "Returned to site engineer");
            render();
          },
          canAct
        );
      } else if (state.stage === 2) {
        btn(
          "Start procurement review",
          "btn-lime",
          () => {
            state.stage = 3;
            log("Procurement officer", "RFQ comparison recorded — preferred vendor selected (demo).", "review");
            render();
          },
          canAct
        );
      } else if (state.stage === 3) {
        btn(
          "Issue PO",
          "btn-lime",
          () => {
            state.stage = 4;
            log("Procurement officer", "PO-2026-DEMO-118 issued; delivery window opened.", "approve");
            toast(root, "PO issued — tracking enabled");
            render();
          },
          canAct
        );
      } else if (state.stage === 4) {
        btn(
          "Confirm receipt & close",
          "btn-lime",
          () => {
            state.stage = 5;
            log("Site engineer", "Goods received on site — quantity check OK (demo).", "submit");
            log("System", "Package closed; audit log sealed (demo).", "system");
            toast(root, "Package closed successfully");
            render();
          },
          canAct
        );
      }
    }

    render();
  }

  function mountDocumentControl(root) {
    const emails = [
      {
        id: "e1",
        from: "Contractor · MEP",
        subject: "RE: REV-03 Piping Layout P-101",
        type: "Drawing",
        engineer: "A. Rahman · Piping",
        rule: "Rule P-01 · piping drawings",
        file: "P-101_Rev03.pdf"
      },
      {
        id: "e2",
        from: "Supplier · Electrical",
        subject: "Material submittal — switchgear schedule",
        type: "Submittal",
        engineer: "S. Khan · Electrical",
        rule: "Rule E-04 · electrical submittals",
        file: "SWG_Submittal.zip"
      },
      {
        id: "e3",
        from: "Consultant · Façade",
        subject: "RFI: anchor detail at level 12",
        type: "RFI",
        engineer: "L. Ahmed · Façade",
        rule: "Rule F-02 · envelope RFIs",
        file: "RFI-044.msg"
      }
    ];
    let selected = null;
    let step = 0;
    const log = [];

    root.innerHTML =
      DEMO_SHELL("Document control", "Correspondence intake · routing · filing") +
      `<div class="demo-doc demo-app-body">
        <div class="demo-kpi-strip" id="demo-doc-kpi"></div>
        <div class="demo-flow-steps" id="demo-doc-flow"></div>
        <div class="demo-doc-layout">
          <div class="demo-inbox demo-inbox--rich">
            <div class="demo-inbox-head"><h4>Inbox</h4><span class="demo-chip">${emails.length} demo items</span></div>
            <ul id="demo-doc-list"></ul>
          </div>
          <div class="demo-doc-detail demo-doc-detail--rich" id="demo-doc-detail">
            <p class="demo-hint">Select a message to run the intake workflow.</p>
          </div>
        </div>
        <div class="demo-log-table-wrap">
          <h4>Log register</h4>
          <table class="demo-log-table demo-log-table--rich">
            <thead><tr><th>Ref</th><th>Subject</th><th>Type</th><th>Engineer</th><th>Status</th><th>TAT (demo)</th></tr></thead>
            <tbody id="demo-doc-log"></tbody>
          </table>
        </div>
      </div></div>`;

    const FLOW = ["Review", "Classify", "Assign", "File", "Log"];

    function renderFlow() {
      root.querySelector("#demo-doc-flow").innerHTML = FLOW.map((name, i) => {
        const cls = i < step ? "done" : i === step ? "active" : "";
        return `<span class="demo-flow-step ${cls}">${i + 1}. ${name}</span>`;
      }).join("");
    }

    function renderKpi() {
      root.querySelector("#demo-doc-kpi").innerHTML = `
        <div><small>In queue (demo)</small><strong>${emails.length - log.length}</strong></div>
        <div><small>Routed today</small><strong>${log.length}</strong></div>
        <div><small>Avg TAT (demo)</small><strong>${log.length ? "1.2 d" : "—"}</strong></div>
        <div><small>Traceability</small><strong>Log + path</strong></div>`;
    }

    const list = root.querySelector("#demo-doc-list");
    list.innerHTML = emails
      .map((e) => {
        const routed = log.some((l) => l.id === e.id);
        return `<li><button type="button" class="demo-inbox-item${routed ? " is-done" : ""}" data-id="${esc(e.id)}">
          <span class="demo-inbox-subj">${esc(e.subject)}</span>
          <span class="demo-inbox-meta">${esc(e.from)} · ${esc(e.file)}</span>
        </button></li>`;
      })
      .join("");

    list.addEventListener("click", (ev) => {
      const btn = ev.target.closest(".demo-inbox-item");
      if (!btn || btn.classList.contains("is-done")) return;
      selected = emails.find((x) => x.id === btn.dataset.id);
      step = 0;
      renderDetail(false);
    });

    function renderDetail(processing) {
      renderFlow();
      renderKpi();
      const detail = root.querySelector("#demo-doc-detail");
      if (!selected) return;
      detail.innerHTML = `
        <div class="demo-email-header">
          <h4>${esc(selected.subject)}</h4>
          <p class="demo-email-from">${esc(selected.from)}</p>
          <span class="demo-chip">Attachment: ${esc(selected.file)}</span>
        </div>
        <div class="demo-classify-grid">
          <div><span class="demo-label">Classification</span><strong>${esc(selected.type)}</strong></div>
          <div><span class="demo-label">Routing rule</span><strong>${esc(selected.rule)}</strong></div>
          <div><span class="demo-label">Assigned engineer</span><strong>${esc(selected.engineer)}</strong></div>
          <div><span class="demo-label">Filing path</span><code>/Demo/2026/${esc(selected.type)}/${esc(selected.id)}/</code></div>
        </div>
        <div class="demo-actions">
          <button type="button" class="btn btn-lime demo-btn" id="demo-doc-route" ${processing ? "disabled" : ""}>
            ${processing ? "Routing…" : "Run routing workflow"}
          </button>
        </div>
        <div id="demo-doc-status"></div>`;

      if (!processing) {
        detail.querySelector("#demo-doc-route").addEventListener("click", () => {
          step = 1;
          renderDetail(true);
          let s = 1;
          const timer = setInterval(() => {
            s++;
            step = Math.min(4, s);
            renderFlow();
            if (s >= 4) {
              clearInterval(timer);
              log.push({
                id: selected.id,
                ref: "DOC-DEMO-" + (118 + log.length),
                subject: selected.subject,
                type: selected.type,
                engineer: selected.engineer,
                status: "Routed",
                tat: "1.1 d"
              });
              renderLog();
              renderKpi();
              list.querySelector(`[data-id="${selected.id}"]`)?.classList.add("is-done");
              detail.querySelector("#demo-doc-status").innerHTML =
                `<p class="demo-success">Routed, filed and logged (demo). Engineer notified.</p>`;
              detail.querySelector("#demo-doc-route").textContent = "Completed";
              toast(root, "Correspondence logged");
              selected = null;
              step = 0;
              renderFlow();
            }
          }, 450);
        });
      }
    }

    function renderLog() {
      root.querySelector("#demo-doc-log").innerHTML = log
        .map(
          (r) =>
            `<tr><td>${esc(r.ref)}</td><td>${esc(r.subject)}</td><td>${esc(r.type)}</td><td>${esc(r.engineer)}</td><td><span class="demo-status-pill">Routed</span></td><td>${esc(r.tat)}</td></tr>`
        )
        .join("");
    }

    renderFlow();
    renderKpi();
  }

  function mountProjectControls(root) {
    let step = 0;
    const rows = [
      { id: "EN-001", wbs: "Earthworks", inPct: 50, norm: "50%", check: "PASS" },
      { id: "CIV-031", wbs: "Structure", inPct: 75, norm: "75%", check: "PASS" },
      { id: "MEP-114", wbs: "MEP rough-in", inPct: 110, norm: "—", check: "REVIEW" },
      { id: "STR-008", wbs: "Steel erection", inPct: "—", norm: "—", check: "REVIEW" }
    ];

    root.innerHTML =
      DEMO_SHELL("Project controls automation", "Site input → validation → programme → dashboard") +
      `<div class="demo-p6 demo-app-body">
        <div class="demo-step-tabs demo-step-tabs--rich" id="demo-p6-tabs"></div>
        <div class="demo-p6-layout">
          <div id="demo-p6-body"></div>
          <aside class="demo-p6-aside" id="demo-p6-aside"></aside>
        </div>
      </div></div>`;

    const labels = ["Site input", "Validation", "P6-ready export", "Dashboard"];
    const tabs = root.querySelector("#demo-p6-tabs");
    const body = root.querySelector("#demo-p6-body");
    const aside = root.querySelector("#demo-p6-aside");

    function drawTabs() {
      tabs.innerHTML = labels
        .map(
          (l, i) =>
            `<button type="button" class="demo-tab ${i === step ? "active" : ""} ${i < step ? "done" : ""}" data-step="${i}"><span>${i + 1}</span>${l}</button>`
        )
        .join("");
      tabs.querySelectorAll(".demo-tab").forEach((b) =>
        b.addEventListener("click", () => {
          if (Number(b.dataset.step) <= step) {
            step = Number(b.dataset.step);
            draw();
          }
        })
      );
    }

    function sCurveSvg() {
      return `<svg class="demo-spark" viewBox="0 0 360 120" role="img" aria-label="Demo planned versus actual curve">
        <path d="M0 100 C60 98 120 85 180 55 S300 20 360 8" fill="none" stroke="#1a3a42" stroke-width="3"/>
        <path d="M0 100 C60 99 120 88 180 62 S295 28 360 18" fill="none" stroke="#c9e976" stroke-width="3"/>
        <text x="8" y="14" fill="#627878" font-size="10">Planned vs actual (demo)</text>
      </svg>`;
    }

    function draw() {
      drawTabs();
      if (step === 0) {
        body.innerHTML = `
          <div class="demo-file-chip"><span class="demo-file-icon">XLS</span> Weekly_Progress_DEMO.xlsx · imported</div>
          <table class="demo-log-table demo-log-table--rich">
            <thead><tr><th>Activity</th><th>WBS</th><th>Input %</th></tr></thead>
            <tbody>${rows.map((r) => `<tr><td>${esc(r.id)}</td><td>${esc(r.wbs)}</td><td>${esc(String(r.inPct))}</td></tr>`).join("")}</tbody>
          </table>
          <button type="button" class="btn btn-lime demo-btn" id="demo-p6-run">Run validation rules</button>`;
        aside.innerHTML = `<h4>Checks applied</h4><ul class="demo-checklist"><li>Activity ID exists</li><li>Progress 0–100%</li><li>Date logic</li><li>WBS mapping</li></ul>`;
        body.querySelector("#demo-p6-run").addEventListener("click", () => {
          step = 1;
          toast(root, "Validation complete — 2 items for review");
          draw();
        });
      } else if (step === 1) {
        body.innerHTML = `
          <table class="demo-log-table demo-log-table--rich">
            <thead><tr><th>Activity</th><th>Input</th><th>Normalized</th><th>Check</th></tr></thead>
            <tbody>${rows
              .map((r) => {
                const cls = r.check === "PASS" ? "pass" : "review";
                return `<tr><td>${esc(r.id)}</td><td>${esc(String(r.inPct))}</td><td>${esc(r.norm)}</td><td class="${cls}">${esc(r.check)}</td></tr>`;
              })
              .join("")}</tbody>
          </table>
          <p class="demo-hint">2 rows flagged — resolve or exclude before import (demo).</p>
          <button type="button" class="btn btn-lime demo-btn" id="demo-p6-fix">Build P6-ready package</button>`;
        aside.innerHTML = `<h4>Issue summary</h4><ul class="demo-checklist"><li class="warn">MEP-114 out of range</li><li class="warn">STR-008 missing progress</li></ul>`;
        body.querySelector("#demo-p6-fix").addEventListener("click", () => {
          step = 2;
          draw();
        });
      } else if (step === 2) {
        body.innerHTML = `
          <div class="demo-export-card">
            <h4>Export package (demo)</h4>
            <ul><li>P6_Import_DEMO.xlsx — 2 activities ready</li><li>validation_issue_log.txt — 2 warnings</li><li>update_summary.json — metadata</li></ul>
            <span class="demo-chip demo-chip--ok">Import-ready subset generated</span>
          </div>
          <button type="button" class="btn btn-lime demo-btn" id="demo-p6-dash">Refresh performance dashboard</button>`;
        aside.innerHTML = `<h4>Next step</h4><p class="demo-hint">Import to programme tool, then refresh KPIs for management review.</p>`;
        body.querySelector("#demo-p6-dash").addEventListener("click", () => {
          step = 3;
          draw();
        });
      } else {
        body.innerHTML = `
          ${sCurveSvg()}
          <div class="demo-kpi-row">
            <div><small>Plan (demo)</small><strong>82.6%</strong></div>
            <div><small>Actual (demo)</small><strong>81.1%</strong></div>
            <div><small>Variance</small><strong class="demo-variance">-1.5 pp</strong></div>
            <div><small>SPI / CPI</small><strong>0.96 / 1.02</strong></div>
          </div>`;
        aside.innerHTML = `<h4>Suggested actions (demo)</h4><ul class="demo-checklist"><li>Recovery on MEP rough-in</li><li>Confirm steel progress input</li><li>Weekly exec pack export</li></ul>`;
      }
    }

    draw();
  }

  function mountPredictive(root) {
    const history = [1180, 1210, 1195, 1250, 1280, 1310, 1290, 1340, 1365, 1388, 1410, 1425];
    root.innerHTML =
      DEMO_SHELL("Predictive analytics lab", "Historical patterns → forecast scenarios") +
      `<div class="demo-predictive demo-app-body">
        <div class="demo-flow-steps" id="demo-pred-flow"></div>
        <div class="demo-pred-controls">
          <label class="demo-range-label">Forecast horizon <strong id="demo-pred-val">6</strong> periods (demo)
            <input type="range" id="demo-pred-range" min="3" max="12" value="6"/>
          </label>
          <button type="button" class="btn btn-dark demo-btn" id="demo-pred-run">Re-run demo model</button>
        </div>
        <div class="demo-pred-chart-wrap">
          <canvas id="demo-pred-canvas" width="640" height="200" aria-label="Demo history and forecast chart"></canvas>
        </div>
        <div class="demo-kpi-row" id="demo-pred-out"></div>
        <p class="demo-hint">Metrics below are from a synthetic training split — not client performance claims.</p>
      </div></div>`;

    const flow = ["Data", "Prepare", "Train", "Evaluate", "Forecast"];
    const flowEl = root.querySelector("#demo-pred-flow");
    flowEl.innerHTML = flow.map((n, i) => `<span class="demo-flow-step ${i <= 3 ? "done" : "active"}">${n}</span>`).join("");

    const canvas = root.querySelector("#demo-pred-canvas");
    const ctx = canvas.getContext("2d");
    const range = root.querySelector("#demo-pred-range");
    const val = root.querySelector("#demo-pred-val");
    const out = root.querySelector("#demo-pred-out");

    function drawChart(horizon) {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = "#f8faf8";
      ctx.fillRect(0, 0, w, h);
      const pad = 28;
      const maxV = 1600;
      const all = history.concat(
        Array.from({ length: horizon }, (_, i) => 1425 + (i + 1) * 14 + (horizon - 6) * 2)
      );
      const n = all.length;
      ctx.strokeStyle = "#dce5df";
      for (let g = 0; g < 4; g++) {
        const y = pad + ((h - pad * 2) * g) / 3;
        ctx.beginPath();
        ctx.moveTo(pad, y);
        ctx.lineTo(w - pad, y);
        ctx.stroke();
      }
      function xy(i, v) {
        return {
          x: pad + (i / (n - 1)) * (w - pad * 2),
          y: h - pad - (v / maxV) * (h - pad * 2)
        };
      }
      ctx.beginPath();
      history.forEach((v, i) => {
        const p = xy(i, v);
        if (i === 0) ctx.moveTo(p.x, p.y);
        else ctx.lineTo(p.x, p.y);
      });
      ctx.strokeStyle = "#1a3a42";
      ctx.lineWidth = 2.5;
      ctx.stroke();
      const split = history.length - 1;
      ctx.beginPath();
      for (let i = split; i < n; i++) {
        const p = xy(i, all[i]);
        if (i === split) ctx.moveTo(p.x, p.y);
        else ctx.lineTo(p.x, p.y);
      }
      ctx.strokeStyle = "#8fbf9f";
      ctx.setLineDash([6, 4]);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.fillStyle = "rgba(201,233,118,.25)";
      ctx.beginPath();
      for (let i = split; i < n; i++) {
        const p = xy(i, all[i] + 35);
        if (i === split) ctx.moveTo(p.x, p.y);
        else ctx.lineTo(p.x, p.y);
      }
      for (let i = n - 1; i >= split; i--) {
        const p = xy(i, all[i] - 35);
        ctx.lineTo(p.x, p.y);
      }
      ctx.closePath();
      ctx.fill();
      ctx.fillStyle = "#627878";
      ctx.font = "11px Arial";
      ctx.fillText("Actual (demo history)", pad, 16);
      ctx.fillText("Forecast + band (demo)", pad + 180, 16);
    }

    function refresh() {
      const h = Number(range.value);
      val.textContent = String(h);
      drawChart(h);
      const fc = 1425 + h * 18;
      out.innerHTML = `
        <div><small>Forecast next period</small><strong>${fc}</strong></div>
        <div><small>Demo MAPE</small><strong>4.8%</strong></div>
        <div><small>Demo R²</small><strong>0.93</strong></div>
        <div><small>Model</small><strong>GBM (demo)</strong></div>`;
    }

    range.addEventListener("input", refresh);
    root.querySelector("#demo-pred-run").addEventListener("click", () => {
      flowEl.querySelectorAll(".demo-flow-step").forEach((el, i) => {
        el.classList.remove("active", "done");
        if (i < 4) el.classList.add("done");
        else el.classList.add("active");
      });
      toast(root, "Demo model re-evaluated");
      refresh();
    });
    refresh();
  }

  window.DigitalDemos = {
    mount(demoId, container) {
      if (!container) return;
      container.replaceChildren();
      if (demoId === "procurement") mountProcurement(container);
      else if (demoId === "document-control") mountDocumentControl(container);
      else if (demoId === "project-controls") mountProjectControls(container);
      else if (demoId === "predictive") mountPredictive(container);
      else {
        container.innerHTML = `<p class="demo-hint">Interactive demo not available for this item.</p>`;
      }
    }
  };
})();
