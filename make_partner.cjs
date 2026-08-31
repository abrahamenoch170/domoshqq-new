const fs = require('fs');

const code = `import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Header } from './Header';
import { Footer } from './Footer';
import { AFRICA_PATH } from './assets';
import { ArrowRightIcon, ArrowDownIcon } from '@heroicons/react/24/outline';

export const PartnerPage = () => {
  const contactRef = useRef<HTMLDivElement>(null);
  const optionsRef = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToOptions = () => {
    optionsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full bg-[#FFF5EB] selection:bg-[#F26522]/20 selection:text-[#1A1A1A] min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section wrapped in orange background to create the frame effect */}
      <div className="w-full bg-[#F26522] flex flex-col shrink-0">
        <div className="w-full bg-[#FFF8F0] min-h-[calc(100vh-40px)] md:min-h-[calc(100vh-60px)] rounded-b-[40px] md:rounded-b-[60px] shadow-[0_10px_40px_rgba(242,101,34,0.15)] relative flex flex-col shrink-0 z-10 justify-center">
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
            <div className="relative z-30 max-w-[720px] mx-auto">
              <h1 className="text-[32px] sm:text-[36px] md:text-[48px] lg:text-[56px] font-bold text-[#1A1A1A] leading-[1.1] tracking-tight mb-3 md:mb-5">
                Build With Us
              </h1>
              <h2 className="text-[20px] sm:text-[24px] md:text-[28px] font-semibold text-[#1A1A1A]/90 leading-[1.3] mb-4">
                Help shape the infrastructure that makes renting more trustworthy across Africa.
              </h2>
              
              <p className="text-[15px] sm:text-[16px] md:text-[18px] text-[#6B6B6B] leading-[1.6] max-w-[640px] mx-auto">
                Whether you bring technology, capital, distribution, institutional reach, or deep rental-market knowledge, there may be a meaningful way to work together.
              </p>

              {/* CTAs */}
              <div className="mt-6 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                <button onClick={scrollToContact} className="group w-full sm:w-auto flex items-center justify-center gap-2 bg-[#F26522] text-white text-[16px] font-semibold px-[36px] py-[16px] rounded-[100px] shadow-[0_8px_24px_rgba(242,101,34,0.25)] hover:bg-[#E55A1B] hover:shadow-[0_12px_32px_rgba(242,101,34,0.4)] hover:-translate-y-[2px] active:translate-y-[1px] active:shadow-[0_4px_12px_rgba(242,101,34,0.3)] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F26522] focus:ring-offset-[#FFF8F0]">
                  Start a Conversation
                </button>
                
                <button onClick={scrollToOptions} className="group w-full sm:w-auto flex items-center justify-center gap-2 bg-transparent border-[1.5px] border-[#1A1A1A]/80 text-[#1A1A1A] text-[16px] font-semibold px-[36px] py-[16px] rounded-[100px] shadow-[0_2px_8px_rgba(0,0,0,0.0)] hover:bg-[#1A1A1A]/5 hover:border-[#1A1A1A] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:-translate-y-[2px] active:translate-y-[1px] active:shadow-none transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1A1A1A] focus:ring-offset-[#FFF8F0]">
                  See How We Work Together
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>

      <PartnerContent contactRef={contactRef} optionsRef={optionsRef} />

      <Footer />
    </div>
  );
};

const PartnerContent = ({ contactRef, optionsRef }: { contactRef: React.RefObject<HTMLDivElement | null>, optionsRef: React.RefObject<HTMLDivElement | null> }) => {
  const [formData, setFormData] = useState({
    organization: '',
    name: '',
    email: '',
    type: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    
    if (!formData.organization.trim()) newErrors.organization = 'Please enter your organization.';
    if (!formData.name.trim()) newErrors.name = 'Please enter your name.';
    if (!formData.type) newErrors.type = 'Please select a partnership type.';
    
    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setErrors({});
    setIsSubmitting(true);
    
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 800);
  };

  return (
    <div className="w-full bg-[#FFF5EB] flex flex-col items-center shrink-0">
      
      {/* Partnership Positioning */}
      <section className="w-full py-20 md:py-32 px-6 md:px-12 flex flex-col items-center text-center">
        <div className="max-w-[800px]">
          <h3 className="text-[28px] md:text-[40px] font-bold text-[#1A1A1A] leading-[1.2] tracking-tight mb-6">
            We’re building neutral infrastructure, so partnership doesn’t have to mean becoming part of one side of the rental market.
          </h3>
          <p className="text-[18px] md:text-[22px] text-[#1A1A1A]/70 leading-[1.6]">
            We can work alongside the people, platforms, institutions, and businesses already shaping how renting happens.
          </p>
        </div>
      </section>

      {/* Who Can Partner With Us */}
      <section ref={optionsRef} className="w-full py-16 md:py-24 px-6 md:px-12 flex flex-col items-center bg-white rounded-[40px] md:rounded-[60px] mx-4 max-w-[1400px] shadow-[0_10px_40px_rgba(242,101,34,0.05)] mb-16">
        <div className="max-w-[800px] w-full">
          <h3 className="text-[24px] md:text-[32px] font-bold text-[#1A1A1A] mb-12">
            There’s more than one way to build with us.
          </h3>
          
          <div className="flex flex-col gap-10 md:gap-14">
            <div className="flex flex-col gap-2">
              <h4 className="text-[20px] md:text-[24px] font-bold text-[#1A1A1A]">Technology</h4>
              <p className="text-[16px] md:text-[18px] text-[#1A1A1A]/70 leading-[1.6]">Bring infrastructure, technical capability, or systems that can strengthen the rental ecosystem.</p>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-[20px] md:text-[24px] font-bold text-[#1A1A1A]">Capital</h4>
              <p className="text-[16px] md:text-[18px] text-[#1A1A1A]/70 leading-[1.6]">Support the development of infrastructure designed for long-term rental trust.</p>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-[20px] md:text-[24px] font-bold text-[#1A1A1A]">Distribution</h4>
              <p className="text-[16px] md:text-[18px] text-[#1A1A1A]/70 leading-[1.6]">Help us reach the people and businesses already participating in rental markets.</p>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-[20px] md:text-[24px] font-bold text-[#1A1A1A]">Institutions</h4>
              <p className="text-[16px] md:text-[18px] text-[#1A1A1A]/70 leading-[1.6]">Bring policy, market knowledge, networks, or institutional capacity to the work.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Principle */}
      <section className="w-full py-16 px-6 md:px-12 flex flex-col items-center text-center">
        <div className="max-w-[700px]">
          <h3 className="text-[28px] md:text-[36px] font-bold text-[#1A1A1A] leading-[1.2] tracking-tight mb-4">
            We’re not looking for logos. We’re looking for alignment.
          </h3>
          <p className="text-[16px] md:text-[20px] text-[#1A1A1A]/70 leading-[1.6]">
            If you see a meaningful way to contribute, distribute, integrate, invest, or collaborate, tell us what you have in mind.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="w-full py-16 md:py-24 px-6 md:px-12 flex flex-col items-center mb-12">
        <div className="w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Option 01 */}
          <div className="flex flex-col items-start">
            <h3 className="text-[24px] md:text-[32px] font-bold text-[#1A1A1A] mb-4">Have something specific in mind?</h3>
            <p className="text-[16px] md:text-[18px] text-[#1A1A1A]/70 leading-[1.6] mb-8">
              Start with an email. Give us the short version and we’ll take it from there.
            </p>
            <a href="mailto:partnership@mydomos.org" className="text-[20px] md:text-[24px] font-bold text-[#F26522] hover:text-[#D1551A] transition-colors focus:outline-none focus:ring-2 focus:ring-[#F26522] rounded-md px-1 -ml-1">
              partnership@mydomos.org
            </a>
          </div>

          {/* Option 02 */}
          <div className="flex flex-col items-start w-full">
            <h3 className="text-[24px] md:text-[32px] font-bold text-[#1A1A1A] mb-4">Want to give us the full picture?</h3>
            <p className="text-[16px] md:text-[18px] text-[#1A1A1A]/70 leading-[1.6] mb-10">
              Tell us a little about who you are and what you’d like to explore.
            </p>

            {isSuccess ? (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full bg-white p-8 md:p-10 rounded-[24px] shadow-[0_10px_30px_rgba(242,101,34,0.05)] border border-[#1A1A1A]/5"
              >
                <h4 className="text-[24px] font-bold text-[#1A1A1A] mb-2">Thanks. We’ve got it.</h4>
                <p className="text-[16px] text-[#1A1A1A]/70">We’ll review your message and get back to you.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="organization" className="text-[15px] font-semibold text-[#1A1A1A]">Organization / Company</label>
                  <input
                    id="organization"
                    type="text"
                    placeholder="Your organization"
                    value={formData.organization}
                    onChange={(e) => setFormData(prev => ({ ...prev, organization: e.target.value }))}
                    className="w-full h-[52px] px-4 bg-white border border-[#1A1A1A]/15 rounded-lg text-[16px] text-[#1A1A1A] placeholder:text-[#1A1A1A]/40 focus:outline-none focus:border-[#F26522] focus:ring-1 focus:ring-[#F26522] transition-colors"
                  />
                  {errors.organization && <span className="text-[#F26522] text-[13px] mt-1">{errors.organization}</span>}
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-[15px] font-semibold text-[#1A1A1A]">Your Name</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Full name"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full h-[52px] px-4 bg-white border border-[#1A1A1A]/15 rounded-lg text-[16px] text-[#1A1A1A] placeholder:text-[#1A1A1A]/40 focus:outline-none focus:border-[#F26522] focus:ring-1 focus:ring-[#F26522] transition-colors"
                  />
                  {errors.name && <span className="text-[#F26522] text-[13px] mt-1">{errors.name}</span>}
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-[15px] font-semibold text-[#1A1A1A]">Email</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full h-[52px] px-4 bg-white border border-[#1A1A1A]/15 rounded-lg text-[16px] text-[#1A1A1A] placeholder:text-[#1A1A1A]/40 focus:outline-none focus:border-[#F26522] focus:ring-1 focus:ring-[#F26522] transition-colors"
                  />
                  {errors.email && <span className="text-[#F26522] text-[13px] mt-1">{errors.email}</span>}
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="type" className="text-[15px] font-semibold text-[#1A1A1A]">How would you like to work with us?</label>
                  <select
                    id="type"
                    value={formData.type}
                    onChange={(e) => setFormData(prev => ({ ...prev, type: e.target.value }))}
                    className="w-full h-[52px] px-4 bg-white border border-[#1A1A1A]/15 rounded-lg text-[16px] text-[#1A1A1A] focus:outline-none focus:border-[#F26522] focus:ring-1 focus:ring-[#F26522] transition-colors appearance-none"
                    style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'12\' height=\'12\' viewBox=\'0 0 24 24\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M6 9L12 15L18 9\' stroke=\'%231A1A1A\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'/%3E%3C/svg%3E")', backgroundPosition: 'right 16px center', backgroundRepeat: 'no-repeat' }}
                  >
                    <option value="" disabled>Select an option</option>
                    <option value="Technology">Technology</option>
                    <option value="Investment">Investment</option>
                    <option value="Distribution">Distribution</option>
                    <option value="Government / Institution">Government / Institution</option>
                    <option value="Strategic Partnership">Strategic Partnership</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.type && <span className="text-[#F26522] text-[13px] mt-1">{errors.type}</span>}
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-[15px] font-semibold text-[#1A1A1A]">Tell us more <span className="text-[#1A1A1A]/40 font-normal ml-1">(Optional)</span></label>
                  <textarea
                    id="message"
                    placeholder="What are you hoping to explore with MyDomos?"
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    className="w-full h-[120px] p-4 bg-white border border-[#1A1A1A]/15 rounded-lg text-[16px] text-[#1A1A1A] placeholder:text-[#1A1A1A]/40 focus:outline-none focus:border-[#F26522] focus:ring-1 focus:ring-[#F26522] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-2 w-full bg-[#F26522] text-white text-[16px] font-semibold h-[52px] rounded-lg hover:bg-[#D1551A] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F26522] focus:ring-offset-[#FFF5EB] flex items-center justify-center disabled:opacity-70"
                >
                  {isSubmitting ? 'Sending...' : 'Start a Conversation'}
                </button>
                <p className="text-center text-[13px] text-[#1A1A1A]/50 mt-1">
                  We’ll review your message and get back to you.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
`;

fs.writeFileSync('src/PartnerPage.tsx', code);
