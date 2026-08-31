import { Header } from "./Header";
import { Footer } from "./Footer";
import { BrowserRouter, Routes, Route, useNavigate, Navigate } from "react-router-dom";
import { WaitlistPage } from "./WaitlistPage";
import { PartnerPage } from "./PartnerPage";
import { PrivacyPage } from "./PrivacyPage";
import { TermsPage } from "./TermsPage";
import { SharePage } from "./SharePage";
import { NotFoundPage } from "./NotFoundPage";
import { SEO } from "./SEO";
import { useState, useEffect, useRef } from 'react';
import type { UIEvent } from 'react';
import { Bars3Icon, ArrowRightIcon, ArrowDownIcon } from '@heroicons/react/24/outline';
import { TrendingUp } from 'lucide-react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { SolutionSection } from './SolutionSection';
import { TrustSection } from './TrustSection';
import { VoicesSection } from './VoicesSection';
import { FaqSection } from './FaqSection';

// Precise path for the African continent
import { AFRICA_PATH } from "./assets";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <main className="relative pt-[24px] md:pt-[64px] pb-8 md:pb-16 px-6 flex flex-col items-center justify-center text-center animate-fade-in flex-1">
      {/* Centered Map Visual */}
      <div className="relative w-[240px] sm:w-[320px] md:w-[400px] lg:w-[480px] aspect-square flex items-center justify-center mb-2 md:mb-6">
        <div className="absolute inset-0">
          <svg viewBox="0 -10 400 420" className="w-full h-full drop-shadow-sm">
            <path
              d={AFRICA_PATH}
              fill="rgba(255, 232, 214, 0.7)"
              stroke="#F26522"
              strokeWidth="1.5"
              strokeOpacity="0.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="hover:fill-[#F26522]/20 transition-colors duration-500"
            />
          </svg>
        </div>
      </div>

      {/* Typography */}
      <div className="relative z-30 max-w-[640px] mx-auto">
        <h1 className="text-[32px] sm:text-[36px] md:text-[48px] lg:text-[56px] font-bold text-[#1A1A1A] leading-[1.1] tracking-tight">
          RENTING IN AFRICA,<br />
          WITHOUT THE <span className="text-[#F26522]">ANXIETY.</span>
        </h1>
        
        <p className="mt-3 md:mt-5 text-[15px] sm:text-[16px] md:text-[18px] text-[#6B6B6B] leading-[1.6] max-w-[540px] mx-auto">
          Every year, thousands of people across the continent lose money, time, and trust to a system built on handshakes and hope. We're building the infrastructure that makes renting safe — for everyone.
        </p>

        {/* CTAs */}
        <div className="mt-6 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <button onClick={() => navigate("/waitlist")} className="group w-full sm:w-auto flex items-center justify-center gap-2 bg-[#F26522] text-white text-[16px] font-semibold px-[36px] py-[16px] rounded-[100px] shadow-[0_8px_24px_rgba(242,101,34,0.25)] hover:bg-[#E55A1B] hover:shadow-[0_12px_32px_rgba(242,101,34,0.4)] hover:-translate-y-[2px] active:translate-y-[1px] active:shadow-[0_4px_12px_rgba(242,101,34,0.3)] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F26522] focus:ring-offset-[#FFF8F0]">
            Join Waitlist
            <ArrowRightIcon className="w-[18px] h-[18px] transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2.5} />
          </button>
          
          <button onClick={() => document.getElementById("solution")?.scrollIntoView({ behavior: "smooth" })} className="group w-full sm:w-auto flex items-center justify-center gap-2 bg-transparent border-[1.5px] border-[#1A1A1A]/80 text-[#1A1A1A] text-[16px] font-semibold px-[36px] py-[16px] rounded-[100px] shadow-[0_2px_8px_rgba(0,0,0,0.0)] hover:bg-[#1A1A1A]/5 hover:border-[#1A1A1A] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:-translate-y-[2px] active:translate-y-[1px] active:shadow-none transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1A1A1A] focus:ring-offset-[#FFF8F0]">
            See how it works
            <ArrowDownIcon className="w-[18px] h-[18px] transition-transform duration-300 group-hover:translate-y-1" strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </main>
  );
}


interface StoryCardProps {
  align: 'left' | 'right';
  statHighlight: string;
  statText: string;
  title: string;
  text: string;
  name: string;
  role: string;
  image: string;
  index: number;
}

const NoiseOverlay = () => (
  <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.08] mix-blend-overlay z-0" xmlns="http://www.w3.org/2000/svg">
    <filter id="noiseFilterCard">
      <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" stitchTiles="stitch" />
    </filter>
    <rect width="100%" height="100%" filter="url(#noiseFilterCard)" />
  </svg>
);

