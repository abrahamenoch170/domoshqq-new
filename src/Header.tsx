import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate, Link, useLocation } from 'react-router-dom';

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
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

  const desktopNavLinks = [
    { label: 'Product', href: '/#problem' },
    { label: 'How It Works', href: '/#solution' },
    { label: 'Voices', href: '/#voices' },
    { label: 'About', href: '/about' },
    { label: 'Partner with Us', href: '/partner' },
    { label: 'FAQ', href: '/#faq' },
  ];

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    if (href.startsWith('/#')) {
      const id = href.replace('/#', '');
      if (window.location.pathname === '/') {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
          return;
        }
      }
      navigate(href);
    } else {
      navigate(href);
    }
  };

  const navLinks = [
    { label: 'Product', href: '/#problem' },
    { label: 'How It Works', href: '/#solution' },
    { label: 'Voices', href: '/#voices' },
    { label: 'About', href: '/about' },
    { label: 'Partner with us', href: '/partner' },
    { label: 'FAQ', href: '/#faq' },
    { label: 'Share Rental Experience', href: '/share-rental-experience' },
    { label: 'Privacy', href: '/privacy' },
    { label: 'Terms', href: '/terms' }
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'} ${isScrolled ? 'bg-[#FFF8F0]/95 backdrop-blur-md border-b border-[#1A1A1A]/10 shadow-xs h-[64px] md:h-[72px]' : 'bg-transparent border-transparent h-[64px] md:h-[72px]'} flex items-center shrink-0`}
      >
        <div className="w-full max-w-[1400px] mx-auto px-5 sm:px-8 md:px-10 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 cursor-pointer group">
            <div className="relative flex items-center justify-center w-[32px] h-[32px] md:w-[38px] md:h-[38px] transition-transform duration-300 group-hover:scale-105">
              <svg width="100%" height="100%" viewBox="0 0 100 100">
                <ellipse cx="32" cy="32" rx="14" ry="22" transform="rotate(-45 32 32)" fill="#F26522" />
                <ellipse cx="68" cy="32" rx="14" ry="22" transform="rotate(45 68 32)" fill="#F26522" />
                <ellipse cx="32" cy="68" rx="14" ry="22" transform="rotate(45 32 68)" fill="#F26522" />
                <ellipse cx="68" cy="68" rx="14" ry="22" transform="rotate(-45 68 68)" fill="#F26522" />
              </svg>
            </div>
            <div className="leading-none tracking-tight flex items-center mt-0.5 text-[20px] md:text-[22px]">
              <span className="text-[#1A1A1A] font-extrabold">MyDomos</span>
              <span className="text-[#F26522] font-semibold ml-1.5">Africa</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {desktopNavLinks.map((link) => {
              const isActive = link.href.startsWith('/#')
                ? location.pathname === '/' && location.hash === link.href.replace('/', '')
                : location.pathname === link.href;

              return (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className={`text-[14px] lg:text-[15px] transition-colors cursor-pointer py-1 ${
                    isActive
                      ? 'text-[#F26522] font-semibold'
                      : 'font-medium text-[#1A1A1A]/80 hover:text-[#F26522]'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right side: Desktop CTA & Mobile Hamburger */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => navigate('/waitlist')}
              className="hidden lg:flex items-center justify-center bg-[#F26522] hover:bg-[#D1551A] text-white text-[14px] lg:text-[15px] font-semibold px-6 py-2.5 rounded-full transition-colors shadow-[0_4px_14px_rgba(242,101,34,0.25)] hover:shadow-[0_6px_20px_rgba(242,101,34,0.35)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#FFF8F0] focus:ring-[#F26522]"
            >
              Join Waitlist
            </button>
            
            {/* Mobile Hamburger Menu Button - displayed on screens below lg */}
            <button 
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open menu"
              className="flex lg:hidden flex-col items-center justify-center gap-[4px] w-[40px] h-[40px] hover:bg-[#1A1A1A]/5 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F26522] focus:ring-offset-[#FFF8F0]"
            >
              <span className="w-[22px] h-[2px] bg-[#F26522] block"></span>
              <span className="w-[22px] h-[2px] bg-[#F26522] block"></span>
              <span className="w-[22px] h-[2px] bg-[#F26522] block"></span>
            </button>
          </div>
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
            className="fixed inset-0 z-[150] bg-[#1A1A1A] overflow-y-auto flex flex-col items-center"
          >
            {/* Close Button */}
            <button 
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
              className="absolute top-6 right-6 md:top-10 md:right-10 w-12 h-12 flex items-center justify-center text-white hover:text-[#F26522] transition-colors focus:outline-none focus:ring-2 focus:ring-[#F26522] rounded-full z-10"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Navigation List */}
            <div className="flex-1 w-full flex flex-col justify-center min-h-full py-24">
              <nav className="flex flex-col items-center gap-6 md:gap-10">
                <motion.button
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
                  onClick={() => { setIsMenuOpen(false); navigate('/waitlist'); }}
                  className="group bg-[#F26522] text-white text-[22px] md:text-[28px] font-bold tracking-tight hover:bg-[#D1551A] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#F26522]/30 rounded-[100px] px-8 py-3.5 mb-2 flex items-center justify-center gap-3 shadow-[0_8px_24px_rgba(242,101,34,0.3)] hover:shadow-[0_12px_32px_rgba(242,101,34,0.4)] hover:-translate-y-1"
                >
                  Join Waitlist
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-300 group-hover:translate-x-1">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.button>
                
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.4, delay: 0.1 + ((index + 1) * 0.08), ease: "easeOut" }}
                    className="text-white text-[24px] md:text-[32px] font-semibold tracking-tight hover:text-[#F26522] transition-colors focus:outline-none focus:ring-2 focus:ring-[#F26522] rounded-lg px-4"
                  >
                    <button onClick={() => handleNavClick(link.href)} className="w-full h-full text-center cursor-pointer">{link.label}</button>
                  </motion.div>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
