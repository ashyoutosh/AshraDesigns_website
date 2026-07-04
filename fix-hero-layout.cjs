const fs = require('fs');
const cssFile = 'styles.css';
let css = fs.readFileSync(cssFile, 'utf8');

// 1. Update the max-width of hero-premium to 1200px (or var(--container) which is 1180px) 
// to give it more breathing room and scale up the image.
css = css.replace(/\.hero-premium \{\s*display: grid;\s*grid-template-columns: minmax\(0, 0\.48fr\) minmax\(0, 0\.52fr\);\s*gap: 48px;\s*align-items: center;\s*max-width: 1080px;/g, 
'.hero-premium {\n  display: grid;\n  grid-template-columns: minmax(0, 0.48fr) minmax(0, 0.52fr);\n  gap: 48px;\n  align-items: center;\n  max-width: 1200px;');

// 2. Change the clamp to a fixed rem value for desktop to ensure it never wraps due to vw calculations exceeding the container max-width.
css = css.replace(/\.hero-headline \{\s*font-family: "Instrument Serif", serif;\s*font-size: clamp\(3rem, 4vw, 3\.8rem\);\s*font-weight: 400;\s*line-height: 1\.15;\s*color: var\(--text\);\s*max-width: 580px;/g,
'.hero-headline {\n  font-family: "Instrument Serif", serif;\n  font-size: 3.5rem;\n  font-weight: 400;\n  line-height: 1.15;\n  color: var(--text);\n  max-width: 580px;');

fs.writeFileSync(cssFile, css);
console.log('Fixed hero layout differences');
