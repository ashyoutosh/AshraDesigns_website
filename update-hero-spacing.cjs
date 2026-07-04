const fs = require('fs');
const cssFile = 'styles.css';
let css = fs.readFileSync(cssFile, 'utf8');

css = css.replace(/\.trust-badge \{[\s\S]*?\}/, match => match.replace('margin-bottom: 24px;', 'margin-bottom: 20px;'));
css = css.replace(/\.hero-headline \{[\s\S]*?\}/, match => match.replace('margin: 0 0 24px;', 'margin: 0 0 20px;').replace('max-width: 650px;', 'max-width: 620px;'));
css = css.replace(/\.hero-supporting-group \{[\s\S]*?\}/, match => match.replace('margin: 0 0 32px;', 'margin: 0 0 32px;'));
css = css.replace(/\.hero-supporting \{[\s\S]*?\}/, match => match.replace('max-width: 460px;', 'max-width: 480px;'));
css = css.replace(/\.hero-actions-premium \{[\s\S]*?\}/, match => match.replace('margin-bottom: 32px;', 'margin-bottom: 40px;'));
css = css.replace(/\.hero-premium-right \{[\s\S]*?\}/, match => match.replace('justify-content: center;', 'justify-content: flex-end;'));
css = css.replace(/\.hero-illustration-wrapper \{[\s\S]*?\}/, match => match.replace('max-width: 580px;', 'max-width: 540px;'));
css = css.replace(/\.illustration-large \{[\s\S]*?\}/, match => match.replace('transform: scale(1.15);', 'transform: scale(1.05);'));

fs.writeFileSync(cssFile, css);
console.log('Updated hero spacing');
