const fs = require('fs');
let content = fs.readFileSync('src/TrustSection.tsx', 'utf-8');

const oldEnd = `<h2 className="text-[32px] md:text-[48px] font-bold text-[#0B0B0D] tracking-tight mb-5 max-w-[800px] leading-[1.1] mx-auto">
          This is what renting should feel like.
        </h2>
        <p className="text-[16px] md:text-[20px] text-[#0B0B0D]/70 mb-10 max-w-[480px] leading-relaxed mx-auto">
          Built on trust, from the first conversation to the next home.
        </p>`;

const newEnd = `<h2 className="text-[32px] md:text-[48px] font-bold text-[#0B0B0D] tracking-tight mb-5 max-w-[800px] leading-[1.1] mx-auto">
          This is what renting should feel like.
        </h2>
        <p className="text-[18px] md:text-[22px] font-medium text-[#0B0B0D]/90 mb-4 max-w-[600px] leading-relaxed mx-auto">
          Renting should not depend on memory, promises, and guesswork. Trust should have somewhere to live.
        </p>
        <p className="text-[16px] md:text-[18px] text-[#0B0B0D]/60 mb-10 max-w-[480px] leading-relaxed mx-auto">
          Built on trust, from the first conversation to the next home.
        </p>`;

content = content.replace(oldEnd, newEnd);
fs.writeFileSync('src/TrustSection.tsx', content);
