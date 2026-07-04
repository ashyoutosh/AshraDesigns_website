const fs = require('fs');
const cssFile = 'styles.css';
let css = fs.readFileSync(cssFile, 'utf8');

const heroPremiumRegex = /\.hero-premium \{[\s\S]*?\}/;
const heroPremiumReplacement = `.hero-premium {
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
  gap: 64px;
  align-items: center;
  max-width: 1240px;
  margin: 0 auto;
  padding: 80px 32px;
  min-height: 85vh;
}`;

css = css.replace(heroPremiumRegex, heroPremiumReplacement);

fs.writeFileSync(cssFile, css);
console.log('Updated hero-premium');
