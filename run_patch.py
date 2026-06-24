import re

with open("index.html", "r", encoding="utf-8") as f:
    text = f.read()

# find the script starting with `/* ─────────────────────────────────────────────────────────────────────`
# and replace it entirely

start_marker = "/* ─────────────────────────────────────────────────────────────────────\n       Approach Section"
end_marker = "})();\n\n      /* ── Intersection Observer for animations ── */"

start_idx = text.find(start_marker)
end_idx = text.find(end_marker)

if start_idx != -1 and end_idx != -1:
    end_idx += len("})();\n")
    
    new_script = """/* ─────────────────────────────────────────────────────────────────────
       Approach Section — Scroll Story
    ─────────────────────────────────────────────────────────────────────── */
      (function () {
        const solution = document.querySelector(".solution");
        const layout = document.querySelector(".approach-layout");
        const stages = Array.from(document.querySelectorAll("[data-approach-stage]"));
        const navLinks = Array.from(document.querySelectorAll("[data-approach-link]"));
        if (!solution || !layout || !stages.length) return;
        const DESKTOP_BP = 820;
        
        let activeIdx = 0;
        
        const setSectionHeight = () => {
          if (window.innerWidth > DESKTOP_BP) {
            solution.style.height = "400vh";
          } else {
            solution.style.height = "auto";
          }
        };
        setSectionHeight();
        window.addEventListener("resize", setSectionHeight, { passive: true });
        
        const countMetric = (el) => {
          if (el.dataset.counted === "true") return;
          el.dataset.counted = "true";
          const target = Number(el.dataset.countTo);
          const start = performance.now();
          const run = (now) => {
            const t = Math.min((now - start) / 850, 1);
            el.textContent = Math.round(target * (1 - Math.pow(1 - t, 3)));
            if (t < 1) requestAnimationFrame(run);
          };
          requestAnimationFrame(run);
        };
        
        const triggerCounters = (stage) => {
          stage.querySelectorAll("[data-count-to]").forEach(countMetric);
        };
        
        const applyStageClasses = (nextIdx, isDesktop) => {
          if (nextIdx === activeIdx && isDesktop) return; // avoid redundant work
          activeIdx = nextIdx;
          
          stages.forEach((stage, i) => {
            stage.classList.remove("active", "above");
            if (isDesktop) {
              if (i < nextIdx) stage.classList.add("above");
              else if (i === nextIdx) stage.classList.add("active");
            }
          });
          
          navLinks.forEach((link, i) => {
            link.classList.toggle("active", i === nextIdx);
            link.classList.toggle("complete", i < nextIdx);
          });
          
          const fill = document.getElementById("progress-fill");
          if (fill) fill.style.transform = `translateY(${nextIdx * 100}%)`;
          
          triggerCounters(stages[nextIdx]);
        };
        
        const onScroll = () => {
          if (window.innerWidth <= DESKTOP_BP) return;
          const rect = solution.getBoundingClientRect();
          const maxScroll = solution.offsetHeight - window.innerHeight;
          let progress = -rect.top / maxScroll;
          if (progress < 0) progress = 0;
          if (progress > 1) progress = 1;
          
          let newIdx = 0;
          if (progress < 0.25) newIdx = 0;
          else if (progress < 0.5) newIdx = 1;
          else if (progress < 0.75) newIdx = 2;
          else newIdx = 3;
          
          if (newIdx !== activeIdx || !stages[newIdx].classList.contains('active')) {
            applyStageClasses(newIdx, true);
          }
        };
        
        window.addEventListener("scroll", onScroll, { passive: true });
        
        navLinks.forEach((link, i) => {
          link.addEventListener("click", (e) => {
            e.preventDefault();
            if (window.innerWidth > DESKTOP_BP) {
              const maxScroll = solution.offsetHeight - window.innerHeight;
              const targetProgress = (i * 0.25) + 0.125; // center of the step range
              const targetScroll = solution.offsetTop + (maxScroll * targetProgress);
              window.scrollTo({
                top: targetScroll,
                behavior: "smooth",
              });
            } else {
              const target = document.getElementById(stages[i].id);
              if (target) {
                target.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }
          });
        });
        
        // Initial setup
        const isDesktop = window.innerWidth > DESKTOP_BP;
        if (isDesktop) {
          onScroll();
        } else {
          applyStageClasses(0, false);
          triggerCounters(stages[0]);
        }
      """
    
    final_text = text[:start_idx] + new_script + text[end_idx:]
    with open("index.html", "w", encoding="utf-8") as f:
        f.write(final_text)
else:
    print("Could not find script markers")
