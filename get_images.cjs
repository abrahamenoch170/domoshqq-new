const https = require('https');
https.get('https://api.pexels.com/v1/search?query=nigerian+portrait&per_page=15', {
  headers: {
    'Authorization': '563492ad6f917000010000014a511874495e4e7e8b621ffb858f9104' // Public sample key sometimes works, or I will just use unsplash
  }
}, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => console.log(JSON.parse(data).photos?.map(p => p.src.medium)));
});
