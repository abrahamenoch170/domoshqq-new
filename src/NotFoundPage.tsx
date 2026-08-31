import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Link } from 'react-router-dom';
import { SEO } from './SEO';

export const NotFoundPage = () => {
  return (
    <div className="w-full bg-[#FFF5EB] selection:bg-[#F26522]/20 selection:text-[#1A1A1A] min-h-screen flex flex-col">
      <SEO 
        title="Page Not Found — MyDomos Africa" 
        description="The page you are looking for does not exist."
      />
      <Header />
      
      <main className="flex-1 flex flex-col items-center justify-center text-center px-6 py-24 md:py-32">
        <div className="w-20 h-20 md:w-24 md:h-24 bg-[#1A1A1A]/5 rounded-full flex items-center justify-center mb-8">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 9V14M12 17.5V18M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#F26522" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        
        <h1 className="text-[40px] md:text-[56px] font-bold text-[#1A1A1A] tracking-tight leading-[1.1] mb-6">
          Page Not Found.
        </h1>
        
        <p className="text-[16px] md:text-[18px] text-[#6B6B6B] leading-[1.6] max-w-[480px] mb-10">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        
        <Link 
          to="/"
          className="bg-[#1A1A1A] text-white text-[16px] font-semibold px-[32px] py-[16px] rounded-[100px] hover:bg-[#333] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1A1A1A] focus:ring-offset-[#FFF5EB]"
        >
          Return to Homepage
        </Link>
      </main>

      <Footer />
    </div>
  );
};
