const fs = require('fs');

// FaqSection.tsx
let faq = fs.readFileSync('src/FaqSection.tsx', 'utf8');
faq = faq.replace(/rounded-lg px-6 py-4/g, 'rounded-[100px] px-[32px] py-[16px]');
fs.writeFileSync('src/FaqSection.tsx', faq);

// Footer.tsx
let footer = fs.readFileSync('src/Footer.tsx', 'utf8');
footer = footer.replace(/rounded-\[8px\] px-6 py-3/g, 'rounded-[100px] px-[24px] py-[14px]');
fs.writeFileSync('src/Footer.tsx', footer);

// PartnerPage.tsx
let partner = fs.readFileSync('src/PartnerPage.tsx', 'utf8');
partner = partner.replace(/w-full h-\[52px\] bg-\[#F26522\][^>]+ rounded-lg /g, 'w-full h-[52px] bg-[#F26522] hover:bg-[#D1551A] text-white text-[16px] font-semibold rounded-[100px] ');
fs.writeFileSync('src/PartnerPage.tsx', partner);

// WaitlistPage.tsx
let waitlist = fs.readFileSync('src/WaitlistPage.tsx', 'utf8');
waitlist = waitlist.replace(/rounded-lg/g, 'rounded-[100px]');
fs.writeFileSync('src/WaitlistPage.tsx', waitlist);

console.log("Buttons standardized.");
