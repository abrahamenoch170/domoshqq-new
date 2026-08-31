import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

type Role = 'Tenant' | 'Landlord' | 'Agent';

interface WaitlistData {
  name: string;
  city: string;
  role: Role | null;
  email: string;
}

export const WaitlistPage = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');
  
  const [data, setData] = useState<WaitlistData>({
    name: '',
    city: '',
    role: null,
    email: ''
  });

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Focus input on step change
    if (inputRef.current && step !== 3 && !isSuccess) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [step, isSuccess]);

  const handleNext = () => {
    setError('');
    if (step === 1 && !data.name.trim()) {
      setError('Please enter your name.');
      return;
    }
    if (step === 2 && !data.city.trim()) {
      setError('Please enter your city.');
      return;
    }
    if (step === 3 && !data.role) {
      setError('Please choose a role.');
      return;
    }
    if (step === 4) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!data.email.trim() || !emailRegex.test(data.email)) {
        setError('Please enter a valid email.');
        return;
      }
      submitForm();
      return;
    }
    setDirection(1);
    setStep(prev => prev + 1);
  };

  const handleBack = () => {
    setError('');
    setDirection(-1);
    setStep(prev => prev - 1);
  };

  const handleRoleSelect = (role: Role) => {
    setData(prev => ({ ...prev, role }));
    setError('');
    // Auto-advance
    setTimeout(() => {
      setDirection(1);
      setStep(prev => prev + 1);
    }, 350);
  };

  const submitForm = () => {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 800);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleNext();
    }
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 20 : -20,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 20 : -20,
      opacity: 0
    })
  };

  if (isSuccess) {
    return (
      <div className="w-full bg-[#FFF5EB] min-h-screen flex flex-col selection:bg-[#F26522]/20 selection:text-[#1A1A1A]">
        {/* Simple Header */}
        <header className="w-full h-[80px] flex items-center justify-between px-6 md:px-12 shrink-0">
          <button onClick={() => navigate('/')} className="text-[#1A1A1A] font-bold text-[22px] tracking-tight hover:opacity-70 transition-opacity focus:outline-none focus:ring-2 focus:ring-[#F26522] rounded-md px-1">
            MyDomos<span className="text-[#F26522]">.</span>
          </button>
          <button onClick={() => navigate('/')} className="text-[#1A1A1A] font-medium text-[15px] hover:text-[#F26522] transition-colors focus:outline-none focus:ring-2 focus:ring-[#F26522] rounded-md px-2 py-1">
            Back to MyDomos
          </button>
        </header>
        
        <motion.main 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="flex-1 flex flex-col items-center justify-center px-6"
        >
          <div className="text-center">
            <h1 className="text-[32px] md:text-[40px] font-bold text-[#1A1A1A] mb-4">You’re on the list.</h1>
            <p className="text-[18px] text-[#1A1A1A]/70">
              We’ll let you know when access opens in {data.city}.
            </p>
          </div>
        </motion.main>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#FFF5EB] min-h-screen flex flex-col selection:bg-[#F26522]/20 selection:text-[#1A1A1A]">
      {/* Simple Header */}
      <header className="w-full h-[80px] flex items-center justify-between px-6 md:px-12 shrink-0">
        <button onClick={() => navigate('/')} className="text-[#1A1A1A] font-bold text-[22px] tracking-tight hover:opacity-70 transition-opacity focus:outline-none focus:ring-2 focus:ring-[#F26522] rounded-md px-1">
          MyDomos<span className="text-[#F26522]">.</span>
        </button>
        <div className="flex items-center gap-6">
          <div className="hidden sm:block text-[14px] font-medium text-[#1A1A1A]/40 uppercase tracking-widest">
            0{step} / 04
          </div>
          <button onClick={() => navigate('/')} className="text-[#1A1A1A] font-medium text-[15px] hover:text-[#F26522] transition-colors focus:outline-none focus:ring-2 focus:ring-[#F26522] rounded-md px-2 py-1">
            Back to MyDomos
          </button>
        </div>
      </header>

      {/* Mobile Progress */}
      <div className="w-full h-1 bg-[#1A1A1A]/5 sm:hidden">
        <div 
          className="h-full bg-[#F26522] transition-all duration-300 ease-out" 
          style={{ width: `${(step / 4) * 100}%` }}
        />
      </div>

      <main className="flex-1 flex flex-col items-center justify-center px-6 w-full">
        <div className="w-full max-w-[560px] relative">
          
          <div className="mb-10 text-center md:text-left">
            <p className="text-[18px] font-medium text-[#1A1A1A]/50 mb-2">Let’s get you on the list.</p>
            <p className="text-[16px] text-[#1A1A1A]/40">A few quick questions. Then you’re in.</p>
          </div>

          <div className="relative min-h-[200px]">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={step}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "tween", duration: 0.3, ease: "easeOut" },
                  opacity: { duration: 0.25 }
                }}
                className="w-full"
              >
                {step === 1 && (
                  <div className="flex flex-col gap-6">
                    <label htmlFor="name" className="text-[26px] md:text-[36px] font-bold text-[#1A1A1A] leading-[1.2]">
                      What should we call you?
                    </label>
                    <input
                      ref={inputRef}
                      id="name"
                      type="text"
                      placeholder="Your name"
                      value={data.name}
                      onChange={(e) => setData(prev => ({ ...prev, name: e.target.value }))}
                      onKeyDown={handleKeyDown}
                      className="w-full h-[52px] md:h-[56px] px-5 bg-white border border-[#1A1A1A]/10 rounded-[12px] text-[18px] text-[#1A1A1A] placeholder:text-[#1A1A1A]/30 focus:outline-none focus:border-[#F26522] focus:ring-1 focus:ring-[#F26522] transition-colors"
                    />
                  </div>
                )}

                {step === 2 && (
                  <div className="flex flex-col gap-6">
                    <label htmlFor="city" className="text-[26px] md:text-[36px] font-bold text-[#1A1A1A] leading-[1.2]">
                      Where are you looking to rent?
                    </label>
                    <input
                      ref={inputRef}
                      id="city"
                      type="text"
                      placeholder="e.g. Lagos"
                      value={data.city}
                      onChange={(e) => setData(prev => ({ ...prev, city: e.target.value }))}
                      onKeyDown={handleKeyDown}
                      className="w-full h-[52px] md:h-[56px] px-5 bg-white border border-[#1A1A1A]/10 rounded-[12px] text-[18px] text-[#1A1A1A] placeholder:text-[#1A1A1A]/30 focus:outline-none focus:border-[#F26522] focus:ring-1 focus:ring-[#F26522] transition-colors"
                    />
                  </div>
                )}

                {step === 3 && (
                  <div className="flex flex-col gap-6">
                    <label className="text-[26px] md:text-[36px] font-bold text-[#1A1A1A] leading-[1.2]">
                      Which best describes you?
                    </label>
                    <div className="flex flex-col gap-3">
                      {(['Tenant', 'Landlord', 'Agent'] as Role[]).map(role => (
                        <button
                          key={role}
                          onClick={() => handleRoleSelect(role)}
                          className={`w-full h-[56px] px-6 text-left text-[18px] font-medium rounded-[12px] transition-all duration-200 border ${
                            data.role === role 
                              ? 'bg-white border-[#F26522] text-[#F26522] shadow-[0_4px_12px_rgba(242,101,34,0.1)]' 
                              : 'bg-white border-[#1A1A1A]/10 text-[#1A1A1A] hover:border-[#1A1A1A]/30'
                          } focus:outline-none focus:ring-2 focus:ring-[#F26522] focus:ring-offset-2 focus:ring-offset-[#FFF5EB]`}
                        >
                          {role}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {step === 4 && (
                  <div className="flex flex-col gap-6">
                    <label htmlFor="email" className="text-[26px] md:text-[36px] font-bold text-[#1A1A1A] leading-[1.2]">
                      Where should we send your early access updates?
                    </label>
                    <input
                      ref={inputRef}
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={data.email}
                      onChange={(e) => setData(prev => ({ ...prev, email: e.target.value }))}
                      onKeyDown={handleKeyDown}
                      className="w-full h-[52px] md:h-[56px] px-5 bg-white border border-[#1A1A1A]/10 rounded-[12px] text-[18px] text-[#1A1A1A] placeholder:text-[#1A1A1A]/30 focus:outline-none focus:border-[#F26522] focus:ring-1 focus:ring-[#F26522] transition-colors"
                    />
                  </div>
                )}

                {/* Validation Error */}
                {error && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-[#F26522] text-[15px] mt-4 font-medium"
                    role="alert"
                  >
                    {error}
                  </motion.div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-8 md:mt-12 flex flex-col-reverse sm:flex-row items-center gap-4 w-full">
            {step > 1 && (
              <button
                onClick={handleBack}
                disabled={isSubmitting}
                className="w-full sm:w-auto h-[52px] px-6 text-[#1A1A1A]/60 hover:text-[#1A1A1A] font-medium text-[16px] transition-colors focus:outline-none focus:ring-2 focus:ring-[#1A1A1A] rounded-lg flex items-center justify-center disabled:opacity-50"
              >
                Back
              </button>
            )}
            
            {step !== 3 && (
              <button
                onClick={handleNext}
                disabled={isSubmitting}
                className={`w-full ${step > 1 ? 'sm:flex-1' : ''} h-[52px] bg-[#F26522] hover:bg-[#D1551A] text-white text-[16px] font-medium rounded-lg px-8 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#F26522] focus:ring-offset-2 focus:ring-offset-[#FFF5EB] flex items-center justify-center disabled:opacity-70`}
              >
                {isSubmitting ? 'Joining...' : (step === 4 ? 'Join the Waitlist' : 'Continue')}
              </button>
            )}
          </div>

        </div>
      </main>
    </div>
  );
};
