const fs = require('fs');

function addSEO(file, title, description, path) {
  let code = fs.readFileSync(file, 'utf8');
  
  // Find `return (` and the subsequent `<div className="w-full bg-[#FFF5EB]...`
  // We'll replace it with `return (<>\n<SEO ... />\n<div ...`
  const returnRegex = /return \(\s*<div className="w-full bg-\[#FFF5EB\]/g;
  code = code.replace(returnRegex, `return (\n    <>\n      <SEO title="${title}" description="${description}" path="${path}" />\n      <div className="w-full bg-[#FFF5EB]`);
  
  // Then find the closing `</div>\n  );\n};` or `</div>\n    </div>\n  );\n};` etc.
  // Actually we can just look for `);\n};` at the end of the file and replace it with `</>\n  );\n};`
  code = code.replace(/  \);\n};\n?$/g, '    </>\n  );\n};\n');
  
  // also add SEO inside LandingPage in App.tsx
  if (file === 'src/App.tsx') {
    code = code.replace(/return \(\s*<div className="w-full bg-\[#FFF5EB\]/g, `return (\n    <>\n      <SEO title="${title}" description="${description}" path="${path}" />\n      <div className="w-full bg-[#FFF5EB]`);
    code = code.replace(/<\/div>\n  \);\n};/g, '</div>\n    </>\n  );\n};');
  }

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

// App.tsx
addSEO('src/App.tsx',
  'MyDomos Africa — Rental Trust Infrastructure for Africa',
  'MyDomos Africa is building neutral trust infrastructure for renting across Africa — helping tenants, landlords and agents navigate rental relationships with greater clarity and confidence.',
  '/'
);

