import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const FAQ_DATA = [
  {
    id: 'q1',
    question: "What exactly is MyDomos?",
    answer: "We’re building the trust infrastructure around renting in Africa — helping the people involved in a rental relationship have more clarity and less uncertainty."
  },
  {
    id: 'q2',
    question: "Is MyDomos a property listing website?",
    answer: "No. We don’t list properties or replace the people already helping you find a home. We sit around the rental relationship itself."
  },
  {
    id: 'q3',
    question: "Who is MyDomos for?",
    answer: "Anyone involved in renting — tenants, landlords, and agents. And because we’re neutral infrastructure, existing platforms and businesses can use us too."
  },
  {
    id: 'q4',
    question: "Will MyDomos replace agents or landlords?",
    answer: "No. We’re not here to remove the people who make renting happen. We’re building infrastructure that can work for everyone on either side of the relationship."
  },
  {
    id: 'q5',
    question: "Do I have to change how I currently rent?",
    answer: "Not necessarily. We’re building around the way renting already happens, with the goal of making the experience clearer and more trustworthy over time."
  },
  {
    id: 'q6',
    question: "Where are you launching first?",
    answer: "We’re starting in Lagos and expanding from there. Join the waitlist to be among the first to know when access opens."
  }
];

export const FaqSection = () => {
  const navigate = useNavigate();
  const [activeId, setActiveId] = useState<string | null>(null);

  const toggleQuestion = (id: string) => {
    setActiveId(prev => (prev === id ? null : id));
  };

  return (
    <div className="w-full bg-white flex flex-col items-center pb-12 md:pb-20 rounded-b-[40px] md:rounded-b-[60px] relative z-20">
      <section className="w-full py-16 md:py-24 px-6 md:px-12 flex flex-col items-center">
        <div className="w-full max-w-[700px]">
          {/* Header */}
          <div className="mb-10 md:mb-16 flex flex-col items-center text-center">
            <h2 className="text-[26px] md:text-[36px] font-bold text-[#1A1A1A] leading-[1.2] tracking-tight">
              Questions You’re Already Asking
            </h2>
          </div>

          {/* Accordion */}
          <div className="flex flex-col space-y-3 md:space-y-4">
            {FAQ_DATA.map((faq) => {
              const isActive = activeId === faq.id;
              
              return (
                <div 
                  key={faq.id} 
                  className="w-full bg-[#FFF5EB] border border-[#F26522]/10 rounded-xl overflow-hidden transition-colors duration-300 hover:border-[#F26522]/30"
                >
                  <button
                    onClick={() => toggleQuestion(faq.id)}
                    aria-expanded={isActive}
                    aria-controls={`answer-${faq.id}`}
                    className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none focus-visible:bg-[#F26522]/5"
                  >
                    <h3 className="text-[18px] md:text-[clamp(20px,1.8vw,26px)] font-semibold text-[#1A1A1A] pr-4 leading-snug">
                      {faq.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: isActive ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="shrink-0 text-[#1A1A1A]/40"
                    >
                      <ChevronDown className="w-6 h-6 md:w-7 md:h-7" strokeWidth={1.5} />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        id={`answer-${faq.id}`}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 md:px-6 pb-5 md:pb-6 pt-0">
                          <p className="text-[16px] md:text-[17px] lg:text-[18px] font-normal text-[#1A1A1A]/70 leading-[1.6] max-w-[95%]">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pre-Footer CTA */}
      <section className="w-full py-12 md:py-20 px-6 md:px-12 flex flex-col items-center text-center">
        <h2 className="text-[28px] md:text-[44px] font-bold text-[#1A1A1A] leading-[1.1] tracking-tight mb-4 max-w-[480px]">
          Renting deserves better infrastructure.
        </h2>
        <p className="text-[13px] md:text-[15px] font-normal text-[#1A1A1A]/60 mb-10 max-w-[340px] leading-[1.5]">
          Join thousands helping shape the future of trusted renting across Africa.
        </p>

        <div className="flex flex-col w-full max-w-[300px] gap-4">
          <button onClick={() => navigate('/waitlist')} className="w-full bg-[#F26522] hover:bg-[#D1551A] text-white text-[14px] font-medium rounded-[100px] px-[32px] py-[16px] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#F26522] focus:ring-offset-2 flex items-center justify-center gap-2">
            Join Waitlist
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          <button onClick={() => navigate('/partner')} className="w-full bg-white border border-[#1A1A1A]/15 hover:border-[#1A1A1A]/30 text-[#1A1A1A] text-[14px] font-medium rounded-[100px] px-[32px] py-[16px] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#1A1A1A] focus:ring-offset-2 flex items-center justify-center gap-2">
            Partner With Us
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <p className="text-[10px] md:text-[11px] font-normal text-[#1A1A1A]/40 mt-12 max-w-[260px] leading-[1.6]">
          Building the future of housing in Africa. One verified relationship at a time.
        </p>
      </section>
    </div>
  );
};

export default FaqSection;
