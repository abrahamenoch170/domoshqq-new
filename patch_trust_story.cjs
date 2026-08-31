const fs = require('fs');

const content = `import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export const TrustSection = () => {
  return (
    <section className="bg-[#FFF5EB] w-full overflow-hidden font-sans selection:bg-[#F26522]/20 selection:text-[#0B0B0D]">
      <Opening />

      {/* CHAPTER 1 - BEFORE */}
      <div className="px-6 md:px-12 max-w-[1200px] mx-auto pt-[10vh] pb-[20vh]">
        <ChapterIntro label="BEFORE" headline="You should know who you are dealing with." />
        <div className="pl-0 md:pl-24 lg:pl-40">
          <StoryText>You found the place.</StoryText>
          <StoryText>You met the agent.</StoryText>
          <StoryText>You were asked to pay.</StoryText>
          <StoryText isEmphasized>But you still don't really know who you're dealing with.</StoryText>
          <StoryText isQuestion>What if you could know before you paid?</StoryText>
        </div>
      </div>

      {/* CHAPTER 2 - DURING */}
      <div className="px-6 md:px-12 max-w-[1200px] mx-auto py-[20vh]">
        <ChapterIntro label="DURING" headline="What you agree on should not disappear." />
        <div className="pl-0 md:pl-24 lg:pl-40">
          <StoryText>The tap leaks.</StoryText>
          <StoryText>You report it.</StoryText>
          <StoryText>You call again.</StoryText>
          <StoryText>Someone finally fixes it.</StoryText>
          <StoryText isEmphasized>Months later, nobody remembers what happened.</StoryText>
          <StoryText isQuestion>What if the things you agreed on stayed clear?</StoryText>
        </div>
      </div>

      {/* CHAPTER 3 - AFTER */}
      <div className="px-6 md:px-12 max-w-[1200px] mx-auto py-[20vh]">
        <ChapterIntro label="AFTER" headline="Your good rental history should not end with the rental." />
        <div className="pl-0 md:pl-24 lg:pl-40">
          <StoryText>You paid on time.</StoryText>
          <StoryText>You took care of the place.</StoryText>
          <StoryText>You moved out.</StoryText>
          <StoryText>Now you need another home.</StoryText>
          <StoryText isEmphasized>And the person you meet next knows none of that.</StoryText>
          <ClimaxText>What if the trust you earned could come with you?</ClimaxText>
        </div>
      </div>

      <Outro />
    </section>
  );
};

const Opening = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "start 40%", "start 10%", "start -30%"]
  });
  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.7, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.4], [50, 0]);

  return (
    <motion.div ref={ref} style={{ opacity, y }} className="min-h-[100vh] flex flex-col justify-center max-w-[1200px] mx-auto px-6 md:px-12 pt-[15vh] pb-[25vh]">
       <div className="text-[12px] md:text-[14px] font-bold tracking-[0.2em] text-[#0B0B0D]/50 uppercase mb-8">
         How Trust Gets Built
       </div>
       <h1 className="text-[48px] md:text-[80px] lg:text-[96px] font-extrabold text-[#0B0B0D] leading-[1.05] tracking-tight max-w-[1000px] mb-10">
         Trust is built in the moments that matter.
       </h1>
       <p className="text-[20px] md:text-[28px] text-[#0B0B0D]/60 font-medium">
         Before you pay. While you live there. After you leave.
       </p>
    </motion.div>
  );
};

const ChapterIntro = ({ label, headline }: { label: string, headline: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "start 50%", "start 10%", "start -20%"]
  });
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0, 1, 1, 0.1]);
  const y = useTransform(scrollYProgress, [0, 0.3], [40, 0]);

  return (
    <motion.div ref={ref} style={{ opacity, y }} className="mb-[15vh] md:mb-[25vh]">
      <div className="text-[13px] md:text-[15px] font-bold tracking-[0.2em] text-[#0B0B0D]/50 mb-6 md:mb-8 uppercase">
        {label}
      </div>
      <h2 className="text-[36px] md:text-[56px] lg:text-[64px] font-extrabold text-[#0B0B0D] leading-[1.1] tracking-tight max-w-[900px]">
        {headline}
      </h2>
    </motion.div>
  );
};

const StoryText = ({ children, isEmphasized = false, isQuestion = false }: { children: React.ReactNode, isEmphasized?: boolean, isQuestion?: boolean }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 95%", "start 55%", "start 25%", "start -10%"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.7, 1], [0.1, 1, 1, 0.15]);
  const y = useTransform(scrollYProgress, [0, 0.4], [30, 0]);

  let baseClass = "text-[24px] md:text-[36px] text-[#0B0B0D]/70 font-medium leading-[1.5] max-w-[700px]";
  if (isEmphasized) {
    baseClass = "text-[28px] md:text-[40px] text-[#0B0B0D] font-bold leading-[1.3] tracking-tight max-w-[800px]";
  }
  if (isQuestion) {
    baseClass = "text-[36px] md:text-[56px] lg:text-[64px] text-[#F26522] font-extrabold leading-[1.1] tracking-tight max-w-[900px]";
  }

  if (isQuestion) {
    return (
      <div className="pt-[15vh] md:pt-[25vh]">
        <motion.div ref={ref} style={{ opacity, y }} className={\`pb-20 md:pb-32 \${baseClass}\`}>
          {children}
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div ref={ref} style={{ opacity, y }} className={\`py-12 md:py-20 \${baseClass}\`}>
      {children}
    </motion.div>
  );
};

const ClimaxText = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "start 50%", "start 10%", "start -20%"]
  });
  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], [0, 1, 1, 0.2]);
  const y = useTransform(scrollYProgress, [0, 0.4], [50, 0]);
  
  return (
    <div className="pt-[25vh] md:pt-[35vh]">
      <motion.div ref={ref} style={{ opacity, y }} className="pb-[20vh] text-[44px] md:text-[72px] lg:text-[96px] text-[#F26522] font-extrabold leading-[1.02] tracking-tight max-w-[1100px]">
        {children}
      </motion.div>
    </div>
  );
};

const Outro = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "start 55%"]
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [40, 0]);

  return (
    <motion.div ref={ref} style={{ opacity, y }} className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6 max-w-4xl mx-auto pb-[20vh]">
      <h2 className="text-[40px] md:text-[64px] font-extrabold text-[#0B0B0D] tracking-tight mb-6 leading-[1.1]">
        Renting should be built on trust.
      </h2>
      <p className="text-[20px] md:text-[28px] text-[#0B0B0D]/60 font-medium mb-16">
        From the first conversation to the next home.
      </p>
      <button className="bg-[#F26522] text-[#FFFFFF] text-[18px] font-semibold px-[48px] py-[20px] rounded-[100px] shadow-[0_8px_24px_rgba(242,101,34,0.25)] hover:bg-[#E55A1B] hover:shadow-[0_12px_32px_rgba(242,101,34,0.4)] hover:-translate-y-[2px] active:translate-y-[1px] active:shadow-[0_4px_12px_rgba(242,101,34,0.3)] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F26522] focus:ring-offset-[#FFF5EB]">
        Join the Waitlist
      </button>
    </motion.div>
  );
};

export default TrustSection;
`;

fs.writeFileSync('src/TrustSection.tsx', content);
