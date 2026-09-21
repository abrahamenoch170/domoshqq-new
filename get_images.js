const https = require('https');
https.get('https://randomuser.me/api/?results=10&nat=us,gb&inc=picture', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => console.log(JSON.parse(data).results.map(r => r.picture.large)));
});
