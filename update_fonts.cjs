const fs = require('fs');

// 1. Update index.html
let html = fs.readFileSync('index.html', 'utf8');
const fontLink = `<link rel="preconnect" href="https://fonts.googleapis.com">\n<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n<link href="https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400..700;1,400..700&display=swap" rel="stylesheet">\n`;
html = html.replace('</title>', '</title>\n    ' + fontLink);
fs.writeFileSync('index.html', html);

// 2. Update index.css
let css = fs.readFileSync('src/index.css', 'utf8');
css = css.replace(/--font-inter: "Inter", [^;]+;/g, '--font-instrument: "Instrument Sans", sans-serif;');
css = css.replace(/var\(--font-inter\)/g, 'var(--font-instrument)');
fs.writeFileSync('src/index.css', css);

console.log("Fonts updated to Instrument Sans.");
