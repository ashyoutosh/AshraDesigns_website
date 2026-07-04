const fs = require('fs');
const cssFile = 'styles.css';
let css = fs.readFileSync(cssFile, 'utf8');

css = css.replace(/\.hero-illustration-wrapper \{\s*position: relative;\s*width: 100%;\s*max-width: 600px;/g, '.hero-illustration-wrapper {\n  position: relative;\n  width: 110%;\n  max-width: none;\n  left: -5%;');

css = css.replace(/\.illustration-large \{\s*transform: scale\(1\.15\);/g, '.illustration-large {\n  transform: scale(1.15);');

css = css.replace(/\.hero-premium-right \{\s*position: relative;\s*display: flex;\s*justify-content: flex-end;/g, '.hero-premium-right {\n  position: relative;\n  display: flex;\n  justify-content: center;');

fs.writeFileSync(cssFile, css);
console.log('Updated hero illustration again');
