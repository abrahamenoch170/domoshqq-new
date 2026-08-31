import { useNavigate, Link } from 'react-router-dom';
import React, { useState } from 'react';
import { Instagram, Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
  const navigate = useNavigate();
  
  return (
    <footer className="w-full bg-[#F26522] p-4 md:p-8 lg:p-12 relative z-10 flex justify-center">
      <div className="w-full max-w-[1400px] bg-white rounded-[32px] md:rounded-[48px] px-8 py-12 md:px-16 md:py-20 lg:py-24 flex flex-col">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 lg:gap-16 mb-16 md:mb-24">
          
          {/* Brand & Social */}
          <div className="md:col-span-5 lg:col-span-4 flex flex-col gap-6">
            <h4 className="text-[15px] font-semibold text-[#1A1A1A]">
              Brand Statement
            </h4>
            <p className="text-[14px] text-[#1A1A1A]/70 leading-[1.6] max-w-[320px]">
              Building the trust infrastructure for a better rental future in Africa.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <a href="#" className="text-[#1A1A1A] hover:text-[#F26522] transition-colors duration-300" aria-label="X">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="w-[18px] h-[18px] fill-current">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"></path>
                </svg>
              </a>
              <a href="#" className="text-[#1A1A1A] hover:text-[#F26522] transition-colors duration-300" aria-label="Instagram">
                <Instagram className="w-[18px] h-[18px]" strokeWidth={1.5} />
              </a>
              <a href="#" className="text-[#1A1A1A] hover:text-[#F26522] transition-colors duration-300" aria-label="LinkedIn">
                <Linkedin className="w-[18px] h-[18px]" strokeWidth={1.5} />
              </a>
              <a href="mailto:hello@mydomos.org" className="text-[#1A1A1A] hover:text-[#F26522] transition-colors duration-300" aria-label="Email">
                <Mail className="w-[18px] h-[18px]" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-7 lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 gap-12 md:justify-items-center">
            <div className="flex flex-col gap-5">
              <h4 className="text-[15px] font-semibold text-[#1A1A1A]">
                Quick Links
              </h4>
              <ul className="flex flex-col gap-4">
                <li><Link to="/#product" className="text-[14px] text-[#1A1A1A]/70 hover:text-[#F26522] transition-colors duration-300">Product</Link></li>
                <li><Link to="/#share" className="text-[14px] text-[#1A1A1A]/70 hover:text-[#F26522] transition-colors duration-300">Share rental experience</Link></li>
                <li><button onClick={() => navigate('/waitlist')} className="text-[14px] text-[#1A1A1A]/70 hover:text-[#F26522] transition-colors duration-300">Join waitlist</button></li>
                <li><Link to="/partner" className="text-[14px] text-[#1A1A1A]/70 hover:text-[#F26522] transition-colors duration-300">Partner with us</Link></li>
              </ul>
            </div>
            <div className="flex flex-col gap-5">
              <h4 className="text-[15px] font-semibold text-[#1A1A1A]">
                Company
              </h4>
              <ul className="flex flex-col gap-4">
                <li><Link to="/#about" className="text-[14px] text-[#1A1A1A]/70 hover:text-[#F26522] transition-colors duration-300">About</Link></li>
                <li><Link to="/privacy" className="text-[14px] text-[#1A1A1A]/70 hover:text-[#F26522] transition-colors duration-300">Privacy</Link></li>
                <li><Link to="/terms" className="text-[14px] text-[#1A1A1A]/70 hover:text-[#F26522] transition-colors duration-300">Terms</Link></li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-12 lg:col-span-4 flex flex-col gap-5 lg:pl-8">
            <h4 className="text-[15px] font-semibold text-[#1A1A1A]">
              Join MyDomos Africa
            </h4>
            <p className="text-[14px] text-[#1A1A1A]/70 leading-[1.5]">
              Building trust infrastructure for Africa's rental future.
            </p>
            
            <div className="flex flex-col gap-3 w-full mt-1">
              <button 
                onClick={() => navigate('/waitlist')}
                className="w-full bg-[#F26522] hover:bg-[#D1551A] text-white text-[15px] font-medium rounded-[8px] px-6 py-3 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#F26522] focus:ring-offset-2 flex items-center justify-center gap-2 h-[48px]"
              >
                Join Waitlist
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

          </div>

        </div>

        {/* Base */}
        <div className="w-full flex flex-col items-center pt-8 gap-12">
          <p className="text-[11px] text-[#1A1A1A]/40">
            © 2026 Powered by DomosHQ. All rights reserved.
          </p>
          
          <div className="w-24 h-24 flex items-center justify-center">
            <svg width="100%" height="100%" viewBox="0 0 100 100" className="w-full h-full">
              <ellipse cx="32" cy="32" rx="14" ry="22" transform="rotate(-45 32 32)" fill="#F26522" />
              <ellipse cx="68" cy="32" rx="14" ry="22" transform="rotate(45 68 32)" fill="#F26522" />
              <ellipse cx="32" cy="68" rx="14" ry="22" transform="rotate(45 32 68)" fill="#F26522" />
              <ellipse cx="68" cy="68" rx="14" ry="22" transform="rotate(-45 68 68)" fill="#F26522" />
            </svg>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
