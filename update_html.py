import re

def main():
    with open("index.html", "r", encoding="utf-8") as f:
        html = f.read()
    
    # We will find each article with class="approach-stage"
    # and reorder / wrap its contents.
    
    def process_article(match):
        content = match.group(0)
        if 'class="stage-text-content"' in content:
            return content
            
        m1 = re.search(r'(<div\s+class="stage-copy[^>]*>[\s\S]*?</div>)', content)
        m2 = re.search(r'(<p\s+class="stage-description[^>]*>[\s\S]*?</p>)', content)
        m3 = re.search(r'(<div[^>]*data-reveal-step="visual"[^>]*>[\s\S]*?</div>\s*</div>\s*</div>\s*</div>)', content)
        if not m3: # some may have different nesting
            m3 = re.search(r'(<div[^>]*data-reveal-step="visual"[^>]*>[\s\S]*?<!-- END VISUAL DASHBOARD -->\s*</div>\s*</div>)', content)
            if not m3:
                m3 = re.search(r'(<div[^>]*data-reveal-step="visual"[^>]*>[\s\S]*?^                </div>)', content, re.MULTILINE)
        
        m4 = re.search(r'(<div\s+class="stage-metadata-row[^>]*>[\s\S]*?</div>\s*</div>)', content)
        
        # We'll just do a simpler replacement:
        # 1. find `<div class="stage-copy `
        return content

    # Actually, let's just use Python string splitting
    pass

if __name__ == "__main__":
    main()

