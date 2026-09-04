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
      <div className="w-full bg-white selection:bg-[#F26522]/20 selection:text-[#1A1A1A] min-h-screen flex flex-col font-sans">
        <Header />
        
        <main className="flex-1 flex flex-col items-center justify-center text-center px-6 pt-[120px] pb-24 md:pt-[140px] md:pb-32 relative z-10 w-full max-w-[800px] mx-auto">
          
          {/* Illustration */}
          <div className="relative w-full max-w-[400px] aspect-square flex items-center justify-center mb-8">
            <svg width="100%" height="100%" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
              {/* Beam */}
              <path d="M 180 230 L 320 230 L 380 480 Q 250 510 120 480 Z" fill="#F26522" opacity="0.12" />
              
              {/* Crosses (Stars) */}
              <g stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round">
                <line x1="70" y1="180" x2="90" y2="180" /><line x1="80" y1="170" x2="80" y2="190" />
                <line x1="420" y1="190" x2="440" y2="190" /><line x1="430" y1="180" x2="430" y2="200" />
                <line x1="385" y1="270" x2="405" y2="270" /><line x1="395" y1="260" x2="395" y2="280" />
              </g>

              {/* Document */}
              <g transform="translate(250, 360) rotate(-20)">
                {/* Document Body */}
                <path d="M -50 -70 L 20 -70 L 50 -40 L 50 70 L -50 70 Z" fill="#FFFFFF" stroke="#1A1A1A" strokeWidth="3" strokeLinejoin="round" />
                {/* Fold */}
                <path d="M 20 -70 L 20 -40 L 50 -40 Z" fill="#FFF5EB" stroke="#1A1A1A" strokeWidth="3" strokeLinejoin="round" />
                
                {/* Worried Face */}
                <line x1="-24" y1="-2" x2="-10" y2="-10" stroke="#1A1A1A" strokeWidth="3.5" strokeLinecap="round" />
                <line x1="10" y1="-10" x2="24" y2="-2" stroke="#1A1A1A" strokeWidth="3.5" strokeLinecap="round" />
                <circle cx="-12" cy="2" r="3.5" fill="#1A1A1A" />
                <circle cx="12" cy="2" r="3.5" fill="#1A1A1A" />
                <path d="M -10 22 Q 0 14 10 22" stroke="#1A1A1A" strokeWidth="3.5" fill="none" strokeLinecap="round" />
              </g>

              {/* UFO Dome */}
              <path d="M 155 210 C 155 100, 345 100, 345 210 Z" fill="#FFFFFF" stroke="#1A1A1A" strokeWidth="3" />
              <text x="250" y="195" fontFamily="sans-serif" fontWeight="900" fontSize="64" textAnchor="middle" fill="#1A1A1A">404</text>

              {/* UFO Saucer */}
              <ellipse cx="250" cy="210" rx="160" ry="45" fill="#F26522" stroke="#1A1A1A" strokeWidth="3" />
              
              {/* UFO Lights */}
              <g fill="#FFFFFF" stroke="#1A1A1A" strokeWidth="3">
                <circle cx="120" cy="210" r="8" />
                <circle cx="170" cy="235" r="10" />
                <circle cx="250" cy="245" r="12" />
                <circle cx="330" cy="235" r="10" />
                <circle cx="380" cy="210" r="8" />
              </g>
            </svg>
          </div>
          
          <div className="flex flex-col items-center gap-1.5 mb-8">
            <p className="text-[15px] md:text-[16px] text-[#1A1A1A] leading-[1.5]">
              Looks like this page didn't make it to production.
            </p>
            <p className="text-[15px] md:text-[16px] text-[#1A1A1A] leading-[1.5]">
              Let's get you back on track.
            </p>
          </div>
          
          <Link 
            to="/"
            className="inline-flex items-center justify-center bg-[#F26522] text-white text-[15px] font-semibold px-[28px] py-[12px] rounded-full hover:bg-[#D1551A] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F26522] focus:ring-offset-[#FFFFFF] mb-10 shadow-[0_4px_12px_rgba(242,101,34,0.2)] hover:shadow-[0_6px_16px_rgba(242,101,34,0.3)]"
          >
            Explore the Future of Renting
          </Link>

          <div className="flex flex-col items-center gap-4">
            <span className="text-[13px] text-[#1A1A1A]/60 font-medium">Or try these links:</span>
            <div className="flex items-center gap-6 md:gap-8">
              <Link to="/" className="text-[13px] text-[#1A1A1A]/60 hover:text-[#F26522] font-medium transition-colors">Home</Link>
              <Link to="/#resources" className="text-[13px] text-[#1A1A1A]/60 hover:text-[#F26522] font-medium transition-colors">Knowledge center</Link>
              <Link to="/#about" className="text-[13px] text-[#1A1A1A]/60 hover:text-[#F26522] font-medium transition-colors">About</Link>
            </div>
          </div>

        </main>

        <Footer />
      </div>
    </>
  );
};
`;

fs.writeFileSync('src/NotFoundPage.tsx', content);
