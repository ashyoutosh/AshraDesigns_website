const fs = require('fs');
const cssFile = 'styles.css';
let css = fs.readFileSync(cssFile, 'utf8');

css = css.replace(/\.hero-premium \{[\s\S]*?\}/, match => match.replace('max-width: 1240px;', 'max-width: 1080px;').replace('gap: 64px;', 'gap: 48px;'));
css = css.replace(/\.hero-headline \{[\s\S]*?\}/, match => match.replace('font-size: clamp(3.2rem, 4.5vw, 4.5rem);', 'font-size: clamp(3rem, 4vw, 3.8rem);').replace('max-width: 620px;', 'max-width: 580px;'));

fs.writeFileSync(cssFile, css);
console.log('Updated hero desktop max-width and font');
