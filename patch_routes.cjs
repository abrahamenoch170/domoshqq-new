const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf-8');

// Add PartnerPage import
if (!code.includes("import { PartnerPage }")) {
  code = code.replace(/import \{ WaitlistPage \} from "\.\/WaitlistPage";\n/, 'import { WaitlistPage } from "./WaitlistPage";\nimport { PartnerPage } from "./PartnerPage";\n');
}

// Add the Route
if (!code.includes('<Route path="/partner" element={<PartnerPage />} />')) {
  code = code.replace(/<Route path="\/waitlist" element=\{<WaitlistPage \/>\} \/>\n/, '<Route path="/waitlist" element={<WaitlistPage />} />\n        <Route path="/partner" element={<PartnerPage />} />\n');
}

fs.writeFileSync('src/App.tsx', code);
console.log("Updated App.tsx with /partner route.");
