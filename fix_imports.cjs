const fs = require('fs');

['src/WaitlistPage.tsx', 'src/PartnerPage.tsx', 'src/PrivacyPage.tsx', 'src/TermsPage.tsx', 'src/SharePage.tsx'].forEach(file => {
  let code = fs.readFileSync(file, 'utf8');
  if (!code.includes("import { SEO }")) {
    code = "import { SEO } from './SEO';\n" + code;
    fs.writeFileSync(file, code);
  }
});

