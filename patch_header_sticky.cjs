const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf-8');

const newHeader = `const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={\`sticky top-0 w-full z-[100] flex items-center justify-between px-6 md:px-10 transition-all duration-300 ease-[0.32,0.72,0,1]
        \${scrolled 
          ? 'h-[72px] bg-[#FFF8F0]/95 backdrop-blur-xl border-b border-[#1A1A1A]/10 shadow-sm' 
          : 'h-[88px] bg-transparent border-b border-transparent shadow-none'
        }
      \`}
    >
      <div className="flex items-center gap-3 cursor-pointer group">
        <div className={\`relative flex items-center justify-center transition-all duration-300 \${scrolled ? 'w-[32px] h-[32px]' : 'w-[40px] h-[40px]'} group-hover:scale-105\`}>
          <svg width="100%" height="100%" viewBox="0 0 100 100">
            <ellipse cx="32" cy="32" rx="14" ry="22" transform="rotate(-45 32 32)" fill="#F26522" />
            <ellipse cx="68" cy="32" rx="14" ry="22" transform="rotate(45 68 32)" fill="#F26522" />
            <ellipse cx="32" cy="68" rx="14" ry="22" transform="rotate(45 32 68)" fill="#F26522" />
            <ellipse cx="68" cy="68" rx="14" ry="22" transform="rotate(-45 68 68)" fill="#F26522" />
          </svg>
        </div>
        <div className={\`leading-none tracking-tight flex items-center mt-0.5 transition-all duration-300 \${scrolled ? 'text-[20px]' : 'text-[24px]'}\`}>
          <span className="text-[#1A1A1A] font-extrabold">MyDomos</span>
          <span className="text-[#F26522] font-semibold ml-1.5">Africa</span>
        </div>
      </div>
      <button className={\`rounded-full hover:bg-black/5 transition-colors focus:outline-none focus:ring-2 focus:ring-[#F26522] focus:ring-offset-2 focus:ring-offset-[#FFF8F0] flex items-center justify-center \${scrolled ? 'w-10 h-10' : 'w-12 h-12'}\`}>
        <Bars3Icon className={\`text-[#1A1A1A] transition-all duration-300 \${scrolled ? 'w-6 h-6' : 'w-7 h-7'}\`} strokeWidth={1.5} />
      </button>
    </header>
  );
};`;

content = content.replace(/const Header = \(\) => \{[\s\S]*?\}\n\nconst Hero = \(\) => \{/, newHeader + '\n\nconst Hero = () => {');

// Remove overflow-hidden from the wrapper
content = content.replace(/relative overflow-hidden flex flex-col shrink-0 z-10/g, 'relative flex flex-col shrink-0 z-10');

// Change pt-[120px] in Hero to pt-[32px] (because sticky header takes up 88px, so total gap is ~120px)
content = content.replace(/className="relative pt-\[120px\] pb-16/g, 'className="relative pt-[32px] pb-16');

fs.writeFileSync('src/App.tsx', content);
