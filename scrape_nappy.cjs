const https = require('https');

function scrapeNappy() {
  return new Promise((resolve) => {
    https.get('https://nappy.co/?s=portrait', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
      }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const regex = /https:\/\/images\.nappy\.co\/uploads\/large\/[a-zA-Z0-9-]+\.(jpg|jpeg|png)/g;
        const matches = [...new Set(data.match(regex))];
        console.log(matches.slice(0, 10));
        resolve();
      });
    });
  });
}

scrapeNappy();
