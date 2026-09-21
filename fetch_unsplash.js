const https = require('https');

function searchUnsplash(query) {
  return new Promise((resolve) => {
    https.get(`https://unsplash.com/s/photos/${encodeURIComponent(query)}`, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        // extract all photo ids using regex
        const regex = /photo-[a-zA-Z0-9]{13}-[a-zA-Z0-9]{12}/g;
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
  await searchUnsplash('african-businessman');
  await searchUnsplash('young-african-man');
}

run();
