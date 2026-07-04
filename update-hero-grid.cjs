const fs = require('fs');
const cssFile = 'styles.css';
let css = fs.readFileSync(cssFile, 'utf8');

css = css.replace(/grid-template-columns: minmax\(0, 1.05fr\) minmax\(0, 0.95fr\);/, 'grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.85fr);');
css = css.replace(/\.hero-illustration-wrapper \{[\s\S]*?\}/, match => match.replace('max-width: 540px;', 'max-width: 500px;'));

fs.writeFileSync(cssFile, css);
console.log('Updated hero grid');
