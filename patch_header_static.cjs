const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf-8');

const newHeader = `const Header = () => {
  return (
    <header className="w-full h-[88px] bg-[#FFF8F0] border-b border-[#1A1A1A]/5 flex items-center justify-between px-6 md:px-10 shrink-0">
      <div className="flex items-center gap-3 cursor-pointer group">
        <div className="relative flex items-center justify-center w-[40px] h-[40px] transition-transform duration-300 group-hover:scale-105">
          <svg width="100%" height="100%" viewBox="0 0 100 100">
            <ellipse cx="32" cy="32" rx="14" ry="22" transform="rotate(-45 32 32)" fill="#F26522" />
            <ellipse cx="68" cy="32" rx="14" ry="22" transform="rotate(45 68 32)" fill="#F26522" />
            <ellipse cx="32" cy="68" rx="14" ry="22" transform="rotate(45 32 68)" fill="#F26522" />
            <ellipse cx="68" cy="68" rx="14" ry="22" transform="rotate(-45 68 68)" fill="#F26522" />
          </svg>
        </div>
        <div className="leading-none tracking-tight flex items-center mt-0.5 text-[24px]">
          <span className="text-[#1A1A1A] font-extrabold">MyDomos</span>
          <span className="text-[#F26522] font-semibold ml-1.5">Africa</span>
        </div>
      </div>
      <button className="rounded-full hover:bg-black/5 transition-colors focus:outline-none focus:ring-2 focus:ring-[#F26522] focus:ring-offset-2 focus:ring-offset-[#FFF8F0] flex items-center justify-center w-12 h-12">
        <Bars3Icon className="text-[#1A1A1A] w-7 h-7" strokeWidth={1.5} />
      </button>
    </header>
  );
};`;

content = content.replace(/const Header = \(\) => \{[\s\S]*?\}\n\nconst Hero = \(\) => \{/, newHeader + '\n\nconst Hero = () => {');

fs.writeFileSync('src/App.tsx', content);
