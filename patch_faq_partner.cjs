const fs = require('fs');
let code = fs.readFileSync('src/FaqSection.tsx', 'utf-8');

code = code.replace(/<button className="w-full bg-white border border-\[#1A1A1A\]\/15 hover:border-\[#1A1A1A\]\/30 text-\[#1A1A1A\] text-\[14px\] font-medium rounded-lg px-6 py-4 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-\[#1A1A1A\] focus:ring-offset-2 flex items-center justify-center gap-2">/, '<button onClick={() => navigate(\'/partner\')} className="w-full bg-white border border-[#1A1A1A]/15 hover:border-[#1A1A1A]/30 text-[#1A1A1A] text-[14px] font-medium rounded-lg px-6 py-4 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#1A1A1A] focus:ring-offset-2 flex items-center justify-center gap-2">');

fs.writeFileSync('src/FaqSection.tsx', code);
console.log("Updated FAQ partner link");
