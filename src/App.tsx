import { Header } from "./Header";
import { Footer } from "./Footer";
import { BrowserRouter, Routes, Route, useNavigate, Navigate } from "react-router-dom";
import { WaitlistPage } from "./WaitlistPage";
import { PartnerPage } from "./PartnerPage";
import { PrivacyPage } from "./PrivacyPage";
import { TermsPage } from "./TermsPage";
import { SharePage } from "./SharePage";
import { AboutPage } from "./AboutPage";
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
    <section className="w-full flex-1 flex items-center justify-center px-5 sm:px-8 md:px-10 lg:px-12 py-10 sm:py-14 md:py-16 relative z-10">
      <div className="w-full max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-12 items-center gap-8 lg:gap-14">
        
        {/* Left Column (Desktop: 7 cols) */}
        <div className="order-2 md:order-1 md:col-span-7 flex flex-col items-center md:items-start text-center md:text-left justify-center">
          <h1 
            className="font-extrabold text-[#1A1A1A] leading-[1.08] tracking-tight text-[32px] sm:text-[40px] md:text-[46px] lg:text-[54px] xl:text-[60px]"
          >
            Renting Shouldn’t Begin With <br className="hidden sm:block" /><span className="text-[#F26522]">Uncertainty</span>
          </h1>
          
          <p className="mt-5 sm:mt-6 text-[16px] sm:text-[17px] md:text-[18px] text-[#1A1A1A]/75 leading-[1.6] max-w-[540px]">
            Every year, thousands of people across the continent lose money, time, and trust to a system built on handshakes and hope. We're building the infrastructure that makes renting safe — for everyone.
          </p>

          <div className="flex flex-col sm:flex-row gap-3.5 sm:gap-4 w-full sm:w-auto mt-7 sm:mt-8">
            <button 
              onClick={() => navigate("/waitlist")} 
              className="group w-full sm:w-auto flex items-center justify-center gap-2.5 bg-[#F26522] text-white text-[15px] sm:text-[16px] font-semibold px-8 py-3.5 rounded-[100px] shadow-[0_8px_24px_rgba(242,101,34,0.25)] hover:bg-[#D1551A] hover:shadow-[0_12px_32px_rgba(242,101,34,0.35)] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#F26522] focus:ring-offset-2 focus:ring-offset-[#FFF8F0]"
            >
              Join Waitlist
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                <path d="M22 2 11 13"/>
                <path d="m22 2-7 20-4-9-9-4Z"/>
              </svg>
            </button>
            
            <button 
              onClick={() => document.getElementById("solution")?.scrollIntoView({ behavior: "smooth" })} 
              className="group w-full sm:w-auto flex items-center justify-center gap-2 bg-transparent border-[1.5px] border-[#1A1A1A]/30 hover:border-[#1A1A1A] text-[#1A1A1A] text-[15px] sm:text-[16px] font-semibold px-8 py-3.5 rounded-[100px] hover:bg-[#1A1A1A]/5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#1A1A1A] focus:ring-offset-2 focus:ring-offset-[#FFF8F0]"
            >
              Explore the Future of Renting
            </button>
          </div>
        </div>

        {/* Right Column (Desktop: 5 cols) - Prominent Africa Map with Nigeria Beacon */}
        <div className="order-1 md:order-2 md:col-span-5 relative flex justify-center md:justify-end items-center w-full">
          <div className="w-full max-w-[320px] sm:max-w-[380px] md:max-w-[440px] lg:max-w-[480px] aspect-[400/420] relative flex items-center justify-center">
            <svg viewBox="0 -10 400 420" className="w-full h-full drop-shadow-md">
              <path
                d={AFRICA_PATH}
                fill="rgba(255, 232, 214, 0.75)"
                stroke="#F26522"
                strokeWidth="1.75"
                strokeOpacity="0.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="hover:fill-[#F26522]/20 transition-colors duration-500"
              />
            </svg>
          </div>
        </div>

      </div>
    </section>
  );
};


interface StoryCardProps {
  align?: 'left' | 'right';
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

const StoryCard = ({ align = 'left', statHighlight, statText, title, text, name, role, image, index }: StoryCardProps) => {
  const isRight = align === 'right';

  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: { opacity: 0, y: 25 },
        visible: (i: number) => ({
          opacity: 1,
          y: 0,
          transition: { delay: i * 0.12, duration: 0.5, ease: [0.32, 0.72, 0, 1] }
        })
      }}
      className={`flex flex-col gap-2 w-full ${isRight ? 'items-end md:items-end' : 'items-start md:items-start'}`}
    >
      {/* Avatar and Name */}
      <div className={`flex items-center gap-2.5 ${isRight ? 'flex-row-reverse text-right mr-2' : 'flex-row text-left ml-2'}`}>
        <img 
          src={image} 
          alt={name} 
          className="w-[46px] h-[46px] md:w-[52px] md:h-[52px] rounded-full object-cover shadow-sm border-[2px] border-white/20 shrink-0" 
        />
        <div className="leading-[1.2]">
          <div className="text-[13px] md:text-[14px] font-bold text-white">{name},</div>
          <div className="text-[11px] md:text-[12px] font-medium text-white/80">{role}</div>
        </div>
      </div>

      {/* Stat Label */}
      <div className={`flex items-center gap-1.5 text-white/85 text-[12px] md:text-[13px] ${isRight ? 'flex-row-reverse text-right' : 'flex-row text-left'}`}>
        <TrendingUp className="w-[13px] h-[13px] text-white shrink-0" strokeWidth={2.5} />
        <span><strong className="text-white font-bold">{statHighlight}</strong> {statText}</span>
      </div>

      {/* Chat Bubble */}
      <div className={`bg-[#1A1A1A] text-white p-4 sm:p-5 rounded-[20px] max-w-[320px] sm:max-w-[360px] md:max-w-[380px] lg:max-w-[420px] shadow-[0_8px_24px_rgba(0,0,0,0.16)] relative overflow-hidden ${isRight ? 'rounded-tr-sm' : 'rounded-tl-sm'}`}>
        <div className="relative z-10 text-[13px] sm:text-[13.5px] md:text-[14px] leading-[1.55]">
          <strong className="font-bold text-white">{title}</strong> <span className="text-white/85">{text}</span>
        </div>
      </div>
    </motion.div>
  );
};

