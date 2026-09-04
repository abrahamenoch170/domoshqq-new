const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf8');

content = content.replace(/statHighlight="Unknown"[\s\n]*statText="hidden debt transferred yearly"/, 'statHighlight="Financial Risk" statText=""');
content = content.replace(/statHighlight="40%\+"[\s\n]*statText="of rentals involve deception"/, 'statHighlight="Verification Gap" statText=""');
content = content.replace(/statHighlight="80%\+"[\s\n]*statText="of African rentals lack written"/, 'statHighlight="Documentation Failure" statText=""');
content = content.replace(/statHighlight="75%\+"[\s\n]*statText="of tenants fall victim yearly"/, 'statHighlight="Power Imbalance" statText=""');
content = content.replace(/statHighlight="70%\+"[\s\n]*statText="of disputes involve agents"/, 'statHighlight="Lack of Accountability" statText=""');

// Also update StoryCard to optionally render TrendingUp if there's no stat
const storyCardRegex = /<TrendingUp className="w-\[14px\] h-\[14px\] text-white shrink-0" strokeWidth=\{2\.5\} \/>\s*<span><strong className="text-white font-bold">\{statHighlight\}<\/strong> \{statText\}<\/span>/;
content = content.replace(storyCardRegex, `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white shrink-0"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>\n        <span><strong className="text-white font-bold">{statHighlight}</strong> {statText}</span>`);

fs.writeFileSync('src/App.tsx', content);
console.log("Fake stats removed.");
