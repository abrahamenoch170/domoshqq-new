const fs = require('fs');

const content = `import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Link } from 'react-router-dom';
import { SEO } from './SEO';

export const NotFoundPage = () => {
  return (
    <>
      <SEO 
        title="Page Not Found — MyDomos Africa" 
        description="The page you are looking for does not exist."
      />
      <div className="w-full bg-[#FFF5EB] selection:bg-[#F26522]/20 selection:text-[#1A1A1A] min-h-screen flex flex-col font-sans">
        <Header />
        
        <main className="flex-1 flex flex-col items-center justify-center text-center px-6 pt-[120px] pb-24 md:pt-[140px] md:pb-32 relative z-10 w-full max-w-[800px] mx-auto">
          
          <h1 className="text-[120px] md:text-[180px] font-bold text-[#1A1A1A] leading-[1] tracking-tighter mb-4">
            404
          </h1>
          
          <div className="flex flex-col items-center gap-1.5 mb-10 max-w-sm mx-auto">
            <h2 className="text-[20px] md:text-[24px] font-bold text-[#1A1A1A] leading-[1.2]">
              Page not found
            </h2>
            <p className="text-[16px] md:text-[18px] text-[#1A1A1A]/70 leading-[1.6]">
              The page you are looking for doesn't exist or has been moved.
            </p>
          </div>
          
          <Link 
            to="/"
            className="inline-flex items-center justify-center bg-[#F26522] text-white text-[16px] font-semibold px-[32px] py-[16px] rounded-[100px] hover:bg-[#D1551A] transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F26522] focus:ring-offset-[#FFF5EB] shadow-[0_4px_12px_rgba(242,101,34,0.2)] hover:shadow-[0_6px_16px_rgba(242,101,34,0.3)] hover:-translate-y-[2px] active:translate-y-[1px]"
          >
            Return Home
          </Link>

        </main>
        
        <Footer />
      </div>
    </>
  );
};
`;

fs.writeFileSync('src/NotFoundPage.tsx', content);
console.log("Fixed 404 page.");
