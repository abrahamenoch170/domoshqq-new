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
      className={\`fixed top-0 left-0 w-full z-[100] transition-all duration-400 ease-[0.32,0.72,0,1] px-6 md:px-10 flex items-center justify-between
        \${scrolled 
          ? 'h-[64px] bg-[#FFF8F0]/60 backdrop-blur-2xl backdrop-saturate-[1.8] border-b border-[#1A1A1A]/[0.06] shadow-[0_4px_30px_rgba(0,0,0,0.03)]' 
          : 'h-[88px] bg-transparent border-b border-transparent shadow-none'
        }
      \`}
    >
      <div className="flex items-center gap-3 cursor-pointer group">
        {/* Logo: 4 orange ellipses on transparent background */}
        <div className={\`relative flex items-center justify-center transition-all duration-400 \${scrolled ? 'w-[28px] h-[28px]' : 'w-[36px] h-[36px]'} group-hover:scale-105\`}>
          <svg width="100%" height="100%" viewBox="0 0 100 100">
            <ellipse cx="32" cy="32" rx="14" ry="22" transform="rotate(-45 32 32)" fill="#F26522" />
            <ellipse cx="68" cy="32" rx="14" ry="22" transform="rotate(45 68 32)" fill="#F26522" />
            <ellipse cx="32" cy="68" rx="14" ry="22" transform="rotate(45 32 68)" fill="#F26522" />
            <ellipse cx="68" cy="68" rx="14" ry="22" transform="rotate(-45 68 68)" fill="#F26522" />
          </svg>
        </div>
        <div className={\`leading-none tracking-tight flex items-center mt-0.5 transition-all duration-400 \${scrolled ? 'text-[18px]' : 'text-[22px]'}\`}>
          <span className="text-[#1A1A1A] font-extrabold">MyDomos</span>
          <span className="text-[#F26522] font-semibold ml-1.5">Africa</span>
        </div>
      </div>
      <button className="p-2 -mr-2 rounded-full hover:bg-black/5 transition-colors focus:outline-none focus:ring-2 focus:ring-[#F26522] focus:ring-offset-2 focus:ring-offset-transparent">
        <Bars3Icon className={\`text-[#1A1A1A] transition-all duration-400 \${scrolled ? 'w-6 h-6' : 'w-7 h-7'}\`} strokeWidth={1.5} />
      </button>
    </header>
  );
};`;

// Regex to replace the Header component
// It starts at "const Header = () => {" and ends at the first "};" followed by "const Hero"
content = content.replace(/const Header = \(\) => \{[\s\S]*?\}\n\nconst Hero = \(\) => \{/, newHeader + '\n\nconst Hero = () => {');

fs.writeFileSync('src/App.tsx', content);
