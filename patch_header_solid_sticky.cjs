const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf-8');

// Replace the Header component completely
const newHeader = `const Header = () => {
  return (
    <header className="sticky top-0 left-0 w-full z-[100] h-[88px] bg-[#FFF8F0] border-b border-[#1A1A1A]/10 flex items-center justify-between px-6 md:px-10 shrink-0">
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

content = content.replace(/const Header = \(\) => \{[\s\S]*?\n  \);\n\};\n/s, newHeader + '\n');

// The App component return statement:
// We need to move <Header /> to be the first child of the main wrapper.
// Currently it is:
/*
export default function App() {
  return (
    <div className="w-full bg-[#FFF5EB] selection:bg-[#F26522]/20 selection:text-[#1A1A1A] min-h-screen flex flex-col">
      <div className="w-full bg-[#F26522] flex flex-col shrink-0">
        <div className="w-full bg-[#FFF8F0] min-h-[calc(100vh-40px)] md:min-h-[calc(100vh-60px)] rounded-b-[40px] md:rounded-b-[60px] shadow-[0_10px_40px_rgba(242,101,34,0.15)] relative overflow-hidden flex flex-col shrink-0 z-10">
          <Header />
          <Hero />
*/
content = content.replace(
  /<div className="w-full bg-\[#FFF5EB\] selection:bg-\[#F26522\]\/20 selection:text-\[#1A1A1A\] min-h-screen flex flex-col">\n      <div className="w-full bg-\[#F26522\] flex flex-col shrink-0">\n        <div className="w-full bg-\[#FFF8F0\] min-h-\[calc\(100vh-40px\)\] md:min-h-\[calc\(100vh-60px\)\] rounded-b-\[40px\] md:rounded-b-\[60px\] shadow-\[0_10px_40px_rgba\(242,101,34,0\.15\)\] relative overflow-hidden flex flex-col shrink-0 z-10\">\n          <Header \/>/s,
  `<div className="w-full bg-[#FFF5EB] selection:bg-[#F26522]/20 selection:text-[#1A1A1A] min-h-screen flex flex-col">\n      <Header />\n      <div className="w-full bg-[#F26522] flex flex-col shrink-0">\n        <div className="w-full bg-[#FFF8F0] min-h-[calc(100vh-40px)] md:min-h-[calc(100vh-60px)] rounded-b-[40px] md:rounded-b-[60px] shadow-[0_10px_40px_rgba(242,101,34,0.15)] relative overflow-hidden flex flex-col shrink-0 z-10">`
);

// Also need to adjust Hero padding to `pt-[48px] md:pt-[64px]` since Header is no longer absolute/inside.
content = content.replace(/className="relative pt-\[32px\] pb-16/g, 'className="relative pt-[48px] md:pt-[64px] pb-16');

fs.writeFileSync('src/App.tsx', content);
