const https = require('https');

function searchUnsplash(query) {
  return new Promise((resolve) => {
    https.get(`https://unsplash.com/s/photos/${encodeURIComponent(query)}`, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        // match exact photo IDs
        const regex = /photo-[0-9]{13}-[a-z0-9]{12}/g;
        const matches = [...new Set(data.match(regex))];
        console.log(`\nQuery: ${query}`);
        console.log(matches.slice(0, 10));
        resolve();
      });
    });
  });
}

async function run() {
  await searchUnsplash('nigerian-man-portrait');
  await searchUnsplash('nigerian-woman');
  await searchUnsplash('older-african-man');
  await searchUnsplash('mature-black-woman');
  await searchUnsplash('black-businessman');
}

run();
