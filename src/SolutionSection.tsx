import { useState, useEffect, useRef } from 'react';
import type { UIEvent } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Noise = () => (
  <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.2] mix-blend-overlay z-0" xmlns="http://www.w3.org/2000/svg">
    <filter id="noiseFilter">
      <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="3" stitchTiles="stitch" />
    </filter>
    <rect width="100%" height="100%" filter="url(#noiseFilter)" />
  </svg>
);

const CardOne = () => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
    className="solution-card snap-center shrink-0 w-[88vw] sm:w-[80vw] md:w-[70vw] lg:w-[60vw] max-w-[1000px] bg-gradient-to-br from-[#F26522] to-[#E35415] rounded-[32px] md:rounded-[44px] shadow-[inset_0_2px_10px_rgba(255,255,255,0.3),_0_20px_50px_rgba(0,0,0,0.08),_0_40px_100px_rgba(242,101,34,0.15)] relative overflow-hidden flex flex-col min-h-[420px] md:min-h-[480px] lg:min-h-[520px] p-6 sm:p-8 md:p-10 lg:p-12 border border-[#FFF5EB]/10">
    <Noise />
    {/* Giant Number */}
    <div className="absolute top-[-5%] right-[-5%] text-[140px] md:text-[240px] lg:text-[320px] font-bold text-[#1A1A1A]/[0.06] leading-none tracking-tighter pointer-events-none select-none z-0">
      01
    </div>
    
    {/* Abstract Art: Two sides meeting */}
    <div className="absolute top-1/4 right-[5%] w-[40%] h-[60%] pointer-events-none opacity-90 z-0 hidden sm:block">
      <div className="absolute right-[45%] w-full h-[110%] bg-[#1A1A1A]/10 rounded-t-[100px] mix-blend-multiply shadow-2xl" />
      <div className="absolute right-0 top-[10%] w-[90%] h-[100%] bg-[#FFF5EB]/20 rounded-b-[100px] mix-blend-overlay backdrop-blur-sm border border-[#FFF5EB]/30" />
    </div>
    
    {/* Content */}
    <div className="relative z-10 flex flex-col h-full justify-between">
      <div>
        <span className="inline-block text-[#FFF5EB] text-[12px] font-bold tracking-[0.25em] uppercase mb-3 md:mb-6">Before</span>
        <h3 className="text-[#1A1A1A] text-[24px] sm:text-[28px] md:text-[36px] lg:text-[42px] font-extrabold leading-[1.08] tracking-tight max-w-xl mb-4 md:mb-6">
          Know who is on the other side
        </h3>
        <div className="flex flex-col gap-2 md:gap-3 max-w-lg text-[#1A1A1A]/85 text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] font-medium leading-[1.55]">
          <p>You found a flat.</p>
          <p>The agent seems fine.</p>
          <p>The landlord exists somewhere.</p>
          <p>But you have never met either of them.</p>
          <p>You are about to send money to someone you barely know for a home you have only seen in pictures.</p>
        </div>
      </div>
      
      <div className="mt-6 md:mt-10 pt-4 md:pt-6 border-t-2 border-[#1A1A1A]/10 max-w-2xl">
        <p className="text-[#FFF5EB] text-[16px] sm:text-[18px] md:text-[22px] lg:text-[24px] font-semibold leading-[1.3] tracking-tight italic pr-4">
          What if you could see who you were dealing with before you paid?
        </p>
      </div>
    </div>
  </motion.div>
);

