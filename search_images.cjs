const https = require('https');
const http = require('http');

function search(query) {
  return new Promise((resolve) => {
    https.get(`https://api.duckduckgo.com/?q=${encodeURIComponent(query)}&format=json`, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        console.log(`\nQuery: ${query}`);
        console.log(data);
        resolve();
      });
    });
  });
}

search('site:unsplash.com/photos black woman portrait');
