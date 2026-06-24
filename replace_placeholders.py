import re

with open("index.html", "r", encoding="utf-8") as f:
    text = f.read()

placeholder_html = """                <div class="stage-reveal" data-reveal-step="visual">
                  <div class="placeholder-visual">
                    <div class="placeholder-header-strip"></div>
                    <div class="placeholder-content-grid">
                      <div class="placeholder-rect main"></div>
                      <div class="placeholder-rect side"></div>
                      <div class="placeholder-rect bottom"></div>
                    </div>
                    <div class="placeholder-label">
                      Future interactive illustration.
                    </div>
                  </div>
                </div>"""

# I will replace the previous simple placeholder with this rich one.
import re
old_placeholder = re.compile(r'<div class="stage-reveal" data-reveal-step="visual">\s*<div class="placeholder-visual">\s*<div class="placeholder-content">\s*<p>Future interactive illustration\.</p>\s*</div>\s*</div>\s*</div>')

new_text = old_placeholder.sub(placeholder_html, text)

with open("index.html", "w", encoding="utf-8") as f:
    f.write(new_text)