const CardTwo = () => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
    className="solution-card snap-center shrink-0 w-[88vw] sm:w-[80vw] md:w-[70vw] lg:w-[60vw] max-w-[1000px] bg-gradient-to-br from-[#F26522] to-[#E35415] rounded-[32px] md:rounded-[44px] shadow-[inset_0_2px_10px_rgba(255,255,255,0.3),_0_20px_50px_rgba(0,0,0,0.08),_0_40px_100px_rgba(242,101,34,0.15)] relative overflow-hidden flex flex-col min-h-[420px] md:min-h-[480px] lg:min-h-[520px] p-6 sm:p-8 md:p-10 lg:p-12 border border-[#FFF5EB]/10">
    <Noise />
    {/* Giant Number */}
    <div className="absolute bottom-[-10%] left-[-5%] text-[140px] md:text-[240px] lg:text-[320px] font-bold text-[#FFF5EB]/[0.08] leading-none tracking-tighter pointer-events-none select-none z-0">
      02
    </div>
    
    {/* Abstract Aerial Shapes */}
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 hidden sm:block">
      <div className="absolute top-[15%] right-[20%] w-[35%] h-[20%] bg-[#1A1A1A]/10 -skew-y-12 shadow-[20px_20px_0_rgba(26,26,26,0.05)]" />
      <div className="absolute top-[40%] right-[5%] w-[25%] h-[30%] bg-[#FFF5EB]/15 -skew-y-12 shadow-[10px_10px_0_rgba(255,245,235,0.05)] backdrop-blur-md border border-[#FFF5EB]/20" />
      <div className="absolute top-[55%] right-[35%] w-[40%] h-[15%] bg-[#1A1A1A]/15 -skew-y-12 shadow-[30px_30px_0_rgba(26,26,26,0.08)]" />
    </div>

    {/* Content */}
    <div className="relative z-10 flex flex-col h-full justify-between">
      <div className="flex flex-col xl:flex-row gap-6 xl:gap-14 justify-between items-start">
        <div className="flex-1 max-w-xl">
          <span className="inline-block text-[#1A1A1A] text-[12px] font-bold tracking-[0.25em] uppercase mb-3 md:mb-6">Before</span>
          <h3 className="text-[#FFF5EB] text-[24px] sm:text-[28px] md:text-[36px] lg:text-[42px] font-extrabold leading-[1.08] tracking-tight">
            See the place before you live there
          </h3>
        </div>
        <div className="flex-1 max-w-lg flex flex-col gap-2 md:gap-3 text-[#1A1A1A]/85 text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] font-medium leading-[1.55] xl:pt-8">
          <p>The place looked perfect.</p>
          <p>The street was quiet when you visited.</p>
          <p>But nobody told you the road floods every August.</p>
          <p>Nobody mentioned the power cuts every evening.</p>
          <p>Nobody warned you that other people had problems with the same place.</p>
        </div>
      </div>

      <div className="mt-6 md:mt-10 self-start xl:self-end max-w-xl xl:text-right border-l-4 xl:border-l-0 xl:border-r-4 border-[#FFF5EB] pl-4 md:pl-6 xl:pl-0 xl:pr-6">
        <p className="text-[#1A1A1A] text-[16px] sm:text-[18px] md:text-[22px] lg:text-[24px] font-semibold leading-[1.3] tracking-tight italic">
          What if the neighbourhood could tell you what the listing never did?
        </p>
      </div>
    </div>
  </motion.div>
);

