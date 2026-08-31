const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

code = code.replace("import { SharePage } from \"./SharePage\";\nimport { TermsPage } from \"./TermsPage\";", "import { SharePage } from \"./SharePage\";\nimport { TermsPage } from \"./TermsPage\";\nimport { NotFoundPage } from \"./NotFoundPage\";\nimport { SEO } from \"./SEO\";");

code = code.replace("const LandingPage = () => {\n  return (\n      <div className=\"w-full bg-[#FFF5EB] selection:bg-[#F26522]/20 selection:text-[#1A1A1A] min-h-screen flex flex-col\">", "const LandingPage = () => {\n  return (\n      <div className=\"w-full bg-[#FFF5EB] selection:bg-[#F26522]/20 selection:text-[#1A1A1A] min-h-screen flex flex-col\">\n        <SEO \n          title=\"MyDomos Africa — Rental Trust Infrastructure for Africa\"\n          description=\"MyDomos Africa is building neutral trust infrastructure for renting across Africa — helping tenants, landlords and agents navigate rental relationships with greater clarity and confidence.\"\n          path=\"/\"\n        />");

code = code.replace("<Route path=\"/terms\" element={<TermsPage />} />", "<Route path=\"/terms\" element={<TermsPage />} />\n        <Route path=\"*\" element={<NotFoundPage />} />");

fs.writeFileSync('src/App.tsx', code);
