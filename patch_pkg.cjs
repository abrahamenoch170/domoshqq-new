const fs = require('fs');
let pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
pkg.name = 'mydomos-africa';
fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2));
