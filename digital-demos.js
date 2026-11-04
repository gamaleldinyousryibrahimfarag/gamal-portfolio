(function () {
  "use strict";

  const DEMO_BADGE =
    '<p class="demo-badge"><span>DEMO TRIAL</span> Synthetic data only — not a live client system</p>';

  const PROCUREMENT_STAGES = [
    "Site request",
    "Technical review",
    "Budget check",
    "Procurement review",
    "PO issued",
    "Closed"
  ];

  const ROLES = {
    site: { label: "Site engineer", can: ["submit"] },
    finance: { label: "Accountant", can: ["approve_budget", "reject_budget"] },
    procurement: { label: "Procurement officer", can: ["approve_procurement", "issue_po"] }
  };

  function mountProcurement(root) {
    const state = {
      stage: 0,
      role: "site",
      audit: [{ at: now(), who: "System", action: "Demo package PKG-DEMO-074 created (draft)." }]
    };

    root.innerHTML =
      DEMO_BADGE +
      `<div class="demo-procurement">
        <div class="demo-toolbar">
          <label>Act as
            <select id="demo-proc-role">
              <option value="site">Site engineer</option>
              <option value="finance">Accountant</option>
              <option value="procurement">Procurement officer</option>
            </select>
          </label>
          <span class="demo-pkg-id">PKG-DEMO-074 · Electrical materials</span>
        </div>
        <div class="demo-stage-track" id="demo-proc-stages"></div>
        <div class="demo-panel">
          <h4>Current task</h4>
          <p id="demo-proc-task"></p>
          <div class="demo-actions" id="demo-proc-actions"></div>
        </div>
        <div class="demo-audit">
          <h4>Approval history &amp; audit log</h4>
          <ul id="demo-proc-audit"></ul>
        </div>
      </div>`;

    const roleSel = root.querySelector("#demo-proc-role");
    roleSel.addEventListener("change", () => {
      state.role = roleSel.value;
      render();
    });

    function now() {
      return new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    }

    function log(who, action) {
      state.audit.unshift({ at: now(), who, action });
    }

    function renderStages() {
      const track = root.querySelector("#demo-proc-stages");
      track.innerHTML = PROCUREMENT_STAGES.map((name, i) => {
        const cls =
          i < state.stage ? "done" : i === state.stage ? "active" : "";
        return `<span class="demo-stage ${cls}">${name}</span>`;
      }).join('<span class="demo-stage-arrow" aria-hidden="true">→</span>');
    }

    function render() {
      renderStages();
      const task = root.querySelector("#demo-proc-task");
      const actions = root.querySelector("#demo-proc-actions");
      const auditEl = root.querySelector("#demo-proc-audit");
      actions.innerHTML = "";

      const tasks = [
        "Site engineer: submit material request with qty and spec reference.",
        "Accountant: validate budget availability for PKG-DEMO-074.",
        "Procurement officer: review package and prepare RFQ / PO path.",
        "Procurement officer: issue PO and notify site.",
        "All roles: confirm delivery receipt and close package.",
        "Package closed — view full audit trail below."
      ];
      task.textContent = tasks[Math.min(state.stage, tasks.length - 1)];

      auditEl.innerHTML = state.audit
        .map((e) => `<li><time>${e.at}</time> <strong>${e.who}</strong> — ${e.action}</li>`)
        .join("");

      if (state.stage >= 5) return;

      function btn(label, handler, enabled) {
        const b = document.createElement("button");
        b.type = "button";
        b.className = "btn btn-dark demo-btn";
        b.textContent = label;
        b.disabled = !enabled;
        b.addEventListener("click", handler);
        actions.appendChild(b);
      }

      if (state.stage === 0 && state.role === "site") {
        btn("Submit request to finance", () => {
          state.stage = 1;
          log("Site engineer", "Submitted PKG-DEMO-074 for budget check.");
          render();
        }, true);
      } else if (state.stage === 1 && state.role === "finance") {
        btn("Approve budget", () => {
          state.stage = 2;
          log("Accountant", "Budget approved — forwarded to procurement.");
          render();
        }, true);
        btn("Return to site (demo)", () => {
          log("Accountant", "Returned to site for clarification (demo).");
          render();
        }, true);
      } else if (state.stage === 2 && state.role === "procurement") {
        btn("Accept for procurement review", () => {
          state.stage = 3;
          log("Procurement officer", "Package accepted; RFQ comparison recorded (demo).");
          render();
        }, true);
      } else if (state.stage === 3 && state.role === "procurement") {
        btn("Issue PO", () => {
          state.stage = 4;
          log("Procurement officer", "PO issued — delivery tracking started (demo).");
          render();
        }, true);
      } else if (state.stage === 4) {
        btn("Confirm site receipt & close", () => {
          state.stage = 5;
          log("Site engineer", "Delivery received on site (demo).");
          log("System", "Package closed with complete audit trail.");
          render();
        }, true);
      } else {
        const hint = document.createElement("p");
        hint.className = "demo-hint";
        hint.textContent = `Switch role to "${ROLES[requiredRole(state.stage)]?.label || "appropriate user"}" to continue this step.`;
        actions.appendChild(hint);
      }
    }

    function requiredRole(stage) {
      if (stage === 0) return "site";
      if (stage === 1) return "finance";
      if (stage === 2 || stage === 3) return "procurement";
      return "site";
    }

    render();
  }

  function mountDocumentControl(root) {
    const emails = [
      {
        id: "e1",
        subject: "RE: REV-03 Piping Layout P-101",
        type: "Drawing",
        engineer: "Piping engineer",
        rule: "Piping drawings → piping discipline"
      },
      {
        id: "e2",
        subject: "Material submittal — switchgear schedule",
        type: "Submittal",
        engineer: "Electrical engineer",
        rule: "Electrical submittals → electrical discipline"
      },
      {
        id: "e3",
        subject: "RFI: façade anchor detail",
        type: "RFI",
        engineer: "Façade engineer",
        rule: "Façade RFIs → envelope discipline"
      }
    ];
    let selected = null;
    const log = [];

    root.innerHTML =
      DEMO_BADGE +
      `<div class="demo-doc">
        <div class="demo-doc-layout">
          <div class="demo-inbox">
            <h4>Inbox (demo)</h4>
            <ul id="demo-doc-list"></ul>
          </div>
          <div class="demo-doc-detail" id="demo-doc-detail">
            <p class="demo-hint">Select a message to classify and route.</p>
          </div>
        </div>
        <div class="demo-log-table-wrap">
          <h4>Log register</h4>
          <table class="demo-log-table"><thead><tr><th>Ref</th><th>Type</th><th>Engineer</th><th>Status</th></tr></thead><tbody id="demo-doc-log"></tbody></table>
        </div>
      </div>`;

    const list = root.querySelector("#demo-doc-list");
    list.innerHTML = emails
      .map(
        (e) =>
          `<li><button type="button" class="demo-inbox-item" data-id="${e.id}">${e.subject}</button></li>`
      )
      .join("");

    list.addEventListener("click", (ev) => {
      const btn = ev.target.closest(".demo-inbox-item");
      if (!btn) return;
      selected = emails.find((x) => x.id === btn.dataset.id);
      renderDetail();
    });

    function renderDetail() {
      const detail = root.querySelector("#demo-doc-detail");
      if (!selected) return;
      detail.innerHTML = `
        <h4>${selected.subject}</h4>
        <p><strong>Classification:</strong> ${selected.type}</p>
        <p><strong>Routing rule:</strong> ${selected.rule}</p>
        <p><strong>Assigned engineer:</strong> ${selected.engineer}</p>
        <p><strong>Filing path:</strong> /Demo/2026/${selected.type}/${selected.id}/</p>
        <button type="button" class="btn btn-lime demo-btn" id="demo-doc-route">Route, file &amp; log</button>`;
      detail.querySelector("#demo-doc-route").addEventListener("click", () => {
        log.push({
          ref: "DOC-DEMO-" + (100 + log.length),
          type: selected.type,
          engineer: selected.engineer,
          status: "Routed"
        });
        renderLog();
        detail.innerHTML += `<p class="demo-success">Logged and filed (demo). Turnaround tracking started.</p>`;
      });
    }

    function renderLog() {
      root.querySelector("#demo-doc-log").innerHTML = log
        .map(
          (r) =>
            `<tr><td>${r.ref}</td><td>${r.type}</td><td>${r.engineer}</td><td>${r.status}</td></tr>`
        )
        .join("");
    }
  }

  function mountProjectControls(root) {
    let step = 0;
    const rows = [
      { id: "EN-001", pct: 50, ok: true },
      { id: "CIV-031", pct: 75, ok: true },
      { id: "MEP-114", pct: 110, ok: false },
      { id: "STR-008", pct: "", ok: false }
    ];

    root.innerHTML =
      DEMO_BADGE +
      `<div class="demo-p6">
        <div class="demo-step-tabs" id="demo-p6-tabs"></div>
        <div id="demo-p6-body"></div>
      </div>`;

    const tabs = root.querySelector("#demo-p6-tabs");
    const body = root.querySelector("#demo-p6-body");
    const labels = ["Site input", "Validation log", "P6-ready export", "Dashboard"];

    function drawTabs() {
      tabs.innerHTML = labels
        .map(
          (l, i) =>
            `<button type="button" class="demo-tab ${i === step ? "active" : ""}" data-step="${i}">${i + 1}. ${l}</button>`
        )
        .join("");
      tabs.querySelectorAll(".demo-tab").forEach((b) =>
        b.addEventListener("click", () => {
          step = Number(b.dataset.step);
          draw();
        })
      );
    }

    function draw() {
      drawTabs();
      if (step === 0) {
        body.innerHTML = `<p>Weekly_Progress_DEMO.xlsx — sample rows</p>
          <table class="demo-log-table"><thead><tr><th>Activity</th><th>Progress %</th></tr></thead>
          <tbody>${rows.map((r) => `<tr><td>${r.id}</td><td>${r.pct === "" ? "—" : r.pct}</td></tr>`).join("")}</tbody></table>
          <button type="button" class="btn btn-dark demo-btn" id="demo-p6-run">Run validation</button>`;
        body.querySelector("#demo-p6-run").addEventListener("click", () => {
          step = 1;
          draw();
        });
      } else if (step === 1) {
        body.innerHTML = `<table class="demo-log-table"><thead><tr><th>Activity</th><th>Check</th></tr></thead><tbody>
          ${rows
            .map((r) => {
              let status = "PASS";
              if (r.pct === "") status = "REVIEW — missing %";
              else if (r.pct > 100) status = "REVIEW — out of range";
              return `<tr><td>${r.id}</td><td class="${status.startsWith("PASS") ? "pass" : "review"}">${status}</td></tr>`;
            })
            .join("")}</tbody></table>
          <button type="button" class="btn btn-dark demo-btn" id="demo-p6-fix">Prepare P6-ready file (demo)</button>`;
        body.querySelector("#demo-p6-fix").addEventListener("click", () => {
          step = 2;
          draw();
        });
      } else if (step === 2) {
        body.innerHTML = `<p class="demo-success"><strong>Output:</strong> P6_Import_DEMO.xlsx + validation_issue_log.txt</p>
          <p>Normalized rows ready for import (demo). Issues flagged for MEP-114 and STR-008.</p>
          <button type="button" class="btn btn-dark demo-btn" id="demo-p6-dash">Refresh dashboard</button>`;
        body.querySelector("#demo-p6-dash").addEventListener("click", () => {
          step = 3;
          draw();
        });
      } else {
        body.innerHTML = `<div class="demo-kpi-row">
          <div><small>Plan (demo)</small><strong>82.6%</strong></div>
          <div><small>Actual (demo)</small><strong>81.1%</strong></div>
          <div><small>SPI (demo)</small><strong>0.96</strong></div>
          <div><small>CPI (demo)</small><strong>1.02</strong></div>
        </div>
        <p class="demo-hint">Illustrative metrics for portfolio demonstration — not measured project KPIs.</p>`;
      }
    }

    draw();
  }

  function mountPredictive(root) {
    root.innerHTML =
      DEMO_BADGE +
      `<div class="demo-predictive">
        <p>Explore a simplified forecast step-through on synthetic monthly volumes.</p>
        <label>Forecast horizon (demo periods)
          <input type="range" id="demo-pred-range" min="3" max="12" value="6"/>
          <span id="demo-pred-val">6</span>
        </label>
        <div class="demo-kpi-row" id="demo-pred-out"></div>
        <p class="demo-hint">Model metrics shown are from a demo training split — not client outcomes.</p>
      </div>`;
    const range = root.querySelector("#demo-pred-range");
    const val = root.querySelector("#demo-pred-val");
    const out = root.querySelector("#demo-pred-out");
    function refresh() {
      val.textContent = range.value;
      const h = Number(range.value);
      out.innerHTML = `
        <div><small>Demo forecast</small><strong>${1420 + h * 18}</strong></div>
        <div><small>Demo MAPE</small><strong>4.8%</strong></div>
        <div><small>Demo R²</small><strong>0.93</strong></div>`;
    }
    range.addEventListener("input", refresh);
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