const CardThree = () => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
    className="solution-card snap-center shrink-0 w-[88vw] sm:w-[80vw] md:w-[70vw] lg:w-[60vw] max-w-[1000px] bg-gradient-to-br from-[#F26522] to-[#E35415] rounded-[32px] md:rounded-[44px] shadow-[inset_0_2px_10px_rgba(255,255,255,0.3),_0_20px_50px_rgba(0,0,0,0.08),_0_40px_100px_rgba(242,101,34,0.15)] relative overflow-hidden flex flex-col min-h-[420px] md:min-h-[480px] lg:min-h-[520px] p-6 sm:p-8 md:p-10 lg:p-12 border border-[#FFF5EB]/10">
    <Noise />
    {/* Giant Number */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[160px] md:text-[260px] lg:text-[340px] font-bold text-[#1A1A1A]/[0.04] leading-none tracking-tighter pointer-events-none select-none z-0 flex items-center justify-center w-full h-full">
      03
    </div>
    
    {/* Overlapping Exchange Art */}
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 flex items-center justify-center hidden sm:flex">
      <div className="w-[60vw] lg:w-[40vw] h-[60vw] lg:h-[40vw] rounded-full border-[1.5px] border-[#FFF5EB]/20 absolute -translate-x-[15%] opacity-60 mix-blend-overlay" />
      <div className="w-[50vw] lg:w-[35vw] h-[50vw] lg:h-[35vw] rounded-full bg-[#1A1A1A]/5 border border-[#1A1A1A]/10 absolute translate-x-[15%] backdrop-blur-md" />
      <div className="w-[30%] h-[2px] bg-gradient-to-r from-[#FFF5EB]/0 via-[#FFF5EB]/50 to-[#1A1A1A]/0 absolute" />
    </div>

    {/* Content */}
    <div className="relative z-10 flex flex-col xl:flex-row h-full w-full gap-8 xl:gap-16 items-start xl:items-center">
      <div className="flex-1 w-full flex flex-col h-full justify-between xl:justify-center">
        <div>
          <span className="inline-block text-[#FFF5EB] text-[12px] font-bold tracking-[0.25em] uppercase mb-3 md:mb-6">During</span>
          <h3 className="text-[#1A1A1A] text-[24px] sm:text-[28px] md:text-[36px] lg:text-[42px] font-extrabold leading-[1.08] tracking-tight mb-4 md:mb-6">
            Your payments should leave a record
          </h3>
        </div>
        <p className="text-[#FFF5EB] text-[16px] sm:text-[18px] md:text-[22px] lg:text-[24px] font-semibold leading-[1.3] tracking-tight italic mt-6 xl:mt-12 pt-4 xl:pt-6 border-t-2 border-[#FFF5EB]/20 hidden xl:block">
          What if every payment came with a clear record that both sides could see?
        </p>
      </div>

      <div className="flex-1 w-full flex flex-col gap-2 md:gap-3 text-[#1A1A1A]/85 text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] font-medium leading-[1.55] max-w-lg">
        <p>You paid the deposit.</p>
        <p>Then the rent.</p>
        <p>Then the agency fee.</p>
        <p>The money left your account, but keeping track of everything became your problem.</p>
        <p>Later, someone says you never paid.</p>
        <p>Now you have to search through old messages and bank statements.</p>
      </div>
      
      {/* Mobile only question */}
      <p className="text-[#FFF5EB] text-[16px] sm:text-[18px] font-semibold leading-[1.3] tracking-tight italic mt-4 pt-4 border-t border-[#FFF5EB]/20 xl:hidden">
        What if every payment came with a clear record that both sides could see?
      </p>
    </div>
  </motion.div>
);

const CardFour = () => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
    className="solution-card snap-center shrink-0 w-[88vw] sm:w-[80vw] md:w-[70vw] lg:w-[60vw] max-w-[1000px] bg-gradient-to-br from-[#F26522] to-[#E35415] rounded-[32px] md:rounded-[44px] shadow-[inset_0_2px_10px_rgba(255,255,255,0.3),_0_20px_50px_rgba(0,0,0,0.08),_0_40px_100px_rgba(242,101,34,0.15)] relative overflow-hidden flex flex-col min-h-[420px] md:min-h-[480px] lg:min-h-[520px] p-6 sm:p-8 md:p-10 lg:p-12 border border-[#FFF5EB]/10">
    <Noise />
    {/* Giant Number */}
    <div className="absolute top-[5%] left-[5%] text-[140px] md:text-[240px] lg:text-[320px] font-bold text-[#FFF5EB]/[0.08] leading-none tracking-tighter pointer-events-none select-none z-0">
      04
    </div>
    
    {/* Architectural Elements */}
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 hidden sm:block">
      <div className="absolute bottom-0 left-[25%] w-[2px] h-[75%] bg-[#1A1A1A]/10" />
      <div className="absolute top-0 right-[25%] w-[2px] h-[45%] bg-[#FFF5EB]/30" />
      <div className="absolute top-[25%] right-[5%] w-[45%] h-[60%] border-l-[2px] border-t-[2px] border-[#1A1A1A]/10 bg-gradient-to-br from-[#1A1A1A]/5 to-transparent shadow-[-30px_-30px_80px_rgba(26,26,26,0.06)]" />
      <div className="absolute top-[45%] right-[15%] w-[25%] h-[35%] bg-[#FFF5EB]/10 backdrop-blur-md border border-[#FFF5EB]/20 shadow-[10px_10px_40px_rgba(255,245,235,0.05)]" />
    </div>

    {/* Content */}
    <div className="relative z-10 w-full h-full flex flex-col justify-between">
      <div className="flex flex-col xl:flex-row gap-6 xl:gap-14 justify-end">
        <div className="flex-1 max-w-lg xl:order-2">
          <span className="inline-block text-[#1A1A1A] text-[12px] font-bold tracking-[0.25em] uppercase mb-3 md:mb-6">During</span>
          <h3 className="text-[#FFF5EB] text-[24px] sm:text-[28px] md:text-[36px] lg:text-[42px] font-extrabold leading-[1.08] tracking-tight mb-4 md:mb-6">
            Your home should remember what happened
          </h3>
          <div className="flex flex-col gap-2 md:gap-3 text-[#1A1A1A]/85 text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] font-medium leading-[1.55]">
            <p>The tap started leaking.</p>
            <p>You sent a message.</p>
            <p>Then another.</p>
            <p>Then you called.</p>
            <p>Nothing happened.</p>
            <p>Later, the landlord says you never reported it.</p>
            <p>The agreement you signed is buried somewhere in your phone.</p>
          </div>
        </div>
      </div>

      <div className="mt-6 md:mt-10 max-w-2xl xl:order-1">
        <div className="pl-4 md:pl-6 border-l-4 border-[#1A1A1A]">
          <p className="text-[#1A1A1A] text-[16px] sm:text-[18px] md:text-[22px] lg:text-[24px] font-semibold leading-[1.3] tracking-tight italic">
            What if every request, repair, and agreement stayed in one clear place?
          </p>
        </div>
      </div>
    </div>
  </motion.div>
);

