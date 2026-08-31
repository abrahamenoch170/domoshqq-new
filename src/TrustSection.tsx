import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionTemplate, useReducedMotion } from 'motion/react';

export const TrustSection = () => {
  return (
    <section className="bg-[#FFF5EB] w-full relative overflow-hidden font-sans selection:bg-[#F26522]/20 selection:text-[#1A1A1A]">
      <Intro />
      
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative w-full flex flex-col">
        <Stage
          label="BEFORE"
          largeText="Before you say yes, you want to know what you're stepping into."
          smallText="A rental begins with uncertainty. It doesn't have to stay there."
          lineLogic={(progress: any, reduced: boolean) => <StageOneLine scrollYProgress={progress} shouldReduceMotion={reduced} />}
        />
        <Stage
          label="DURING"
          largeText="Once you move in, the relationship should not disappear behind the paperwork."
          smallText="What happens during a tenancy should have somewhere to live."
          lineLogic={(progress: any, reduced: boolean) => <StageTwoLine scrollYProgress={progress} shouldReduceMotion={reduced} />}
        />
        <Stage
          label="AFTER"
          largeText="Leaving one home shouldn't mean starting from zero at the next."
          smallText="What happens in one rental can become part of what comes next."
          isLast={true}
          lineLogic={() => <StageThreeLine />}
        />
      </div>

      <Outro />
    </section>
  );
};

const Intro = () => {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 90%", "end 40%"] });
  
  const animatedOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const animatedY = useTransform(scrollYProgress, [0, 1], [30, 0]);
  
  const opacity = shouldReduceMotion ? 1 : animatedOpacity;
  const y = shouldReduceMotion ? 0 : animatedY;

  return (
    <div ref={ref} className="min-h-[60svh] flex flex-col justify-center max-w-[1200px] mx-auto px-6 md:px-12 pt-[20vh] pb-[10vh]">
      <motion.span style={{ opacity, y }} className="text-[12px] md:text-[14px] font-bold tracking-[0.2em] text-[#1A1A1A]/60 uppercase mb-6 md:mb-8">
        THE RENTAL RELATIONSHIP
      </motion.span>
      <motion.h2 style={{ opacity, y }} className="text-[clamp(48px,6vw,96px)] font-extrabold text-[#1A1A1A] leading-[1.05] tracking-tight mb-8 max-w-[900px]">
        How Trust Gets Built
      </motion.h2>
      <motion.p style={{ opacity, y }} className="text-[16px] md:text-[18px] text-[#1A1A1A]/80 max-w-[520px] leading-[1.6]">
        Because renting does not begin when money moves. And it does not end when the keys change hands.
      </motion.p>
    </div>
  );
};

const Stage = ({ label, largeText, smallText, lineLogic, isLast = false }: any) => {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 20%"]
  });

  const animatedOpacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
  const animatedY = useTransform(scrollYProgress, [0, 0.4], [40, 0]);
  
  const animatedSmallOpacity = useTransform(scrollYProgress, [0.2, 0.6], [0, 1]);
  const animatedSmallY = useTransform(scrollYProgress, [0.2, 0.6], [10, 0]);

  const opacity = shouldReduceMotion ? 1 : animatedOpacity;
  const y = shouldReduceMotion ? 0 : animatedY;
  const smallOpacity = shouldReduceMotion ? 1 : animatedSmallOpacity;
  const smallY = shouldReduceMotion ? 0 : animatedSmallY;

  return (
    <div ref={ref} className={`relative min-h-[75svh] md:min-h-[100svh] flex flex-col justify-center pl-10 md:pl-32 py-24 w-full ${isLast ? 'pb-12' : ''}`}>
      {/* Line Track */}
      <div className={`absolute left-0 md:left-[24px] top-0 w-[2px] ${isLast ? 'h-[130%]' : 'bottom-[-1px] z-10'}`}>
        {lineLogic(scrollYProgress, shouldReduceMotion)}
      </div>

      <div className="flex flex-col relative z-20">
        <motion.span 
          style={{ opacity, y }}
          className="text-[12px] md:text-[14px] font-bold text-[#1A1A1A] uppercase tracking-[0.2em] mb-6 md:mb-10"
        >
          {label}
        </motion.span>
        <motion.h3 
          style={{ opacity, y }}
          className="text-[clamp(36px,9vw,58px)] md:text-[clamp(40px,5vw,82px)] font-bold text-[#1A1A1A] leading-[1.05] tracking-tight mb-8 max-w-[900px]"
        >
          {largeText}
        </motion.h3>
        <motion.p 
          style={{ opacity: smallOpacity, y: smallY }}
          className="text-[15px] md:text-[18px] text-[#1A1A1A]/80 font-normal leading-[1.6] max-w-[520px]"
        >
          {smallText}
        </motion.p>
      </div>
    </div>
  );
};

const StageOneLine = ({ scrollYProgress, shouldReduceMotion }: any) => {
  const gap = useTransform(scrollYProgress, [0, 0.7], [32, 0]);
  const dashArray = useMotionTemplate`16 ${gap}`;
  const animatedOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  
  return (
    <motion.svg className="w-full h-full absolute left-0 top-0" style={{ opacity: shouldReduceMotion ? 1 : animatedOpacity }}>
      <motion.line x1="1" y1="0" x2="1" y2="100%" stroke="#F26522" strokeWidth="2" strokeDasharray={shouldReduceMotion ? "16 0" : dashArray} />
    </motion.svg>
  );
};

const StageTwoLine = ({ scrollYProgress, shouldReduceMotion }: any) => {
  const animatedOpacity = useTransform(scrollYProgress, [0, 0.5], [0.3, 1]);
  return (
    <motion.div className="w-full h-full bg-[#F26522] absolute left-0 top-0" style={{ opacity: shouldReduceMotion ? 1 : animatedOpacity }} />
  );
};

const StageThreeLine = () => {
  return (
    <div className="w-full h-full bg-[#F26522] absolute left-0 top-0" />
  );
};

const Outro = () => {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 90%", "end 60%"] });
  
  const animatedOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const animatedY = useTransform(scrollYProgress, [0, 1], [20, 0]);
  
  const opacity = shouldReduceMotion ? 1 : animatedOpacity;
  const y = shouldReduceMotion ? 0 : animatedY;

  return (
    <div ref={ref} className="min-h-[50svh] flex flex-col items-center justify-center text-center px-6 max-w-4xl mx-auto pt-[20vh] pb-[20vh] relative z-20">
      <motion.p style={{ opacity, y }} className="text-[20px] md:text-[28px] text-[#1A1A1A] font-medium leading-[1.4] mb-12 max-w-[600px]">
        Trust isn't one moment. It's what carries through the relationship.
      </motion.p>
      <motion.button style={{ opacity, y }} className="text-[#F26522] text-[16px] md:text-[18px] font-semibold hover:text-[#1A1A1A] transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F26522] focus-visible:ring-offset-4 focus-visible:ring-offset-[#FFF5EB] rounded-sm py-2 px-4">
        Join the Waitlist
      </motion.button>
    </div>
  );
};

export default TrustSection;
