import React from 'react';

export const TrustSection = () => {
  const stages = [
    {
      step: 'BEFORE',
      title: "Before you say yes, you want to know what you're stepping into.",
      description: "A rental begins with uncertainty. It doesn't have to stay there.",
    },
    {
      step: 'DURING',
      title: "Once you move in, the relationship should not disappear behind the paperwork.",
      description: "What happens during a tenancy should have somewhere to live.",
    },
    {
      step: 'AFTER',
      title: "Leaving one home shouldn't mean starting from zero at the next.",
      description: "What happens in one rental can become part of what comes next.",
    },
  ];

  return (
    <section className="w-full bg-[#FFF5EB] border-t border-[#1A1A1A]/10 py-20 sm:py-24 md:py-32 px-5 sm:px-8 md:px-12 relative z-10 font-sans">
      <div className="max-w-[1200px] mx-auto flex flex-col">
        
        {/* Header Block */}
        <div className="max-w-[840px] mb-14 sm:mb-18 md:mb-20">
          <span className="text-[13px] sm:text-[14px] font-semibold text-[#F26522] uppercase tracking-[0.2em] mb-4 inline-block">
            THE RENTAL RELATIONSHIP
          </span>
          <h2 className="text-[32px] sm:text-[44px] md:text-[56px] font-extrabold text-[#1A1A1A] leading-[1.1] tracking-tight mb-6">
            How Trust Gets Built
          </h2>
          <p className="text-[18px] sm:text-[20px] md:text-[22px] text-[#1A1A1A]/75 font-normal leading-[1.5] max-w-[680px]">
            Because renting does not begin when money moves. And it does not end when the keys change hands.
          </p>
        </div>

        {/* The Three Stages: BEFORE / DURING / AFTER */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-20 sm:mb-24 md:mb-28">
          {stages.map((stage, idx) => (
            <div
              key={stage.step}
              className="bg-white border border-[#1A1A1A]/10 rounded-2xl p-7 sm:p-8 lg:p-10 flex flex-col justify-between transition-all duration-300 hover:border-[#F26522]/40 hover:shadow-[0_12px_30px_rgba(0,0,0,0.04)] group"
            >
              <div>
                <div className="flex items-center justify-between mb-6 sm:mb-8 pb-4 border-b border-[#1A1A1A]/10">
                  <span className="text-[12px] sm:text-[13px] font-mono font-bold tracking-[0.2em] text-[#F26522] uppercase">
                    {stage.step}
                  </span>
                  <span className="text-[12px] font-mono text-[#1A1A1A]/40 font-medium">
                    0{idx + 1}
                  </span>
                </div>
                
                <h3 className="text-[20px] sm:text-[22px] lg:text-[24px] font-bold text-[#1A1A1A] leading-[1.3] tracking-tight mb-4">
                  {stage.title}
                </h3>
              </div>

              <p className="text-[15px] sm:text-[16px] text-[#1A1A1A]/70 font-normal leading-[1.6] pt-4 mt-auto border-t border-[#1A1A1A]/5">
                {stage.description}
              </p>
            </div>
          ))}
        </div>

        {/* Transition Statement */}
        <div className="w-full pt-12 sm:pt-16 border-t border-[#1A1A1A]/15 text-center flex flex-col items-center">
          <p className="text-[22px] sm:text-[28px] md:text-[36px] font-bold text-[#1A1A1A] leading-[1.25] tracking-tight max-w-[800px]">
            Trust isn't one moment. It's what carries through the relationship.
          </p>
        </div>

      </div>
    </section>
  );
};

export default TrustSection;
