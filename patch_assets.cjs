const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf-8');

const match = code.match(/const AFRICA_PATH = "(.*?)";/);
if (match) {
  const africaPath = match[0];
  fs.writeFileSync('src/assets.ts', `export ${africaPath}\n`);
  
  code = code.replace(/const AFRICA_PATH = ".*?";\n/, 'import { AFRICA_PATH } from "./assets";\n');
  fs.writeFileSync('src/App.tsx', code);
  console.log("Successfully extracted AFRICA_PATH");
} else {
  console.log("Could not find AFRICA_PATH");
}
