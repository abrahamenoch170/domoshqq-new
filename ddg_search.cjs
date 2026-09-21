const https = require('https');

function searchDDG(query) {
  return new Promise((resolve) => {
    https.get(`https://html.duckduckgo.com/html/?q=${encodeURIComponent(query)}`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const regex = /photo-[a-zA-Z0-9-]{27}/g;
        const matches = [...new Set(data.match(regex))];
        console.log(`\nQuery: ${query}`);
        console.log(matches.slice(0, 10));
        resolve();
      });
    });
  });
}

async function run() {
  await searchDDG('site:unsplash.com/photos "black woman" portrait');
}

run();