const StoryCard = ({ align, statHighlight, statText, title, text, name, role, image, index }: StoryCardProps) => {
  const isRight = align === 'right';

  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({
          opacity: 1,
          y: 0,
          transition: { delay: i * 0.15, duration: 0.6, ease: [0.32, 0.72, 0, 1] }
        })
      }}
      className={`flex flex-col gap-2 w-full ${isRight ? 'items-end' : 'items-start'}`}
    >
      {/* Stat Label */}
      <div className="flex items-center gap-1.5 text-white/90 text-[13px] md:text-[14px]">
        <TrendingUp className="w-[18px] h-[18px] text-white shrink-0" strokeWidth={2.5} />
        <span><strong className="text-white font-bold">{statHighlight}</strong> {statText}</span>
      </div>

      {/* Chat Bubble */}
      <div className="bg-[#1A1A1A] text-white p-6 md:p-8 rounded-[24px] max-w-[340px] md:max-w-[420px] shadow-[0_12px_40px_rgba(0,0,0,0.15)] relative overflow-hidden">
        <NoiseOverlay />
        <div className="relative z-10 flex flex-col gap-3">
          <span className="font-black text-[24px] md:text-[28px] leading-[1.4] text-[#FFF5EB] tracking-tight">{title}</span>
          <span className="text-[18px] text-[#FFF5EB]/80 leading-relaxed font-medium">{text}</span>
        </div>
      </div>

      {/* Avatar and Name */}
      <div className={`flex flex-col items-center mt-1 ${isRight ? 'mr-4 md:mr-6' : 'ml-4 md:ml-6'}`}>
        <img src={image} alt={name} className="w-10 h-10 rounded-full object-cover" />
        <div className="text-center mt-1 leading-[1.2]">
          <div className="text-[12px] font-bold text-white">{name},</div>
          <div className="text-[12px] font-medium text-white/80">{role}</div>
        </div>
      </div>
    </motion.div>
  );
};

const BetrayalSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"]
  });
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <section ref={ref} className="relative w-full bg-[#F26522] pt-[40px] pb-[80px] flex flex-col items-center">
      <div className="w-full max-w-[640px] mx-auto px-6 flex flex-col gap-10">

        {/* The Problem Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
          className="flex flex-col items-center text-center mb-4 md:mb-6 max-w-[480px] mx-auto gap-4"
        >
          <span className="text-white/80 text-[15px] font-medium">The Problem</span>
          <h2 className="text-[26px] md:text-[32px] font-bold text-white leading-[1.3] tracking-tight">
            Renting across Africa is broken. These systemic issues affect tenants, landlords, and agents every day.
          </h2>
        </motion.div>

        <StoryCard
          align="left"
          statHighlight="Unknown"
          statText="hidden debt transferred yearly"
          title="Hidden Liabilities;"
          text="Tenants inherit unexpected liabilities like outstanding electricity bills after signing and moving in."
          name="Mazi"
          role="Landlord"
          image="https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?auto=format&fit=crop&w=150&q=80"
          index={0}
        />

        <StoryCard
          align="right"
          statHighlight="40%+"
          statText="of rentals involve deception"
          title="Rental Fraud;"
          text="Money changes hands before anyone can confirm who actually owns, manages, or has the right to let the property."
          name="Kofi"
          role="Tenant"
          image="https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&w=150&q=80"
          index={1}
        />

        <StoryCard
          align="left"
          statHighlight="80%+"
          statText="of African rentals lack written agreements"
          title="Poor Documentation;"
          text="Agreements live in WhatsApp chats and paper receipts, mostly difficult to produce as soon as disputes occurs."
          name="David"
          role="Landlord"
          image="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=150&q=80"
          index={2}
        />

        <StoryCard
          align="right"
          statHighlight="75%+"
          statText="of tenants fall victim yearly"
          title="Illegal & Unfair clauses;"
          text="Leases are drafted once, signed under pressure and rarely reviewed by anyone besides who wrote them."
          name="Zuri"
          role="Tenant"
          image="https://images.unsplash.com/photo-1531123897727-8f129e1b42ce?auto=format&fit=crop&w=150&q=80"
          index={3}
        />

        <StoryCard
          align="left"
          statHighlight="70%+"
          statText="of disputes involve agents"
          title="Fake Agents;"
          text="Anyone can claim to be an agent. Few can prove it and tenants have no shared registry to check against."
          name="Hassan"
          role="Agent"
          image="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=150&q=80"
          index={4}
        />

      </div>
      
      {/* Scroll Progress Bar */}
      <div className="sticky bottom-0 left-0 w-full h-1.5 md:h-2 bg-[#1A1A1A]/10 mt-16 z-50">
        <motion.div 
          className="h-full bg-[#1A1A1A] origin-left" 
          style={{ scaleX }} 
        />
      </div>
    </section>
  );
};

const LandingPage = () => {
  return (
    <>
      <SEO title="MyDomos Africa — Rental Trust Infrastructure for Africa" description="MyDomos Africa is building neutral trust infrastructure for renting across Africa — helping tenants, landlords and agents navigate rental relationships with greater clarity and confidence." path="/" />
      <div className="w-full bg-[#FFF5EB] selection:bg-[#F26522]/20 selection:text-[#1A1A1A] min-h-screen flex flex-col">
        <SEO 
          title="MyDomos Africa — Rental Trust Infrastructure for Africa"
          description="MyDomos Africa is building neutral trust infrastructure for renting across Africa — helping tenants, landlords and agents navigate rental relationships with greater clarity and confidence."
          path="/"
        />
        <Header />
        <div className="w-full bg-[#F26522] flex flex-col shrink-0">
          <div className="w-full bg-[#FFF8F0] min-h-[calc(100vh-40px)] md:min-h-[calc(100vh-60px)] rounded-b-[40px] md:rounded-b-[60px] shadow-[0_10px_40px_rgba(242,101,34,0.15)] relative flex flex-col shrink-0 z-10">
            <Hero />
          </div>
          <BetrayalSection />
        </div>
        <SolutionSection />
        <TrustSection />
        <VoicesSection />
        <FaqSection />
        <Footer />
      </div>
    </>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/waitlist" element={<WaitlistPage />} />
        <Route path="/partner" element={<PartnerPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/share-rental-experience" element={<SharePage />} />
        <Route path="/share" element={<Navigate to="/share-rental-experience" replace />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
