const fs = require('fs');
let code = fs.readFileSync('src/VoicesSection.tsx', 'utf-8');

code = code.replace(
  'smallText="Now every person in the chain arrives with a history you can see."',
  'smallText="Now your reputation is visible, earned, and carried forward."'
);

code = code.replace(
  'smallText="Now your reputation is visible, earned, and carried forward."\n      />\n      \n      <Outro />',
  'smallText="Less rental risk. More certainty for every landlord."\n      />\n      \n      <Outro />'
);

fs.writeFileSync('src/VoicesSection.tsx', code);
