const fs = require('fs');
const cssFile = 'styles.css';
let css = fs.readFileSync(cssFile, 'utf8');

// 1. Set max-width to var(--container) which is 1180px
css = css.replace(/\.hero-premium \{\s*display: grid;\s*grid-template-columns: minmax\(0, 0\.48fr\) minmax\(0, 0\.52fr\);\s*gap: 48px;\s*align-items: center;\s*max-width: 1200px;/g, 
'.hero-premium {\n  display: grid;\n  grid-template-columns: minmax(0, 0.48fr) minmax(0, 0.52fr);\n  gap: 48px;\n  align-items: center;\n  max-width: var(--container);');

// 2. Set font-size to a clamp that maxes out at 3.15rem so it doesn't wrap
css = css.replace(/\.hero-headline \{\s*font-family: "Instrument Serif", serif;\s*font-size: 3\.5rem;/g,
'.hero-headline {\n  font-family: "Instrument Serif", serif;\n  font-size: clamp(2.8rem, 4.2vw, 3.25rem);');

fs.writeFileSync(cssFile, css);
console.log('Fixed hero layout perfect');
