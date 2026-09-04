const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

content = content.replace(
  '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white shrink-0"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
  '<TrendingUp className="w-[14px] h-[14px] text-white shrink-0" strokeWidth={2.5} />'
);

content = content.replace(/statHighlight="Financial Risk" statText=""/, 'statHighlight="Unknown" statText="hidden debt transferred yearly"');
content = content.replace(/statHighlight="Verification Gap" statText=""/, 'statHighlight="40%+" statText="of rentals involve deception"');
content = content.replace(/statHighlight="Documentation Failure" statText=""/, 'statHighlight="80%+" statText="of African rentals lack written"');
content = content.replace(/statHighlight="Power Imbalance" statText=""/, 'statHighlight="75%+" statText="of tenants fall victim yearly"');
content = content.replace(/statHighlight="Lack of Accountability" statText=""/, 'statHighlight="70%+" statText="of disputes involve agents"');

fs.writeFileSync('src/App.tsx', content);
console.log("Stats reverted.");
