const fs = require('fs');

function fix(file) {
  let code = fs.readFileSync(file, 'utf8');
  
  // Find all `<SEO ... />` not preceded by `<>`
  // This is a bit tricky. Let's just restore original first.
  code = code.replace(/<SEO title="[^"]+" description="[^"]+" path="[^"]+" \/>\n\s*<div className="w-full bg-\[#FFF5EB\]/g, '<div className="w-full bg-[#FFF5EB]');
  fs.writeFileSync(file, code);
}

['src/WaitlistPage.tsx', 'src/PartnerPage.tsx', 'src/PrivacyPage.tsx', 'src/TermsPage.tsx', 'src/SharePage.tsx'].forEach(fix);
