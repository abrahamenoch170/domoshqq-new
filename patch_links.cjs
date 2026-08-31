const fs = require('fs');

// Patch App.tsx to include routes
let appCode = fs.readFileSync('src/App.tsx', 'utf-8');
if (!appCode.includes('import { PrivacyPage }')) {
  appCode = appCode.replace(
    /import \{ PartnerPage \} from "\.\/PartnerPage";\n/,
    'import { PartnerPage } from "./PartnerPage";\nimport { PrivacyPage } from "./PrivacyPage";\nimport { TermsPage } from "./TermsPage";\n'
  );
  appCode = appCode.replace(
    /<Route path="\/partner" element=\{<PartnerPage \/>\} \/>/,
    '<Route path="/partner" element={<PartnerPage />} />\n        <Route path="/privacy" element={<PrivacyPage />} />\n        <Route path="/terms" element={<TermsPage />} />'
  );
  fs.writeFileSync('src/App.tsx', appCode);
}

// Patch Header.tsx links
let headerCode = fs.readFileSync('src/Header.tsx', 'utf-8');
headerCode = headerCode.replace(/href: '\/#privacy'/g, "href: '/privacy'");
headerCode = headerCode.replace(/href: '\/#terms'/g, "href: '/terms'");
fs.writeFileSync('src/Header.tsx', headerCode);

// Patch Footer.tsx links
let footerCode = fs.readFileSync('src/Footer.tsx', 'utf-8');
footerCode = footerCode.replace(/<Link to="\/#privacy"/g, '<Link to="/privacy"');
footerCode = footerCode.replace(/<Link to="\/#terms"/g, '<Link to="/terms"');
fs.writeFileSync('src/Footer.tsx', footerCode);

