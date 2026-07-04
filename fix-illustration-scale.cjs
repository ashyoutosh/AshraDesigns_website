const fs = require('fs');
const cssFile = 'styles.css';
let css = fs.readFileSync(cssFile, 'utf8');

css = css.replace(/\.illustration-large \{\s*transform: scale\(1\.15\);/g, '.illustration-large {\n  transform: scale(1.25);');

css = css.replace(/mask-image: radial-gradient\(circle at center, black 60%, transparent 100%\);/g, 'mask-image: radial-gradient(circle at center, black 75%, transparent 100%);');
css = css.replace(/-webkit-mask-image: radial-gradient\(\s*circle at center,\s*black 60%,\s*transparent 100%\s*\);/g, '-webkit-mask-image: radial-gradient(circle at center, black 75%, transparent 100%);');

css = css.replace(/\.hero-illustration-wrapper \{\s*position: relative;\s*width: 110%;\s*max-width: none;\s*left: -5%;/g, '.hero-illustration-wrapper {\n  position: relative;\n  width: 100%;\n  max-width: none;');

fs.writeFileSync(cssFile, css);
console.log('Fixed illustration scale');