const BetrayalSection = () => {
  return (
    <section id="problem" className="relative w-full bg-[#F26522] py-14 sm:py-16 md:py-20 lg:py-24 px-5 sm:px-8 md:px-12 flex flex-col items-center overflow-hidden">
      <div className="w-full max-w-[1100px] mx-auto flex flex-col gap-10 md:gap-14 relative">

        {/* Mobile view: Stacked flow. Desktop view: 2-column balanced grid */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-x-12 lg:gap-x-16 md:gap-y-12 items-start">
          {/* Top Row Pair */}
          <div className="w-full flex justify-start">
            <StoryCard
              align="left"
              statHighlight="Unknown" statText="hidden debt transferred yearly"
              title="Hidden Liabilities;"
              text="Tenants inherit unexpected liabilities like outstanding electricity bills after signing and moving in."
              name="Mr. Adeleke"
              role="Property Owner"
              image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
              index={0}
            />
          </div>

          <div className="w-full flex justify-end md:justify-end">
            <StoryCard
              align="right"
              statHighlight="40%+" statText="of rentals involve deception"
              title="Rental Fraud;"
              text="Money changes hands before anyone can confirm who actually owns, manages, or has the right to let the property."
              name="Ngozi"
              role="Tenant"
              image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
              index={1}
            />
          </div>

          {/* Center Banner: The Problem Section spanning both columns on desktop */}
          <div className="w-full md:col-span-2 my-2 sm:my-4 md:my-6 flex flex-col items-center text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-3">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-2.5 bg-white/10 backdrop-blur-xs px-3.5 py-1.5 rounded-full border border-white/20"
              >
                <img 
                  src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?auto=format&fit=crop&w=200&q=80" 
                  alt="Segun" 
                  className="w-[32px] h-[32px] sm:w-[36px] sm:h-[36px] rounded-full object-cover shadow-sm border border-white/40" 
                />
                <div className="text-left leading-[1.1]">
                  <span className="text-[13px] font-bold text-white block">Segun,</span>
                  <span className="text-[11px] font-medium text-white/80">Tenant</span>
                </div>
              </motion.div>
              <span className="text-white/85 text-[14px] md:text-[15px] font-semibold tracking-wider uppercase">
                The Problem
              </span>
            </div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
              className="text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px] font-bold text-white leading-[1.25] tracking-tight max-w-[660px] mx-auto"
            >
              Renting across Africa is broken. These systemic issues affect tenants, landlords, and agents every day.
            </motion.h2>
          </div>

          {/* Lower Row Pair */}
          <div className="w-full flex justify-start">
            <StoryCard
              align="left"
              statHighlight="80%+" statText="of African rentals lack written"
              title="Poor Documentation;"
              text="Agreements live in WhatsApp chats and paper receipts, mostly difficult to produce as soon as disputes occurs."
              name="Mrs. Okafor"
              role="Landlord"
              image="https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&w=200&q=80"
              index={2}
            />
          </div>

          <div className="w-full flex justify-end md:justify-end">
            <StoryCard
              align="right"
              statHighlight="75%+" statText="of tenants fall victim yearly"
              title="Illegal & Unfair clauses;"
              text="Leases are drafted once, signed under pressure and rarely reviewed by anyone besides who wrote them."
              name="Chinedu"
              role="Tenant"
              image="https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&w=200&q=80"
              index={3}
            />
          </div>

          {/* Final Agent Card: Aligned naturally */}
          <div className="w-full md:col-span-2 flex justify-start md:justify-center">
            <div className="w-full md:max-w-[440px]">
              <StoryCard
                align="left"
                statHighlight="70%+" statText="of disputes involve agents"
                title="Fake Agents;"
                text="Anyone can claim to be an agent. Few can prove it and tenants have no shared registry to check against."
                name="Bayo"
                role="Property Agent"
                image="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80"
                index={4}
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

const LandingPage = () => {
  return (
    <>
      <SEO title="MyDomos Africa — Rental Trust Infrastructure for Africa" description="MyDomos Africa is building neutral trust infrastructure for renting across Africa — helping tenants, landlords and agents navigate rental relationships with greater clarity and confidence." path="/" />
      <div className="w-full bg-[#FFF5EB] selection:bg-[#F26522]/20 selection:text-[#1A1A1A] min-h-screen flex flex-col">
        <Header />
        <div className="w-full bg-[#F26522] flex flex-col shrink-0">
          <div className="w-full bg-[#FFF8F0] min-h-[580px] md:min-h-[660px] rounded-b-[40px] md:rounded-b-[56px] shadow-[0_10px_40px_rgba(242,101,34,0.15)] relative flex flex-col shrink-0 z-10 pt-[64px] md:pt-[72px]">
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
        <Route path="/about" element={<AboutPage />} />
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
