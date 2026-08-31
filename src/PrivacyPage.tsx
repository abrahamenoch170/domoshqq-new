import React, { useEffect } from 'react';
import { SEO } from './SEO';
import { Header } from './Header';
import { Footer } from './Footer';

export const PrivacyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO title="Privacy Policy — MyDomos Africa" description="Privacy Policy for MyDomos Africa." path="/privacy" />
      <div className="w-full bg-[#FFF5EB] selection:bg-[#F26522]/20 selection:text-[#1A1A1A] min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <div className="w-full bg-[#F26522] flex flex-col shrink-0">
        <div className="w-full bg-[#FFF8F0] min-h-[300px] md:min-h-[380px] rounded-b-[40px] md:rounded-b-[60px] shadow-[0_10px_40px_rgba(242,101,34,0.15)] relative flex flex-col shrink-0 z-10 justify-center px-6 pt-[88px]">
          <div className="max-w-[720px] mx-auto text-center">
            <h1 className="text-[32px] sm:text-[36px] md:text-[48px] font-bold text-[#1A1A1A] leading-[1.1] tracking-tight mb-4">
              Privacy Policy
            </h1>
            <p className="text-[16px] md:text-[18px] text-[#6B6B6B] leading-[1.6]">
              How DomosHQ Limited collects, uses, protects, and handles information when you use the MyDomos Africa website and services.
            </p>
          </div>
        </div>
      </div>

      {/* Body Content */}
      <main className="w-full py-16 md:py-24 px-6 flex-1 flex flex-col items-center">
        <div className="w-full max-w-[720px] flex flex-col gap-8 md:gap-10 text-[#1A1A1A]">
          <p className="text-[14px] text-[#1A1A1A]/50">Last Updated: August 2026</p>

          <section className="flex flex-col gap-4">
            <h2 className="text-[20px] md:text-[22px] font-semibold">Introduction</h2>
            <p className="text-[15px] md:text-[16px] leading-[1.7] text-[#1A1A1A]/80">
              This Privacy Policy describes how DomosHQ Limited handles personal information collected through the MyDomos Africa website and related early-stage interactions.
            </p>
            <p className="text-[15px] md:text-[16px] leading-[1.7] text-[#1A1A1A]/80">
              This policy applies to information submitted through the website, waitlist forms, contact forms, partnership inquiries, and other related website interactions where applicable.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-[20px] md:text-[22px] font-semibold">Information We Collect</h2>
            <p className="text-[15px] md:text-[16px] leading-[1.7] text-[#1A1A1A]/80">
              We collect information that you voluntarily provide to us when expressing interest in our services or seeking to communicate with our team.
            </p>
            <p className="text-[15px] md:text-[16px] leading-[1.7] text-[#1A1A1A]/80">
              For the waitlist, this includes your name, email address, city, and your role in the rental ecosystem. For partnership or contact forms, this may include your name, organization, email address, the type of partnership you are interested in, and any additional information you choose to include in your message.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-[20px] md:text-[22px] font-semibold">How We Use Information</h2>
            <p className="text-[15px] md:text-[16px] leading-[1.7] text-[#1A1A1A]/80">
              The information we collect is used to manage the waitlist, respond to your inquiries, and communicate relevant updates. We also use this information to understand demand and user interests, improve our website, and develop research or product insights where appropriate.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-[20px] md:text-[22px] font-semibold">Communications</h2>
            <p className="text-[15px] md:text-[16px] leading-[1.7] text-[#1A1A1A]/80">
              After submitting your information, you may receive waitlist updates, product updates, responses to your inquiries, or partnership communications. You may opt out of non-essential marketing communications at any time by following the unsubscribe instructions included in those messages or by contacting us directly.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-[20px] md:text-[22px] font-semibold">How We Share Information</h2>
            <p className="text-[15px] md:text-[16px] leading-[1.7] text-[#1A1A1A]/80">
              We may share your information with service providers that help operate our website, manage our waitlist, and facilitate our communications, where necessary. These providers process information on our behalf and are expected to handle it securely.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-[20px] md:text-[22px] font-semibold">Data Security</h2>
            <p className="text-[15px] md:text-[16px] leading-[1.7] text-[#1A1A1A]/80">
              We use reasonable technical and organisational measures to protect the personal information submitted through our website. However, no online system or electronic transmission can guarantee absolute security.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-[20px] md:text-[22px] font-semibold">Data Retention</h2>
            <p className="text-[15px] md:text-[16px] leading-[1.7] text-[#1A1A1A]/80">
              We retain your information only for as long as reasonably necessary for the purposes for which it was collected, to meet legal obligations, support legitimate business needs, or facilitate the resolution of disputes where applicable.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-[20px] md:text-[22px] font-semibold">Your Rights and Choices</h2>
            <p className="text-[15px] md:text-[16px] leading-[1.7] text-[#1A1A1A]/80">
              Depending on the applicable legal framework and your circumstances, you may have rights relating to your personal information. These may include rights to access, correct, or delete your data, to object to or restrict processing, or to withdraw consent where processing relies on consent. 
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-[20px] md:text-[22px] font-semibold">Cookies and Similar Technologies</h2>
            <p className="text-[15px] md:text-[16px] leading-[1.7] text-[#1A1A1A]/80">
              Our website may use standard functional cookies or similar technologies to ensure the proper operation of the site and basic analytics. We do not currently use intrusive tracking cookies.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-[20px] md:text-[22px] font-semibold">Children's Privacy</h2>
            <p className="text-[15px] md:text-[16px] leading-[1.7] text-[#1A1A1A]/80">
              Our website and waitlist are not designed for or directed at children. We do not knowingly collect personal information from individuals who are legally considered children under applicable law.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-[20px] md:text-[22px] font-semibold">Changes to This Policy</h2>
            <p className="text-[15px] md:text-[16px] leading-[1.7] text-[#1A1A1A]/80">
              This policy may be updated as our website, products, or legal requirements change. When changes are made, we will display an updated date at the top of this document.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-[20px] md:text-[22px] font-semibold">Contact</h2>
            <p className="text-[15px] md:text-[16px] leading-[1.7] text-[#1A1A1A]/80">
              If you have questions or requests regarding your privacy, please contact us at <a href="mailto:privacy@mydomos.org" className="text-[#F26522] hover:text-[#D1551A] transition-colors font-medium">privacy@mydomos.org</a>.
            </p>
          </section>

        </div>
      </main>

      <Footer />
    </div>
    </>
  );
};
