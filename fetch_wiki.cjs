const https = require('https');

function searchWiki(query) {
  return new Promise((resolve) => {
    https.get(`https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(query)}&utf8=&format=json`, {
      headers: { 'User-Agent': 'Bot/1.0' }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const parsed = JSON.parse(data);
        console.log(`\nQuery: ${query}`);
        parsed.query.search.slice(0, 3).forEach(r => console.log(r.title));
        resolve();
      });
    });
  });
}

async function run() {
  await searchWiki('Nigerian man portrait');
  await searchWiki('African woman portrait');
}

run();
