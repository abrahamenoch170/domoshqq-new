import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const FAQ_DATA = [
  {
    id: 'q1',
    question: "What exactly is MyDomos?",
    answer: "MyDomos helps make renting easier to trust by giving tenants, property owners, and agents more clarity, accountability, and continuity throughout the rental relationship — before, during, and after a tenancy.\n\nIt is not a property listing website or an estate agency. We are building a better way for the people involved in renting to work together with more confidence."
  },
  {
    id: 'q2',
    question: "Who is MyDomos for?",
    answer: "MyDomos is for the people who make a rental relationship work:\n\nTenants, landlords and property owners, and agents or property professionals.\n\nEach side has different problems, but all three benefit when expectations are clear, relationships are more accountable, and the history of a rental does not simply disappear when the tenancy ends."
  },
  {
    id: 'q3',
    question: "Why does renting need something like MyDomos?",
    answer: "Too much of renting still depends on memory, verbal promises, scattered receipts, and whether the people involved simply trust each other.\n\nTenants can be left uncertain. Property owners can be left exposed. Agents can spend time managing misunderstandings and proving what happened.\n\nMyDomos is being built to make rental relationships clearer and easier to trust for everyone involved."
  },
  {
    id: 'q4',
    question: "Is MyDomos another property listing or real estate platform?",
    answer: "No.\n\nMyDomos is not trying to become another place to browse properties.\n\nWe are focused on what happens around the rental relationship — helping tenants, property owners, and agents build greater clarity and trust before, during, and after renting."
  },
  {
    id: 'q5',
    question: "What makes MyDomos different?",
    answer: "Most rental experiences are designed around finding a property.\n\nMyDomos is designed around the relationship that follows.\n\nWe believe renting should not start from zero every time. The trust people build, the agreements they make, and the way they handle a tenancy should have meaning beyond a single transaction."
  },
  {
    id: 'q6',
    question: "How does MyDomos help landlords and property owners?",
    answer: "Property owners need more than someone to occupy their property. They need confidence in the people they deal with, clarity around agreements, and a better way for their own reputation as responsible property owners to matter.\n\nMyDomos is being built to make the relationship clearer and more accountable from both sides."
  },
  {
    id: 'q7',
    question: "How does MyDomos help tenants?",
    answer: "Tenants deserve to know who they are dealing with, understand what they are agreeing to, and have confidence that the things they do throughout a tenancy actually matter.\n\nMyDomos is being built to give renters a more trustworthy rental experience and help the good relationships they build carry forward."
  },
  {
    id: 'q8',
    question: "How does MyDomos help agents?",
    answer: "Agents often sit in the middle of the rental relationship, balancing the expectations of property owners and tenants while managing communication, agreements, and trust.\n\nMyDomos is being built to help agents work with greater clarity and accountability while giving the relationships they help create more continuity.\n\nThe goal is not to replace agents.\n\nIt is to make the rental relationships they facilitate better."
  },
  {
    id: 'q9',
    question: "What happens to the trust I build through a rental?",
    answer: "Today, much of it disappears when the tenancy ends.\n\nYou may have paid on time, cared for the property, communicated well, kept your agreements, or managed the relationship professionally — but the next person you deal with may never know.\n\nMyDomos is built around the idea that the trust people earn should have a way to remain meaningful beyond one rental relationship."
  },
  {
    id: 'q10',
    question: "Does MyDomos guarantee that someone will never have a bad rental experience?",
    answer: "No.\n\nNo platform can eliminate every dishonest person, disagreement, or problem.\n\nWhat MyDomos can do is help make rental relationships clearer and more accountable, giving tenants, property owners, and agents better context when it matters."
  },
  {
    id: 'q11',
    question: "Is MyDomos only for tenants?",
    answer: "No.\n\nMyDomos is intentionally built around the entire rental relationship.\n\nThat means tenants, landlords/property owners, and agents all have a place in what we are building.\n\nA rental experience cannot truly become better if only one side benefits."
  },
  {
    id: 'q12',
    question: "Is MyDomos only for people renting in Nigeria?",
    answer: "MyDomos is being built from the realities of renting in Nigeria and the wider African market.\n\nWe are starting with problems we understand deeply, with the bigger ambition of making rental relationships more trustworthy across Africa."
  },
  {
    id: 'q13',
    question: "Why should I join the waitlist?",
    answer: "Because MyDomos is being built with the people who actually experience these problems.\n\nWhether you are a tenant, property owner, landlord, or agent, joining the waitlist means you can follow what we are building, be among the first to experience it, and help shape a better way to rent."
  }
];

