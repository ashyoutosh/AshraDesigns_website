const fs = require('fs');
const cssFile = 'styles.css';
let css = fs.readFileSync(cssFile, 'utf8');

// Update grid layout
css = css.replace(/grid-template-columns: minmax\(0, 1\.15fr\) minmax\(0, 0\.85fr\);/, 'grid-template-columns: minmax(0, 0.48fr) minmax(0, 0.52fr);');

// Update hero-illustration-wrapper max-width
css = css.replace(/\.hero-illustration-wrapper \{\s*position: relative;\s*width: 100%;\s*max-width: 500px;/g, '.hero-illustration-wrapper {\n  position: relative;\n  width: 100%;\n  max-width: 600px;');

// Update illustration-large scale
css = css.replace(/\.illustration-large \{\s*transform: scale\(1\.05\);/g, '.illustration-large {\n  transform: scale(1.15);');

fs.writeFileSync(cssFile, css);
console.log('Updated hero illustration');
