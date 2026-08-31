const fs = require('fs');
let code = fs.readFileSync('src/Footer.tsx', 'utf-8');

// Replace the form block with just a button
const newNewsletterBlock = `
            <div className="flex flex-col gap-3 w-full mt-1">
              <button 
                onClick={openWaitlist}
                className="w-full bg-[#F26522] hover:bg-[#D1551A] text-white text-[15px] font-medium rounded-[8px] px-6 py-3 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#F26522] focus:ring-offset-2 flex items-center justify-center gap-2 h-[48px]"
              >
                Join Waitlist
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
`;

code = code.replace(/<form onSubmit={handleSubscribe}[\s\S]*?<\/form>/, newNewsletterBlock);

// Remove the state and handleSubscribe function
code = code.replace(/const \[email, setEmail\] = useState\(''\);\n\s*const \[isSubmitted, setIsSubmitted\] = useState\(false\);\n\n\s*const handleSubscribe = \(e: React.FormEvent\) => {[\s\S]*?};\n/, '');
// Clean up any remaining useState imports if we want, but it's fine.

fs.writeFileSync('src/Footer.tsx', code);
