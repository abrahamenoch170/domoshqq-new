const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf8');

const replacement = `const LandingPage = () => {
  return (
    <>
      <SEO title="MyDomos Africa — Rental Trust Infrastructure for Africa" description="MyDomos Africa is building neutral trust infrastructure for renting across Africa — helping tenants, landlords and agents navigate rental relationships with greater clarity and confidence." path="/" />
      <div className="w-full bg-[#FFF5EB] selection:bg-[#F26522]/20 selection:text-[#1A1A1A] min-h-screen flex flex-col">
        <Header />
        <div className="w-full bg-[#F26522] flex flex-col shrink-0">`;

content = content.replace(/const LandingPage = \(\) => \{\s*return \(\s*<>\s*<SEO[^>]+>\s*<div[^>]+>\s*<SEO[^>]+>[^>]+>[^>]+>\s*<Header \/>/s, replacement);
fs.writeFileSync('src/App.tsx', content);
console.log("Duplicate SEO removed.");
