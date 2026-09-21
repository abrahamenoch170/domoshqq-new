const https = require('https');

function fetchPhotos(query, label) {
  return new Promise((resolve) => {
    https.get(`https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=3`, {
      headers: {
        'Authorization': '563492ad6f917000010000014a511874495e4e7e8b621ffb858f9104'
      }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const parsed = JSON.parse(data);
        console.log(`\n--- ${label} (${query}) ---`);
        if (parsed.photos) {
          parsed.photos.forEach(p => {
            console.log(`URL: ${p.src.medium}`);
            console.log(`Alt: ${p.alt}`);
          });
        } else {
          console.log("No photos or error:", parsed);
        }
        resolve();
      });
    });
  });
}

async function run() {
  await fetchPhotos('black nigerian man portrait', 'Segun/Chinedu (Young Men)');
  await fetchPhotos('older black african man portrait', 'Mr. Adeleke (Older Man)');
  await fetchPhotos('black nigerian woman portrait', 'Ngozi (Young Woman)');
  await fetchPhotos('older black african woman portrait', 'Mrs. Okafor (Older Woman)');
  await fetchPhotos('black african businessman portrait', 'Bayo (Agent)');
}

run();
