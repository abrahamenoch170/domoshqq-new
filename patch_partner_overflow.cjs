const fs = require('fs');
let code = fs.readFileSync('src/PartnerPage.tsx', 'utf-8');

code = code.replace(/className="w-full bg-\[#FFF5EB\] selection:bg-\[#F26522\]\/20 selection:text-\[#1A1A1A\] min-h-screen flex flex-col"/, 'className="w-full bg-[#FFF5EB] selection:bg-[#F26522]/20 selection:text-[#1A1A1A] min-h-screen flex flex-col overflow-x-hidden"');

fs.writeFileSync('src/PartnerPage.tsx', code);
console.log("Updated PartnerPage overflow");
