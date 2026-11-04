(function () {
  "use strict";

  function pad2(n) {
    return String(n).padStart(2, "0");
  }

  function clock() {
    const d = new Date();
    return `${pad2(d.getHours())}:${pad2(d.getMinutes())}:${pad2(d.getSeconds())}`;
  }

  function polishLiveCopy(text) {
    return String(text ?? "")
      .replace(/\s*\(demo sandbox\)/gi, "")
      .replace(/\s*\(automated demo\)/gi, "")
      .replace(/\s*\(automated run\)/gi, "")
      .replace(/\s*\(demo\)/gi, "")
      .replace(/\bdemo budget band\b/gi, "approved budget band")
      .replace(/\bdemo vendors\b/gi, "shortlisted vendors")
      .replace(/\bdemo folder structure\b/gi, "project folder structure")
      .replace(/PKG-DEMO-/gi, "PKG-2026-")
      .replace(/PO-2026-DEMO-/gi, "PO-2026-")
      .replace(/DOC-DEMO-/gi, "DOC-2026-")
      .replace(/\s{2,}/g, " ")
      .trim();
  }

  /**
   * Live progress + automation controls for interactive workflows.
   * @param {HTMLElement} host - .demo-app-body
   */
  function createLiveRunner(host) {
    if (!host || host.querySelector(".demo-live-panel")) {
      return host?._liveRunner || null;
    }

    const panel = document.createElement("div");
    panel.className = "demo-live-panel";
    panel.innerHTML = `
      <div class="demo-live-head">
        <div class="demo-live-status">
          <span class="demo-live-dot" aria-hidden="true"></span>
          <span class="demo-live-label">Ready — manual or automated mode</span>
        </div>
        <div class="demo-live-pct"><strong>0</strong>%</div>
      </div>
      <div class="demo-live-track" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0">
        <i class="demo-live-fill"></i>
      </div>
      <p class="demo-live-step"></p>
      <div class="demo-live-narrative" aria-live="polite">
        <span class="demo-narrative-label">What&rsquo;s happening now</span>
        <div class="demo-narrative-wrap">
          <p class="demo-narrative-text"></p>
          <span class="demo-narrative-cursor" aria-hidden="true"></span>
        </div>
      </div>
      <div class="demo-auto-controls">
        <button type="button" class="btn btn-lime demo-btn demo-auto-run">▶ Run automated workflow</button>
        <button type="button" class="btn btn-dark demo-btn demo-auto-pause" disabled>Pause</button>
        <button type="button" class="btn btn-quiet demo-btn demo-auto-reset">Reset</button>
        <label class="demo-speed">Speed
          <select class="demo-speed-select">
            <option value="1">1×</option>
            <option value="1.5">1.5×</option>
            <option value="2">2×</option>
          </select>
        </label>
      </div>
      <div class="demo-live-feed" aria-live="polite"><div class="demo-feed-empty">Live activity will stream here during automation.</div></div>`;

    host.prepend(panel);

    const labelEl = panel.querySelector(".demo-live-label");
    const pctEl = panel.querySelector(".demo-live-pct strong");
    const fillEl = panel.querySelector(".demo-live-fill");
    const trackEl = panel.querySelector(".demo-live-track");
    const stepEl = panel.querySelector(".demo-live-step");
    const feedEl = panel.querySelector(".demo-live-feed");
    const dotEl = panel.querySelector(".demo-live-dot");
    const btnRun = panel.querySelector(".demo-auto-run");
    const btnPause = panel.querySelector(".demo-auto-pause");
    const btnReset = panel.querySelector(".demo-auto-reset");
    const speedSel = panel.querySelector(".demo-speed-select");
    const narrativeEl = panel.querySelector(".demo-narrative-text");
    const cursorEl = panel.querySelector(".demo-narrative-cursor");

    const NARRATIVE_IDLE =
      "Press ▶ Run automated workflow or use the controls below — a live walkthrough will type here as each step happens.";

    const state = {
      progress: 0,
      running: false,
      paused: false,
      abort: false,
      typing: false,
      typeToken: 0,
      onRun: null,
      onReset: null
    };

    narrativeEl.textContent = NARRATIVE_IDLE;

    function setProgress(value, stepText) {
      state.progress = Math.max(0, Math.min(100, value));
      pctEl.textContent = String(Math.round(state.progress));
      fillEl.style.width = state.progress + "%";
      trackEl.setAttribute("aria-valuenow", String(Math.round(state.progress)));
      if (stepText != null) stepEl.textContent = polishLiveCopy(stepText);
    }

    function setStatus(text, mode) {
      labelEl.textContent = text;
      dotEl.classList.remove("is-live", "is-pause", "is-done");
      if (mode) dotEl.classList.add(mode);
    }

    function feed(message) {
      const msg = polishLiveCopy(message);
      if (!msg) return;
      const empty = feedEl.querySelector(".demo-feed-empty");
      if (empty) empty.remove();
      const line = document.createElement("div");
      line.className = "demo-feed-line demo-feed-line--new";
      line.innerHTML = `<time>${clock()}</time><span>${msg}</span>`;
      feedEl.prepend(line);
      requestAnimationFrame(() => line.classList.remove("demo-feed-line--new"));
      while (feedEl.children.length > 14) feedEl.lastElementChild?.remove();
    }

    function clearFeed() {
      feedEl.innerHTML =
        '<div class="demo-feed-empty">Live activity will stream here during automation.</div>';
    }

    function setCursor(active) {
      cursorEl.classList.toggle("is-typing", !!active);
    }

    function stopNarrating() {
      state.typeToken += 1;
      state.typing = false;
      setCursor(false);
    }

    function clearNarrative() {
      stopNarrating();
      narrativeEl.textContent = NARRATIVE_IDLE;
    }

    /**
     * Type out narrative text in real time (respects pause, speed, abort).
     * @param {string} text
     * @param {{ append?: boolean, replace?: boolean, charMs?: number }} [options]
     */
    async function narrate(text, options) {
      const opts = options || {};
      const token = ++state.typeToken;
      const msg = polishLiveCopy(text);
      if (!msg) return;

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        if (opts.replace) narrativeEl.textContent = "";
        else if (opts.append && narrativeEl.textContent && narrativeEl.textContent !== NARRATIVE_IDLE) {
          narrativeEl.textContent += "\n\n";
        } else if (narrativeEl.textContent === NARRATIVE_IDLE) narrativeEl.textContent = "";
        narrativeEl.textContent += msg;
        state.typing = false;
        setCursor(false);
        return;
      }

      state.typing = true;
      setCursor(true);

      if (opts.replace) {
        narrativeEl.textContent = "";
      } else if (opts.append && narrativeEl.textContent && narrativeEl.textContent !== NARRATIVE_IDLE) {
        narrativeEl.textContent += "\n\n";
      } else if (!opts.append) {
        narrativeEl.textContent = "";
      } else if (narrativeEl.textContent === NARRATIVE_IDLE) {
        narrativeEl.textContent = "";
      }

      const charMs = (opts.charMs || 20) / speedFactor();

      for (let i = 0; i < msg.length; i++) {
        if (state.abort || token !== state.typeToken) {
          state.typing = false;
          setCursor(false);
          return;
        }
        narrativeEl.textContent += msg[i];
        await wait(charMs);
      }

      if (token === state.typeToken) {
        state.typing = false;
        setCursor(false);
      }
    }

    function speedFactor() {
      return Number(speedSel.value) || 1;
    }

    function wait(ms) {
      const scaled = ms / speedFactor();
      return new Promise((resolve, reject) => {
        const start = performance.now();
        function tick() {
          if (state.abort) {
            reject(new Error("aborted"));
            return;
          }
          if (state.paused) {
            requestAnimationFrame(tick);
            return;
          }
          if (performance.now() - start >= scaled) resolve();
          else requestAnimationFrame(tick);
        }
        tick();
      });
    }

    async function animateProgress(from, to, durationMs, stepText, substeps) {
      const steps = substeps && substeps.length ? substeps : [stepText || "Processing…"];
      const total = durationMs / speedFactor();
      const start = performance.now();
      let subIndex = 0;

      return new Promise((resolve, reject) => {
        function frame(now) {
          if (state.abort) {
            reject(new Error("aborted"));
            return;
          }
          if (state.paused) {
            requestAnimationFrame(frame);
            return;
          }
          const t = Math.min(1, (now - start) / total);
          const value = from + (to - from) * t;
          setProgress(value, steps[Math.min(subIndex, steps.length - 1)]);
          if (t > (subIndex + 1) / steps.length && subIndex < steps.length - 1) subIndex++;
          if (t >= 1) {
            setProgress(to, stepText);
            resolve();
          } else requestAnimationFrame(frame);
        }
        requestAnimationFrame(frame);
      });
    }

    async function runAutomation(fn) {
      if (state.running) return;
      state.running = true;
      state.abort = false;
      state.paused = false;
      btnRun.disabled = true;
      btnPause.disabled = false;
      setStatus("Automation running…", "is-live");
      feed("Automation started.");
      try {
        await fn({
          wait,
          animateProgress,
          setProgress,
          setStatus,
          feed,
          narrate,
          clearNarrative,
          speed: speedFactor
        });
        setProgress(100, "Workflow complete.");
        setStatus("Automation finished", "is-done");
        feed("Automation finished successfully.");
      } catch (e) {
        if (e.message !== "aborted") {
          setStatus("Automation stopped", "is-pause");
          feed("Automation stopped.");
        }
      } finally {
        state.running = false;
        btnRun.disabled = false;
        btnPause.disabled = true;
        btnPause.textContent = "Pause";
      }
    }

    function stopAutomation() {
      state.abort = true;
      state.running = false;
      btnRun.disabled = false;
      btnPause.disabled = true;
      btnPause.textContent = "Pause";
      setStatus("Stopped", "is-pause");
    }

    btnRun.addEventListener("click", () => {
      if (typeof state.onRun === "function") state.onRun();
    });
    btnPause.addEventListener("click", () => {
      if (!state.running) return;
      state.paused = !state.paused;
      btnPause.textContent = state.paused ? "Resume" : "Pause";
      setStatus(state.paused ? "Paused" : "Automation running…", state.paused ? "is-pause" : "is-live");
      feed(state.paused ? "Automation paused." : "Automation resumed.");
    });
    btnReset.addEventListener("click", () => {
      stopAutomation();
      stopNarrating();
      clearFeed();
      clearNarrative();
      setProgress(0, "");
      stepEl.textContent = "";
      setStatus("Ready — manual or automated mode", "");
      if (typeof state.onReset === "function") state.onReset();
      feed("Session reset.");
    });

    const api = {
      setProgress,
      setStatus,
      feed,
      clearFeed,
      narrate,
      clearNarrative,
      wait,
      animateProgress,
      runAutomation,
      stopAutomation,
      set onRun(fn) {
        state.onRun = fn;
      },
      set onReset(fn) {
        state.onReset = fn;
      },
      get running() {
        return state.running;
      }
    };

    host._liveRunner = api;
    return api;
  }

  window.DemoLive = { create: createLiveRunner, polishLiveCopy };
})();
