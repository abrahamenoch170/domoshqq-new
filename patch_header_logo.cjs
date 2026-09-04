const fs = require('fs');
let code = fs.readFileSync('src/Header.tsx', 'utf-8');

code = code.replace(/<div className="flex items-center gap-3 cursor-pointer group">/, '<Link to="/" className="flex items-center gap-3 cursor-pointer group">');
code = code.replace(/<span className="text-\[#F26522\] font-semibold ml-1\.5">Africa<\/span>\n\s*<\/div>\n\s*<\/div>/, '<span className="text-[#F26522] font-semibold ml-1.5">Africa</span>\n          </div>\n        </Link>');

fs.writeFileSync('src/Header.tsx', code);
console.log("Updated Header logo link");
