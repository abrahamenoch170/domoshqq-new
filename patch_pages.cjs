const fs = require('fs');

function addSEO(file, title, description, path) {
  let code = fs.readFileSync(file, 'utf8');
  if (code.includes('import { SEO }')) return;
  code = code.replace("import { Header }", "import { SEO } from './SEO';\nimport { Header }");
  code = code.replace("<div className=\"w-full bg-[#FFF5EB]", `<SEO title="${title}" description="${description}" path="${path}" />\n      <div className="w-full bg-[#FFF5EB]`);
  fs.writeFileSync(file, code);
}

addSEO('src/WaitlistPage.tsx', 
  'Join the MyDomos Africa Waitlist', 
  'Be among the first to experience MyDomos Africa as we build rental trust infrastructure, starting with Lagos.', 
  '/waitlist'
);

addSEO('src/PartnerPage.tsx', 
  'Partner With MyDomos Africa', 
  'Partner with MyDomos Africa to help build neutral rental trust infrastructure for Africa.', 
  '/partner'
);

addSEO('src/PrivacyPage.tsx', 
  'Privacy Policy — MyDomos Africa', 
  'Privacy Policy for MyDomos Africa.', 
  '/privacy'
);

addSEO('src/TermsPage.tsx', 
  'Terms of Use — MyDomos Africa', 
  'Terms of Use for MyDomos Africa.', 
  '/terms'
);

addSEO('src/SharePage.tsx', 
  'Share Your Rental Story — MyDomos Africa', 
  'Share your real rental experience anonymously and help us understand where trust breaks down across Africa\'s rental ecosystem.', 
  '/share'
);

