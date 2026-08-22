const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf-8');

// Replace the shrinking height with a constant height, just changing the background/border/shadow.
content = content.replace(
  /\${scrolled \n          \? 'h-\[72px\] bg-\[#FFF8F0\]\/95 backdrop-blur-xl border-b border-\[#1A1A1A\]\/10 shadow-sm' \n          : 'h-\[88px\] bg-transparent border-b border-transparent shadow-none'\n        }/g,
  "${scrolled \n          ? 'bg-[#FFF8F0]/95 backdrop-blur-xl border-b border-[#1A1A1A]/10 shadow-sm' \n          : 'bg-transparent border-b border-transparent shadow-none'\n        }"
);
content = content.replace(/className={\`sticky top-0 w-full z-\[100\] flex items-center justify-between px-6 md:px-10 transition-all duration-300 ease-\[0.32,0.72,0,1\]/, 'className={`sticky top-0 w-full z-[100] h-[80px] flex items-center justify-between px-6 md:px-10 transition-all duration-300 ease-[0.32,0.72,0,1]');

fs.writeFileSync('src/App.tsx', content);
