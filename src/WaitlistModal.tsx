import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useWaitlist } from './WaitlistContext';

export const WaitlistModal = () => {
  const { isOpen, closeWaitlist } = useWaitlist();
  
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState<'Tenant' | 'Landlord' | 'Agent' | ''>('');
  
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  
  const focusRef = useRef<HTMLButtonElement>(null);

  // Focus trap / escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        closeWaitlist();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeWaitlist]);
  
  // Disable body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      // Reset state on close
      setTimeout(() => {
        setEmail('');
        setName('');
        setRole('');
        setStatus('idle');
        setErrorMsg('');
      }, 300);
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorMsg('Please enter a valid email.');
      setStatus('error');
      return;
    }
    
    setStatus('loading');
    setErrorMsg('');
    
    // Simulate network request
    setTimeout(() => {
      setStatus('success');
    }, 1000);
  };
  
  const handleRoleToggle = (selectedRole: 'Tenant' | 'Landlord' | 'Agent') => {
    if (role === selectedRole) {
      setRole('');
    } else {
      setRole(selectedRole);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-[#1A1A1A]/65"
            onClick={closeWaitlist}
            aria-hidden="true"
          />
          
          {/* Modal Card */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="waitlist-title"
            initial={{ opacity: 0, scale: 0.97, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 8 }}
            transition={{ duration: 0.3 }}
            className="relative w-[calc(100vw-32px)] max-w-[440px] bg-white rounded-[16px] p-[28px] md:p-[40px] shadow-2xl flex flex-col z-10 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              ref={focusRef}
              onClick={closeWaitlist}
              className="absolute top-4 right-4 md:top-6 md:right-6 w-8 h-8 flex items-center justify-center text-[#1A1A1A]/60 hover:text-[#F26522] hover:bg-[#1A1A1A]/5 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#F26522]"
              aria-label="Close waitlist modal"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {status === 'success' ? (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="flex flex-col items-center text-center py-6"
              >
                <div className="w-12 h-12 rounded-full bg-[#F26522]/10 flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#F26522" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h2 id="waitlist-title" className="text-[24px] font-bold text-[#1A1A1A] mb-2 tracking-tight">
                  You're on the list.
                </h2>
                <p className="text-[15px] text-[#1A1A1A]/70 leading-relaxed">
                  We'll keep you posted as access opens.
                </p>
              </motion.div>
            ) : (
              <>
                <div className="mb-6">
                  <h2 id="waitlist-title" className="text-[24px] font-bold text-[#1A1A1A] tracking-tight mb-2">
                    Join the waitlist
                  </h2>
                  <p className="text-[14px] md:text-[15px] text-[#1A1A1A]/70 leading-relaxed">
                    Be among the first to know when MyDomos opens access.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-[14px] font-medium text-[#1A1A1A]">Email <span className="text-red-500">*</span></label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => { setEmail(e.target.value); setStatus('idle'); setErrorMsg(''); }}
                      className={`min-h-[48px] w-full bg-white border ${status === 'error' && !email ? 'border-red-500' : 'border-[#1A1A1A]/20'} rounded-[8px] px-4 text-[15px] text-[#1A1A1A] placeholder:text-[#1A1A1A]/40 focus:outline-none focus:border-[#F26522] focus:ring-1 focus:ring-[#F26522] transition-colors`}
                    />
                    {status === 'error' && <span className="text-[13px] text-red-500 font-medium">{errorMsg}</span>}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-[14px] font-medium text-[#1A1A1A]">Name (optional)</label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="min-h-[48px] w-full bg-white border border-[#1A1A1A]/20 rounded-[8px] px-4 text-[15px] text-[#1A1A1A] placeholder:text-[#1A1A1A]/40 focus:outline-none focus:border-[#F26522] focus:ring-1 focus:ring-[#F26522] transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className="text-[14px] font-medium text-[#1A1A1A]">I am a... (optional)</span>
                    <div className="flex flex-wrap gap-2">
                      {['Tenant', 'Landlord', 'Agent'].map((r) => (
                        <button
                          key={r}
                          type="button"
                          onClick={() => handleRoleToggle(r as any)}
                          className={`px-4 py-2 rounded-[8px] border text-[14px] font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#F26522] focus:ring-offset-1 ${
                            role === r 
                              ? 'border-[#F26522] text-[#F26522] bg-white' 
                              : 'border-[#1A1A1A]/20 text-[#1A1A1A]/70 bg-white hover:border-[#1A1A1A]/40'
                          }`}
                        >
                          {r}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full h-[48px] mt-2 bg-[#F26522] hover:bg-[#D1551A] disabled:bg-[#F26522]/70 disabled:cursor-not-allowed text-white text-[15px] font-medium rounded-[8px] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#F26522] focus:ring-offset-2 flex items-center justify-center"
                  >
                    {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
