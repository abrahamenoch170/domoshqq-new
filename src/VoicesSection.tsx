import React from 'react';
import { motion } from 'motion/react';

export const VoicesSection = () => {
  return (
    <section className="bg-[#FFF5EB] w-full flex flex-col items-center">
      <Voice
        label="Tenant"
        largeText="I can find a place. What I can't always find is someone I can trust."
        smallText="Now the people, payments, and agreements behind a rental can leave a record."
      />
      <Divider />
      <Voice
        label="Landlord"
        largeText="I’m handing over my property based on a story I hope is true."
        smallText="Now a tenant can arrive with a rental history you can see, not just a promise you have to take."
      />
      <Divider />
      <Voice
        label="Agent"
        largeText="Every deal starts from zero, even when I’ve spent years building trust."
        smallText="Now your work, your reputation, and the relationships you build can leave a record that carries forward."
      />
      
      <Outro />
    </section>
  );
};

const Voice = ({ label, largeText, smallText }: { label: string, largeText: string, smallText: string }) => {
  return (
    <div className="min-h-[100svh] h-auto w-full flex flex-col items-center justify-center px-6 md:px-12 py-24">
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8 }}
        className="text-[12px] md:text-[14px] font-medium text-[#1A1A1A] uppercase tracking-[0.2em] mb-8 md:mb-12"
      >
        {label}
      </motion.span>
      
      <motion.h2 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="text-[clamp(32px,8vw,88px)] md:text-[clamp(42px,5vw,88px)] font-bold text-[#1A1A1A] text-center leading-[1.1] tracking-tight w-full max-w-[1200px] mb-12"
      >
        {largeText}
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        className="text-[15px] md:text-[16px] font-normal text-[#1A1A1A] text-center max-w-[520px] leading-[1.6]"
      >
        {smallText}
      </motion.p>
    </div>
  );
};

const Divider = () => {
  return (
    <div className="w-full flex justify-center items-center h-[1px]">
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-[200px] h-[1px] bg-[#F26522] origin-center"
      />
    </div>
  );
};

const Outro = () => {
  return (
    <div className="h-[80svh] w-full flex flex-col items-center justify-center px-6">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-[18px] md:text-[22px] font-medium text-[#1A1A1A] text-center mb-12"
      >
        Three people. One rental relationship. Less left to chance.
      </motion.p>
      
      <motion.button
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-[#F26522] text-[16px] md:text-[18px] font-semibold hover:text-[#1A1A1A] transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F26522] focus-visible:ring-offset-4 focus-visible:ring-offset-[#FFF5EB] rounded-sm py-2 px-4"
      >
        Join the Waitlist
      </motion.button>
    </div>
  );
};

export default VoicesSection;