export const FaqSection = () => {
  const navigate = useNavigate();
  const [activeId, setActiveId] = useState<string | null>(null);

  const toggleQuestion = (id: string) => {
    setActiveId(prev => (prev === id ? null : id));
  };

  return (
    <div id="faq" className="w-full bg-white flex flex-col items-center rounded-b-[40px] md:rounded-b-[60px] relative z-20 pb-12 md:pb-16">
      <section className="w-full pt-20 md:pt-32 pb-12 md:pb-16 px-6 md:px-12 flex flex-col items-center">
        <div className="w-full max-w-[700px]">
          {/* Header */}
          <div className="mb-10 md:mb-16 flex flex-col items-center text-center">
            <h2 className="text-[30px] sm:text-[38px] md:text-[44px] font-bold text-[#1A1A1A] leading-[1.15] tracking-tight">
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
                    className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none focus-visible:bg-[#F26522]/5 cursor-pointer"
                  >
                    <h3 className="text-[18px] md:text-[20px] lg:text-[22px] font-semibold text-[#1A1A1A] pr-4 leading-snug">
                      {faq.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: isActive ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="shrink-0 text-[#1A1A1A]/40"
                    >
                      <ChevronDown className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.75} />
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
                          <div className="text-[16px] md:text-[17px] font-normal text-[#1A1A1A]/80 leading-[1.65] max-w-[95%] space-y-4">
                            {faq.answer.split('\n\n').map((paragraph, idx) => (
                              <p key={idx}>{paragraph}</p>
                            ))}
                          </div>
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
      <section className="w-full pt-12 md:pt-16 pb-8 md:pb-12 px-6 md:px-12 flex flex-col items-center text-center">
        <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-bold text-[#1A1A1A] leading-[1.15] tracking-tight mb-4 max-w-[540px]">
          Renting deserves better infrastructure.
        </h2>
        <p className="text-[16px] md:text-[18px] font-normal text-[#1A1A1A]/70 mb-8 max-w-[440px] leading-[1.55]">
          Join thousands of tenants, landlords, and agents shaping the future of trusted renting across Africa.
        </p>

        <div className="flex flex-col w-full max-w-[320px] gap-4">
          <button onClick={() => navigate('/waitlist')} className="w-full bg-[#F26522] hover:bg-[#D1551A] text-white text-[15px] sm:text-[16px] font-semibold rounded-[100px] px-8 py-3.5 transition-all duration-300 shadow-[0_8px_20px_rgba(242,101,34,0.25)] hover:shadow-[0_12px_28px_rgba(242,101,34,0.35)] focus:outline-none focus:ring-2 focus:ring-[#F26522] focus:ring-offset-2 flex items-center justify-center gap-2">
            Join Waitlist
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          <button onClick={() => navigate('/partner')} className="w-full bg-white border border-[#1A1A1A]/20 hover:border-[#1A1A1A] text-[#1A1A1A] text-[15px] sm:text-[16px] font-semibold rounded-[100px] px-8 py-3.5 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#1A1A1A] focus:ring-offset-2 flex items-center justify-center gap-2">
            Partner With Us
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <p className="text-[12px] md:text-[13px] font-medium text-[#1A1A1A]/50 mt-12 max-w-[320px] leading-[1.6]">
          Building the future of housing in Africa. One verified relationship at a time.
        </p>
      </section>
    </div>
  );
};

export default FaqSection;
