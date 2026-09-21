const https = require('https');

const query = `
SELECT ?item ?itemLabel ?image ?genderLabel WHERE {
  ?item wdt:P31 wd:Q5; # instance of human
        wdt:P27 wd:Q1033; # citizenship: Nigeria
        wdt:P18 ?image; # has image
        wdt:P21 ?gender. # has gender
  SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }
}
LIMIT 200
`;

const url = `https://query.wikidata.org/sparql?query=${encodeURIComponent(query)}&format=json`;

https.get(url, { headers: { 'User-Agent': 'Bot/1.0', 'Accept': 'application/json' } }, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    try {
      const results = JSON.parse(data).results.bindings;
      const men = results.filter(r => r.genderLabel.value === 'male').map(r => ({name: r.itemLabel.value, image: r.image.value}));
      const women = results.filter(r => r.genderLabel.value === 'female').map(r => ({name: r.itemLabel.value, image: r.image.value}));
      console.log('--- MEN ---');
      men.slice(0, 10).forEach(m => console.log(`${m.name}: ${m.image}`));
      console.log('--- WOMEN ---');
      women.slice(0, 10).forEach(w => console.log(`${w.name}: ${w.image}`));
    } catch (e) {
      console.log(e);
    }
  });
});
