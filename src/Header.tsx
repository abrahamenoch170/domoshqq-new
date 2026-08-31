import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate, Link } from 'react-router-dom';

export const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Smart sticky header logic
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // If we are at the top
      if (currentScrollY < 10) {
        setIsScrolled(false);
        setIsVisible(true);
      } else {
        setIsScrolled(true);
        // Scrolling up -> show, Scrolling down -> hide
        if (currentScrollY < lastScrollY) {
          setIsVisible(true); // scrolling up
        } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setIsVisible(false); // scrolling down and past threshold
        }
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Handle menu body scroll lock & escape
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setIsMenuOpen(false);
      };
      document.addEventListener('keydown', handleEscape);
      return () => {
        document.removeEventListener('keydown', handleEscape);
        document.body.style.overflow = '';
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [isMenuOpen]);

  const navLinks = [
    { label: 'Product', href: '/#product' },
    { label: 'Partner with us', href: '/partner' },
    { label: 'About', href: '/#about' },
    { label: 'Privacy', href: '/privacy' },
    { label: 'Terms', href: '/terms' },
    { label: 'Share Your Story', href: '/share' }
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-[100] transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'} ${isScrolled ? 'bg-[#FFF5EB]/95 backdrop-blur-md border-b border-[#1A1A1A]/10 h-[72px]' : 'bg-[#FFF5EB] border-transparent h-[88px]'} flex items-center justify-between px-6 md:px-10 shrink-0`}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 cursor-pointer group">
          <div className="relative flex items-center justify-center w-[36px] h-[36px] md:w-[40px] md:h-[40px] transition-transform duration-300 group-hover:scale-105">
            <svg width="100%" height="100%" viewBox="0 0 100 100">
              <ellipse cx="32" cy="32" rx="14" ry="22" transform="rotate(-45 32 32)" fill="#F26522" />
              <ellipse cx="68" cy="32" rx="14" ry="22" transform="rotate(45 68 32)" fill="#F26522" />
              <ellipse cx="32" cy="68" rx="14" ry="22" transform="rotate(45 32 68)" fill="#F26522" />
              <ellipse cx="68" cy="68" rx="14" ry="22" transform="rotate(-45 68 68)" fill="#F26522" />
            </svg>
          </div>
          <div className="leading-none tracking-tight flex items-center mt-0.5 text-[20px] md:text-[24px]">
            <span className="text-[#1A1A1A] font-extrabold">MyDomos</span>
            <span className="text-[#F26522] font-semibold ml-1.5">Africa</span>
          </div>
        </Link>

        {/* Desktop CTA & Hamburger */}
        <div className="flex items-center gap-6">
          <button 
            onClick={() => navigate('/waitlist')}
            className="hidden md:flex items-center justify-center bg-[#F26522] hover:bg-[#D1551A] text-white text-[15px] font-medium px-[24px] py-[10px] rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#FFF5EB] focus:ring-[#F26522]"
          >
            Join Waitlist
          </button>
          
          <button 
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
            className="flex flex-col items-center justify-center gap-[4px] w-[40px] h-[40px] hover:bg-[#1A1A1A]/5 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F26522] focus:ring-offset-[#FFF5EB]"
          >
            <span className="w-[24px] h-[2px] bg-[#F26522] block"></span>
            <span className="w-[24px] h-[2px] bg-[#F26522] block"></span>
            <span className="w-[24px] h-[2px] bg-[#F26522] block"></span>
          </button>
        </div>
      </header>

      {/* Full-screen Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[150] bg-[#1A1A1A] flex flex-col justify-center items-center"
          >
            {/* Close Button */}
            <button 
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
              className="absolute top-6 right-6 md:top-10 md:right-10 w-12 h-12 flex items-center justify-center text-white hover:text-[#F26522] transition-colors focus:outline-none focus:ring-2 focus:ring-[#F26522] rounded-full"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Navigation List */}
            <nav className="flex flex-col items-center gap-8 md:gap-10">
              <motion.button
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
                onClick={() => { setIsMenuOpen(false); navigate('/waitlist'); }}
                className="group bg-[#F26522] text-white text-[24px] md:text-[28px] font-bold tracking-tight hover:bg-[#D1551A] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#F26522]/30 rounded-[100px] px-8 py-4 mb-2 flex items-center justify-center gap-3 shadow-[0_8px_24px_rgba(242,101,34,0.3)] hover:shadow-[0_12px_32px_rgba(242,101,34,0.4)] hover:-translate-y-1"
              >
                Join Waitlist
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-300 group-hover:translate-x-1">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.button>
              
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.label}
                  
                  onClick={() => setIsMenuOpen(false)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.4, delay: 0.1 + ((index + 1) * 0.08), ease: "easeOut" }}
                  className="text-white text-[28px] md:text-[32px] font-semibold tracking-tight hover:text-[#F26522] transition-colors focus:outline-none focus:ring-2 focus:ring-[#F26522] rounded-lg px-4"
                >
                  <Link to={link.href} className="w-full h-full text-center">{link.label}</Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
