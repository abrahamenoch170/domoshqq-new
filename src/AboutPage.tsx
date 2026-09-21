import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SEO } from './SEO';
import { Header } from './Header';
import { Footer } from './Footer';
import { AFRICA_PATH } from './assets';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { Layers, Building2, Landmark, Compass, Users } from 'lucide-react';

export const AboutPage = () => {
  const navigate = useNavigate();

  const disciplines = [
    {
      id: '01',
      title: 'Product & Systems Engineering',
      focus: 'Architecting durable record infrastructure, verifiable event timelines, and neutral coordination systems.',
      icon: Layers,
    },
    {
      id: '02',
      title: 'Real Estate & Rental Knowledge',
      focus: 'Grounded in the day-to-day realities, tenancy customs, lease practices, and friction points across African rental markets.',
      icon: Building2,
    },
    {
      id: '03',
      title: 'Financial Technology & Payments',
      focus: 'Understanding payment integrity, rent reconciliations, caution deposit handling, and transparent financial records.',
      icon: Landmark,
    },
    {
      id: '04',
      title: 'Operations & Coordination',
      focus: 'Managing multi-party workflows across property owners, tenants, caretakers, and property professionals.',
      icon: Compass,
    },
    {
      id: '05',
      title: 'Design & Experience Architecture',
      focus: 'Crafting legible, accessible, and high-trust interfaces that clarify agreements rather than obscure them.',
      icon: Users,
    },
  ];

  const beliefs = [
    {
      number: '01',
      title: 'Trust should be built, not simply assumed.',
      description: 'A rental shouldn’t rely exclusively on hopeful stories or blind assumptions. Reliable relationships are supported by verifiable records.',
    },
    {
      number: '02',
      title: 'Important rental moments should not disappear.',
      description: 'Payments made, agreements honored, and responsibilities handled throughout a tenancy deserve a persistent place to live.',
    },
    {
      number: '03',
      title: 'People need clearer information before committing.',
      description: 'Tenants, owners, and agents all benefit from knowing who they are dealing with before signing agreements or handing over keys.',
    },
    {
      number: '04',
      title: 'A rental history should have continuity.',
      description: 'Leaving one home or completing one lease shouldn’t reset a good reputation to zero. Accumulated trust should carry forward.',
    },
  ];

  return (
    <div className="w-full bg-[#FFF5EB] selection:bg-[#F26522]/20 selection:text-[#1A1A1A] min-h-screen flex flex-col font-sans">
      <SEO
        title="About DomosHQ & MyDomos Africa — Rental Trust Infrastructure"
        description="DomosHQ is the company building MyDomos Africa — creating neutral trust infrastructure for tenants, landlords and agents across Africa."
        path="/about"
      />

      <Header />

      <main className="flex-1 w-full flex flex-col">
        {/* HERO SECTION — Matches the Main Page Hero Container & Map */}
        <div className="w-full bg-[#F26522] flex flex-col shrink-0">
          <div className="w-full bg-[#FFF8F0] min-h-[560px] md:min-h-[640px] rounded-b-[40px] md:rounded-b-[56px] shadow-[0_10px_40px_rgba(242,101,34,0.15)] relative flex flex-col shrink-0 z-10 pt-[64px] md:pt-[72px]">
            <section className="w-full flex-1 flex items-center justify-center px-5 sm:px-8 md:px-10 lg:px-12 py-10 sm:py-14 md:py-16 relative z-10">
              <div className="w-full max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-12 items-center gap-8 lg:gap-14">
                
                {/* Left Column (Desktop: 7 cols) */}
                <div className="order-2 md:order-1 md:col-span-7 flex flex-col items-center md:items-start text-center md:text-left justify-center">
                  <span className="text-[13px] sm:text-[14px] font-semibold text-[#F26522] uppercase tracking-[0.2em] mb-4 inline-block">
                    ABOUT DOMOSHQ
                  </span>

                  <h1 className="font-extrabold text-[#1A1A1A] leading-[1.08] tracking-tight text-[32px] sm:text-[40px] md:text-[46px] lg:text-[54px] xl:text-[60px]">
                    The Company Behind <br className="hidden sm:block" />
                    <span className="text-[#F26522]">MyDomos Africa</span>
                  </h1>

                  <p className="mt-5 sm:mt-6 text-[16px] sm:text-[17px] md:text-[18px] text-[#1A1A1A]/75 leading-[1.6] max-w-[560px]">
                    DomosHQ is the technology and systems company building MyDomos Africa — creating neutral trust infrastructure for tenants, property owners, and agents across African cities.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3.5 sm:gap-4 w-full sm:w-auto mt-7 sm:mt-8">
                    <button
                      onClick={() => navigate('/waitlist')}
                      className="group w-full sm:w-auto flex items-center justify-center gap-2.5 bg-[#F26522] text-white text-[15px] sm:text-[16px] font-semibold px-8 py-3.5 rounded-[100px] shadow-[0_8px_24px_rgba(242,101,34,0.25)] hover:bg-[#D1551A] hover:shadow-[0_12px_32px_rgba(242,101,34,0.35)] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#F26522] focus:ring-offset-2 focus:ring-offset-[#FFF8F0] cursor-pointer"
                    >
                      Join Waitlist
                      <ArrowRightIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>

                    <button
                      onClick={() => navigate('/partner')}
                      className="group w-full sm:w-auto flex items-center justify-center gap-2 bg-transparent border-[1.5px] border-[#1A1A1A]/30 hover:border-[#1A1A1A] text-[#1A1A1A] text-[15px] sm:text-[16px] font-semibold px-8 py-3.5 rounded-[100px] hover:bg-[#1A1A1A]/5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#1A1A1A] focus:ring-offset-2 focus:ring-offset-[#FFF8F0] cursor-pointer"
                    >
                      Partner With Us
                    </button>
                  </div>
                </div>

                {/* Right Column (Desktop: 5 cols) — Exact Africa Map from Main Page */}
                <div className="order-1 md:order-2 md:col-span-5 relative flex justify-center md:justify-end items-center w-full">
                  <div className="w-full max-w-[320px] sm:max-w-[380px] md:max-w-[440px] lg:max-w-[480px] aspect-[400/420] relative flex items-center justify-center">
                    <svg viewBox="0 -10 400 420" className="w-full h-full drop-shadow-md" aria-label="Map of the African continent">
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
          </div>
        </div>

        {/* SECTION: WHO WE ARE (DomosHQ & MyDomos Africa) */}
        <section className="w-full bg-[#FFF5EB] py-20 sm:py-24 md:py-28 px-5 sm:px-8 md:px-12 relative z-10 border-b border-[#1A1A1A]/10">
          <div className="max-w-[1200px] mx-auto flex flex-col">
            
            <div className="max-w-[840px] mb-14 sm:mb-18">
              <span className="text-[13px] sm:text-[14px] font-semibold text-[#F26522] uppercase tracking-[0.2em] mb-4 inline-block">
                THE COMPANY & THE PRODUCT
              </span>
              <h2 className="text-[32px] sm:text-[44px] md:text-[54px] font-extrabold text-[#1A1A1A] leading-[1.1] tracking-tight mb-6">
                Why DomosHQ is building MyDomos.
              </h2>
              <p className="text-[18px] sm:text-[20px] md:text-[22px] text-[#1A1A1A]/75 font-normal leading-[1.5] max-w-[700px]">
                We build systems around real-world environments where trust, coordination, and continuity are broken.
              </p>
            </div>

            {/* Side-by-Side Brand Architecture Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
              
              {/* Card 1: DomosHQ */}
              <div className="bg-white border border-[#1A1A1A]/10 rounded-2xl p-7 sm:p-9 lg:p-10 flex flex-col justify-between transition-all duration-300 hover:border-[#F26522]/40 hover:shadow-[0_12px_30px_rgba(0,0,0,0.04)]">
                <div>
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#1A1A1A]/10">
                    <span className="text-[12px] sm:text-[13px] font-mono font-bold tracking-[0.2em] text-[#1A1A1A]/50 uppercase">
                      THE COMPANY
                    </span>
                    <span className="text-[12px] font-mono text-[#F26522] font-semibold">
                      Parent Entity
                    </span>
                  </div>

                  <h3 className="text-[26px] sm:text-[30px] font-extrabold text-[#1A1A1A] mb-4">
                    DomosHQ Limited
                  </h3>

                  <p className="text-[16px] text-[#1A1A1A]/75 leading-[1.65]">
                    An independent technology and systems company focused on structural coordination problems. We study high-stakes environments where people must rely on one another, but lack neutral records, verified histories, and dependable dispute-prevention tools.
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#1A1A1A]/5 text-[13px] font-mono text-[#1A1A1A]/60">
                  Focus: Systems architecture & trust records
                </div>
              </div>

              {/* Card 2: MyDomos Africa */}
              <div className="bg-white border-2 border-[#F26522] rounded-2xl p-7 sm:p-9 lg:p-10 flex flex-col justify-between shadow-xs transition-all duration-300 hover:shadow-[0_12px_30px_rgba(242,101,34,0.08)]">
                <div>
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#F26522]/20">
                    <span className="text-[12px] sm:text-[13px] font-mono font-bold tracking-[0.2em] text-[#F26522] uppercase">
                      THE FLAGSHIP PRODUCT
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#FFF5EB] border border-[#F26522]/30 text-[#F26522] text-[11px] font-mono font-bold">
                      Active
                    </span>
                  </div>

                  <h3 className="text-[26px] sm:text-[30px] font-extrabold text-[#1A1A1A] mb-4">
                    MyDomos Africa
                  </h3>

                  <p className="text-[16px] text-[#1A1A1A]/75 leading-[1.65]">
                    Applies DomosHQ’s systems thinking directly to the rental sector: creating neutral trust infrastructure, verifiable tenancy records, and relationship continuity for tenants, landlords, and agents across African urban centers.
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#F26522]/20 text-[13px] font-mono text-[#F26522] font-semibold">
                  Focus: Rental relationship infrastructure
                </div>
              </div>

            </div>

            {/* Grounded Reality: What MyDomos is and is not */}
            <div className="bg-white border border-[#1A1A1A]/10 rounded-2xl p-7 sm:p-9 lg:p-10">
              <h3 className="text-[20px] sm:text-[22px] font-bold text-[#1A1A1A] mb-3">
                What MyDomos is — and what it is not.
              </h3>
              <p className="text-[15px] sm:text-[16px] text-[#1A1A1A]/75 leading-[1.6] mb-6 max-w-[800px]">
                Most existing real estate platforms focus purely on the moment of search: browsing pictures, listing units, or facilitating an initial introduction. MyDomos is built around everything that happens next.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-[#1A1A1A]/10">
                <div className="flex flex-col gap-2">
                  <span className="text-[12px] font-mono font-bold text-[#F26522] uppercase tracking-wider">
                    MYDOMOS IS
                  </span>
                  <p className="text-[14px] sm:text-[15px] text-[#1A1A1A]/80 leading-[1.6]">
                    A neutral trust ledger, documented move-in conditions, verifiable tenancy histories, and clear dispute-prevention infrastructure for all parties.
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="text-[12px] font-mono font-bold text-[#1A1A1A]/50 uppercase tracking-wider">
                    MYDOMOS IS NOT
                  </span>
                  <p className="text-[14px] sm:text-[15px] text-[#1A1A1A]/70 leading-[1.6]">
                    Not a property classifieds portal, not a commission-seeking brokerage, and not a speculative landlord syndicate.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION: WHY MYDOMOS EXISTS (The Rental Reality) */}
        <section className="w-full bg-[#FFF5EB] py-20 sm:py-24 md:py-28 px-5 sm:px-8 md:px-12 relative z-10 border-b border-[#1A1A1A]/10">
          <div className="max-w-[1200px] mx-auto flex flex-col">
            
            <div className="max-w-[840px] mb-14 sm:mb-18">
              <span className="text-[13px] sm:text-[14px] font-semibold text-[#F26522] uppercase tracking-[0.2em] mb-4 inline-block">
                THE RENTAL REALITY
              </span>
              <h2 className="text-[32px] sm:text-[44px] md:text-[54px] font-extrabold text-[#1A1A1A] leading-[1.1] tracking-tight mb-6">
                Renting is a relationship, <br className="hidden sm:inline" />
                <span className="text-[#F26522]">not just a transaction.</span>
              </h2>
              <p className="text-[18px] sm:text-[20px] md:text-[22px] text-[#1A1A1A]/75 font-normal leading-[1.5] max-w-[700px]">
                Finding a flat takes days. Living in it takes months and years. Much of that relationship is held together by fragile chats, paper slips, and hopeful memory.
              </p>
            </div>

            {/* 3 Reality Cards — Styled like TrustSection */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              
              <div className="bg-white border border-[#1A1A1A]/10 rounded-2xl p-7 sm:p-8 lg:p-10 flex flex-col justify-between transition-all duration-300 hover:border-[#F26522]/40 hover:shadow-[0_12px_30px_rgba(0,0,0,0.04)]">
                <div>
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#1A1A1A]/10">
                    <span className="text-[12px] sm:text-[13px] font-mono font-bold tracking-[0.2em] text-[#F26522] uppercase">
                      PEOPLE
                    </span>
                    <span className="text-[12px] font-mono text-[#1A1A1A]/40 font-medium">01</span>
                  </div>
                  <h3 className="text-[20px] sm:text-[22px] font-bold text-[#1A1A1A] leading-[1.3] mb-4">
                    The people involved matter.
                  </h3>
                </div>
                <p className="text-[15px] sm:text-[16px] text-[#1A1A1A]/70 leading-[1.6] pt-4 mt-auto border-t border-[#1A1A1A]/5">
                  Tenants seeking home security. Property owners protecting life investments. Agents mediating daily friction. All three deserve an honest, balanced platform.
                </p>
              </div>

              <div className="bg-white border border-[#1A1A1A]/10 rounded-2xl p-7 sm:p-8 lg:p-10 flex flex-col justify-between transition-all duration-300 hover:border-[#F26522]/40 hover:shadow-[0_12px_30px_rgba(0,0,0,0.04)]">
                <div>
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#1A1A1A]/10">
                    <span className="text-[12px] sm:text-[13px] font-mono font-bold tracking-[0.2em] text-[#F26522] uppercase">
                      MONEY & AGREEMENTS
                    </span>
                    <span className="text-[12px] font-mono text-[#1A1A1A]/40 font-medium">02</span>
                  </div>
                  <h3 className="text-[20px] sm:text-[22px] font-bold text-[#1A1A1A] leading-[1.3] mb-4">
                    Important commitments need clarity.
                  </h3>
                </div>
                <p className="text-[15px] sm:text-[16px] text-[#1A1A1A]/70 leading-[1.6] pt-4 mt-auto border-t border-[#1A1A1A]/5">
                  Annual rent advances, security deposits, caution fees, and lease covenants. Every commitment deserves verifiable records and shared clarity.
                </p>
              </div>

              <div className="bg-white border border-[#1A1A1A]/10 rounded-2xl p-7 sm:p-8 lg:p-10 flex flex-col justify-between transition-all duration-300 hover:border-[#F26522]/40 hover:shadow-[0_12px_30px_rgba(0,0,0,0.04)]">
                <div>
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#1A1A1A]/10">
                    <span className="text-[12px] sm:text-[13px] font-mono font-bold tracking-[0.2em] text-[#F26522] uppercase">
                      HISTORY
                    </span>
                    <span className="text-[12px] font-mono text-[#1A1A1A]/40 font-medium">03</span>
                  </div>
                  <h3 className="text-[20px] sm:text-[22px] font-bold text-[#1A1A1A] leading-[1.3] mb-4">
                    Reputation should have continuity.
                  </h3>
                </div>
                <p className="text-[15px] sm:text-[16px] text-[#1A1A1A]/70 leading-[1.6] pt-4 mt-auto border-t border-[#1A1A1A]/5">
                  Completing a successful tenancy should not reset your credibility to zero. Accumulated rental reliability should travel with you to your next home.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* SECTION: THE DISCIPLINES (The Team) */}
        <section className="w-full bg-[#FFF5EB] py-20 sm:py-24 md:py-28 px-5 sm:px-8 md:px-12 relative z-10 border-b border-[#1A1A1A]/10">
          <div className="max-w-[1200px] mx-auto flex flex-col">
            
            <div className="max-w-[840px] mb-14 sm:mb-18">
              <span className="text-[13px] sm:text-[14px] font-semibold text-[#F26522] uppercase tracking-[0.2em] mb-4 inline-block">
                HOW WE BUILD
              </span>
              <h2 className="text-[32px] sm:text-[44px] md:text-[54px] font-extrabold text-[#1A1A1A] leading-[1.1] tracking-tight mb-6">
                Different disciplines. <br className="hidden sm:inline" />
                <span className="text-[#F26522]">One company. One mission.</span>
              </h2>
              <p className="text-[18px] sm:text-[20px] md:text-[22px] text-[#1A1A1A]/75 font-normal leading-[1.5] max-w-[700px]">
                Solving rental trust is not a superficial software exercise. It demands practical depth across engineering, African tenancy realities, financial flows, and multi-party coordination.
              </p>
            </div>

            {/* 5 Disciplines Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {disciplines.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.id}
                    className="bg-white border border-[#1A1A1A]/10 rounded-2xl p-7 sm:p-8 lg:p-9 flex flex-col justify-between transition-all duration-300 hover:border-[#F26522]/40 hover:shadow-[0_12px_30px_rgba(0,0,0,0.04)]"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#1A1A1A]/10">
                        <span className="text-[12px] sm:text-[13px] font-mono font-bold tracking-[0.2em] text-[#F26522] uppercase">
                          DISCIPLINE {item.id}
                        </span>
                        <IconComponent className="w-5 h-5 text-[#F26522]" strokeWidth={2} />
                      </div>

                      <h3 className="text-[19px] sm:text-[20px] font-bold text-[#1A1A1A] leading-[1.3] mb-3">
                        {item.title}
                      </h3>
                    </div>

                    <p className="text-[15px] text-[#1A1A1A]/70 leading-[1.6] pt-4 mt-auto border-t border-[#1A1A1A]/5">
                      {item.focus}
                    </p>
                  </div>
                );
              })}

              {/* 6th Tile: Unified Mission */}
              <div className="bg-[#FFF8F0] border-2 border-[#F26522] rounded-2xl p-7 sm:p-8 lg:p-9 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#F26522]/20">
                    <span className="text-[12px] sm:text-[13px] font-mono font-bold tracking-[0.2em] text-[#F26522] uppercase">
                      ONE PURPOSE
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#F26522]" />
                  </div>

                  <h3 className="text-[20px] sm:text-[22px] font-extrabold text-[#1A1A1A] leading-[1.3] mb-3">
                    United on African Rental Trust
                  </h3>
                </div>

                <p className="text-[15px] text-[#1A1A1A]/75 leading-[1.6] pt-4 mt-auto border-t border-[#F26522]/20 font-medium">
                  Engineers, property practitioners, and operations leads aligned to create Africa's most dependable rental infrastructure.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION: WHAT WE BELIEVE */}
        <section className="w-full bg-[#FFF5EB] py-20 sm:py-24 md:py-28 px-5 sm:px-8 md:px-12 relative z-10 border-b border-[#1A1A1A]/10">
          <div className="max-w-[1200px] mx-auto flex flex-col">
            
            <div className="max-w-[840px] mb-14 sm:mb-18">
              <span className="text-[13px] sm:text-[14px] font-semibold text-[#F26522] uppercase tracking-[0.2em] mb-4 inline-block">
                CORE PRINCIPLES
              </span>
              <h2 className="text-[32px] sm:text-[44px] md:text-[54px] font-extrabold text-[#1A1A1A] leading-[1.1] tracking-tight mb-6">
                What we believe.
              </h2>
              <p className="text-[18px] sm:text-[20px] md:text-[22px] text-[#1A1A1A]/75 font-normal leading-[1.5] max-w-[700px]">
                Our work is guided by simple standards for how rental relationships should operate.
              </p>
            </div>

            {/* 4 Belief Rows */}
            <div className="divide-y divide-[#1A1A1A]/10 border-y border-[#1A1A1A]/10">
              {beliefs.map((belief) => (
                <div
                  key={belief.number}
                  className="py-7 sm:py-8 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start"
                >
                  <div className="md:col-span-2 flex items-center gap-3">
                    <span className="text-[13px] font-mono font-bold text-[#F26522]">
                      PRINCIPLE {belief.number}
                    </span>
                  </div>
                  <div className="md:col-span-4">
                    <h3 className="text-[19px] sm:text-[21px] font-bold text-[#1A1A1A] leading-[1.3] tracking-tight">
                      {belief.title}
                    </h3>
                  </div>
                  <div className="md:col-span-6">
                    <p className="text-[15px] sm:text-[16px] text-[#1A1A1A]/75 leading-[1.65]">
                      {belief.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* SECTION: CLOSING CTA — Identical to VoicesSection Climax */}
        <section className="w-full bg-[#FFF5EB] py-20 sm:py-28 md:py-32 px-5 sm:px-8 md:px-12 relative z-10 flex flex-col items-center text-center">
          <div className="max-w-[840px] mx-auto flex flex-col items-center">
            
            <h2 className="text-[32px] sm:text-[44px] md:text-[54px] lg:text-[60px] font-extrabold text-[#1A1A1A] leading-[1.1] tracking-tight mb-6 sm:mb-8">
              Three people. One rental relationship. <br className="hidden sm:inline" />
              <span className="text-[#F26522]">Less left to chance.</span>
            </h2>

            <p className="text-[17px] sm:text-[19px] md:text-[20px] text-[#1A1A1A]/75 font-normal leading-[1.55] max-w-[640px] mb-8 sm:mb-10">
              Join us as we build the trust infrastructure that makes renting safe, verifiable, and dignifying — for everyone.
            </p>

            <div className="flex flex-col sm:flex-row gap-3.5 sm:gap-4 w-full sm:w-auto items-center justify-center">
              <button
                onClick={() => navigate('/waitlist')}
                className="group w-full sm:w-auto flex items-center justify-center gap-2.5 bg-[#F26522] text-white text-[15px] sm:text-[16px] font-semibold px-8 py-3.5 rounded-[100px] shadow-[0_8px_24px_rgba(242,101,34,0.25)] hover:bg-[#D1551A] hover:shadow-[0_12px_32px_rgba(242,101,34,0.35)] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#F26522] focus:ring-offset-2 focus:ring-offset-[#FFF8F0] cursor-pointer"
              >
                Join Waitlist
                <ArrowRightIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => navigate('/partner')}
                className="group w-full sm:w-auto flex items-center justify-center gap-2 bg-transparent border-[1.5px] border-[#1A1A1A]/30 hover:border-[#1A1A1A] text-[#1A1A1A] text-[15px] sm:text-[16px] font-semibold px-8 py-3.5 rounded-[100px] hover:bg-[#1A1A1A]/5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#1A1A1A] focus:ring-offset-2 focus:ring-offset-[#FFF8F0] cursor-pointer"
              >
                Partner With Us
              </button>
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
