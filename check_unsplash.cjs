const https = require('https');

function checkPhoto(id) {
  return new Promise((resolve) => {
    https.get(`https://unsplash.com/photos/${id}`, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const titleMatch = data.match(/<title>(.*?)<\/title>/);
        console.log(`${id} -> ${titleMatch ? titleMatch[1] : 'No title'}`);
        resolve();
      });
    });
  });
}

async function run() {
  await checkPhoto('mEZ3PoFGs_k'); // known ID
  await checkPhoto('rDEOVtE7vOs');
  await checkPhoto('Zz5LQe-VSCE');
  await checkPhoto('iFgRcqHznqg');
  await checkPhoto('7YVZYZeITc8');
  await checkPhoto('WMD64tMfc4k');
  await checkPhoto('MTZTGvDsIcg');
  await checkPhoto('WNoLnJo7tS8');
  await checkPhoto('IfjHaIoAoEE'); // black man portrait
  await checkPhoto('A_sC5Y10N9M'); 
  await checkPhoto('KIPqvvTOC1s');
  await checkPhoto('XhMSz5I1kn8'); // older black man
  await checkPhoto('v2aKnjMbP_w'); // older black woman
}

run();