const CardFive = () => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
    className="solution-card snap-center shrink-0 w-[88vw] sm:w-[80vw] md:w-[70vw] lg:w-[60vw] max-w-[1000px] bg-gradient-to-br from-[#F26522] to-[#E35415] rounded-[32px] md:rounded-[44px] shadow-[inset_0_2px_10px_rgba(255,255,255,0.3),_0_20px_50px_rgba(0,0,0,0.08),_0_40px_100px_rgba(242,101,34,0.15)] relative overflow-hidden flex flex-col min-h-[420px] md:min-h-[480px] lg:min-h-[520px] p-6 sm:p-8 md:p-10 lg:p-12 border border-[#FFF5EB]/10">
    <Noise />
    {/* Giant Number */}
    <div className="absolute bottom-[-15%] right-[-5%] text-[140px] md:text-[240px] lg:text-[320px] font-bold text-[#1A1A1A]/[0.05] leading-none tracking-tighter pointer-events-none select-none z-0">
      05
    </div>
    
    {/* The Path Art */}
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 hidden sm:block">
      <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
        <polygon points="0,100 35,25 65,25 100,100" fill="#1A1A1A" opacity="0.04" />
        <polygon points="43,25 57,25 57,0 43,0" fill="#FFF5EB" opacity="0.12" />
        <line x1="0" y1="100" x2="35" y2="25" stroke="#1A1A1A" strokeWidth="0.1" opacity="0.2" />
        <line x1="100" y1="100" x2="65" y2="25" stroke="#1A1A1A" strokeWidth="0.1" opacity="0.2" />
      </svg>
    </div>

    {/* Content */}
    <div className="relative z-10 w-full h-full flex flex-col justify-between items-center text-center">
      <div className="flex flex-col items-center max-w-2xl mx-auto w-full xl:pt-4">
        <span className="inline-block text-[#FFF5EB] text-[12px] font-bold tracking-[0.25em] uppercase mb-3 md:mb-6">After</span>
        <h3 className="text-[#1A1A1A] text-[24px] sm:text-[28px] md:text-[36px] lg:text-[42px] font-extrabold leading-[1.08] tracking-tight mb-4 md:mb-6">
          Your good rental history should follow you
        </h3>
        <div className="flex flex-col gap-2 md:gap-3 text-[#1A1A1A]/85 text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] font-medium leading-[1.55]">
          <p>You paid on time.</p>
          <p>You took care of the place.</p>
          <p>You left it better than you found it.</p>
          <p>Now you are moving somewhere new.</p>
          <p>But the next landlord does not know any of that.</p>
          <p>You have to start proving yourself all over again.</p>
        </div>
      </div>

      <div className="mt-6 md:mt-10 w-full max-w-3xl mx-auto z-10 relative">
        <p className="text-[#FFF5EB] text-[15px] sm:text-[18px] md:text-[22px] lg:text-[24px] font-semibold leading-[1.3] tracking-tight italic bg-[#1A1A1A] p-5 sm:p-6 md:p-8 rounded-[20px] md:rounded-[28px] shadow-xl text-left md:text-center border border-[#1A1A1A]">
          What if the trust you earned could follow you to your next home?
        </p>
      </div>
    </div>
  </motion.div>
);

