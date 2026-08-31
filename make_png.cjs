const sharp = require('sharp');
const fs = require('fs');

const svg = fs.readFileSync('public/og-image.svg');

sharp(svg)
  .png()
  .toFile('public/og-image.png')
  .then(info => {
    console.log('PNG created:', info);
  })
  .catch(err => {
    console.error('Error creating PNG:', err);
  });
