import React from 'react';
import { useNavigate } from 'react-router-dom';

export const VoicesSection = () => {
  const navigate = useNavigate();

  const perspectives = [
    {
      role: 'Tenant',
      quote: '“I can find a place. What I can\'t always find is someone I can trust.”',
      description: 'Now the people, payments, and agreements behind a rental can leave a record.',
    },
    {
      role: 'Landlord',
      quote: '“I’m handing over my property based on a story I hope is true.”',
      description: 'Now a tenant can arrive with a rental history you can see, not just a promise you have to take.',
    },
    {
      role: 'Agent',
      quote: '“Every deal starts from zero, even when I’ve spent years building trust.”',
      description: 'Now your work, your reputation, and the relationships you build can leave a record that carries forward.',
    },
  ];

  return (
    <section id="voices" className="w-full bg-[#FFF5EB] pb-20 sm:pb-28 md:pb-36 px-5 sm:px-8 md:px-12 relative z-10 font-sans">
      <div className="max-w-[1200px] mx-auto flex flex-col">

        {/* Perspectives Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-20 sm:mb-28 md:mb-32">
          {perspectives.map((item) => (
            <div
              key={item.role}
              className="bg-white border border-[#1A1A1A]/10 rounded-2xl p-7 sm:p-8 lg:p-10 flex flex-col justify-between transition-all duration-300 hover:border-[#F26522]/40 hover:shadow-[0_12px_30px_rgba(0,0,0,0.04)]"
            >
              <div>
                <span className="text-[12px] sm:text-[13px] font-mono font-bold tracking-[0.2em] text-[#F26522] uppercase block mb-6 pb-4 border-b border-[#1A1A1A]/10">
                  {item.role}
                </span>
                
                <p className="text-[19px] sm:text-[21px] lg:text-[22px] font-bold text-[#1A1A1A] leading-[1.35] tracking-tight mb-6">
                  {item.quote}
                </p>
              </div>

              <p className="text-[15px] sm:text-[16px] text-[#1A1A1A]/75 font-normal leading-[1.6] pt-5 border-t border-[#1A1A1A]/5 mt-auto">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Climax Statement & Waitlist CTA */}
        <div className="w-full flex flex-col items-center text-center max-w-[840px] mx-auto pt-8 border-t border-[#1A1A1A]/15">
          <h2 className="text-[32px] sm:text-[44px] md:text-[54px] lg:text-[60px] font-extrabold text-[#1A1A1A] leading-[1.1] tracking-tight mb-8 sm:mb-10">
            Three people. One rental relationship. <br className="hidden sm:inline" />
            <span className="text-[#F26522]">Less left to chance.</span>
          </h2>

          <button
            onClick={() => navigate('/waitlist')}
            className="bg-[#F26522] hover:bg-[#D1551A] text-white text-[16px] sm:text-[17px] font-semibold rounded-[100px] px-9 py-4 transition-all duration-300 shadow-[0_8px_20px_rgba(242,101,34,0.25)] hover:shadow-[0_12px_28px_rgba(242,101,34,0.35)] focus:outline-none focus:ring-2 focus:ring-[#F26522] focus:ring-offset-2 flex items-center justify-center gap-2 cursor-pointer"
          >
            Join the Waitlist
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
};

export default VoicesSection;