export const SolutionSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const yParallax = useTransform(scrollYProgress, [0, 1], [60, -60]);

  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleScroll = (e: UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const scrollCenter = container.scrollLeft + container.clientWidth / 2;
    let closestIndex = 0;
    let minDistance = Infinity;

    const cards = container.querySelectorAll('.solution-card');
    cards.forEach((child, index) => {
      const childElement = child as HTMLElement;
      const childCenter = childElement.offsetLeft + childElement.clientWidth / 2;
      const distance = Math.abs(scrollCenter - childCenter);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    if (closestIndex !== activeIndex) {
      setActiveIndex(closestIndex);
    }
  };

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const cards = container.querySelectorAll('.solution-card');
    const targetCard = cards[index] as HTMLElement;
    if (targetCard) {
      // Calculate scroll position to center the card horizontally without affecting vertical page scroll
      const scrollPosition = targetCard.offsetLeft - (container.clientWidth / 2) + (targetCard.clientWidth / 2);
      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      if (!scrollRef.current) return;
      const nextIndex = (activeIndex + 1) % 5;
      scrollToIndex(nextIndex);
    }, 5000);

    return () => clearInterval(interval);
  }, [activeIndex, isHovered]);

  return (
    <section id="solution" ref={sectionRef} className="bg-[#FFF5EB] py-14 md:py-20 lg:py-24 w-full overflow-hidden shrink-0">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 mb-8 md:mb-14 flex flex-col lg:flex-row lg:items-end justify-between gap-6 md:gap-10">
        <div className="max-w-2xl">
          <h2 className="text-[#1A1A1A] text-[30px] sm:text-[38px] md:text-[46px] lg:text-[54px] font-extrabold tracking-tight mb-3 md:mb-4 leading-[1.1]">
            A Better Way to Rent
          </h2>
          <p className="text-[#1A1A1A]/80 text-[15px] sm:text-[16px] md:text-[18px] lg:text-[19px] font-medium leading-[1.55] max-w-2xl">
            Renting should not mean guessing who to trust, where your money went, or what happens next. MyDomos Africa changes that.
          </p>
        </div>
        
        {/* Progress Indicators */}
        <div className="flex gap-2.5 shrink-0 pb-2">
          {[0, 1, 2, 3, 4].map((i) => (
            <button
              key={i}
              onClick={() => scrollToIndex(i)}
              className="relative h-1.5 w-10 md:w-14 bg-[#1A1A1A]/10 rounded-full overflow-hidden cursor-pointer"
              aria-label={`Go to slide ${i + 1}`}
            >
              {activeIndex === i && !isHovered && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 5, ease: "linear" }}
                  className="absolute top-0 left-0 h-full bg-[#1A1A1A]"
                />
              )}
              {(activeIndex > i || (activeIndex === i && isHovered)) && (
                <div className="absolute top-0 left-0 h-full w-full bg-[#1A1A1A]" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Carousel Track */}
      <motion.div
        style={{ y: yParallax, scrollBehavior: "smooth" }}
        ref={scrollRef}
        className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar pb-12 pt-2 px-6 md:px-[10vw] lg:px-[15vw] gap-5 md:gap-8 lg:gap-10"
        
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setIsHovered(false)}
        onScroll={handleScroll}
      >
        <CardOne />
        <CardTwo />
        <CardThree />
        <CardFour />
        <CardFive />
        
        {/* Trailing space to allow center-snapping of the last card on wide screens */}
        <div className="shrink-0 w-[5vw] lg:w-[15vw] snap-align-none pointer-events-none hidden md:block" />
      </motion.div>
    </section>
  );
};
