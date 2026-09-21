const https = require('https');

function scrapePexels(query) {
  return new Promise((resolve) => {
    https.get(`https://www.pexels.com/search/${encodeURIComponent(query)}/`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const regex = /https:\/\/images\.pexels\.com\/photos\/\d+\/pexels-photo-\d+\.jpeg[^\s"']+/g;
        const matches = [...new Set(data.match(regex))];
        console.log(`\nQuery: ${query}`);
        console.log(matches.slice(0, 5));
        resolve();
      });
    });
  });
}

async function run() {
  await scrapePexels('black nigerian man');
  await scrapePexels('black nigerian woman');
  await scrapePexels('older black african man');
  await scrapePexels('mature black african woman');
  await scrapePexels('black african businessman');
}

run();
