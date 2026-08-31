import React, { useEffect } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

export const TermsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-[#FFF5EB] selection:bg-[#F26522]/20 selection:text-[#1A1A1A] min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <div className="w-full bg-[#F26522] flex flex-col shrink-0">
        <div className="w-full bg-[#FFF8F0] min-h-[300px] md:min-h-[380px] rounded-b-[40px] md:rounded-b-[60px] shadow-[0_10px_40px_rgba(242,101,34,0.15)] relative flex flex-col shrink-0 z-10 justify-center px-6 pt-[88px]">
          <div className="max-w-[720px] mx-auto text-center">
            <h1 className="text-[32px] sm:text-[36px] md:text-[48px] font-bold text-[#1A1A1A] leading-[1.1] tracking-tight mb-4">
              Terms of Use
            </h1>
            <p className="text-[16px] md:text-[18px] text-[#6B6B6B] leading-[1.6]">
              The terms that apply when you use the MyDomos Africa website, join the waitlist, contact us, or participate in our research and partnership conversations.
            </p>
          </div>
        </div>
      </div>

      {/* Body Content */}
      <main className="w-full py-16 md:py-24 px-6 flex-1 flex flex-col items-center">
        <div className="w-full max-w-[720px] flex flex-col gap-8 md:gap-10 text-[#1A1A1A]">
          <p className="text-[14px] text-[#1A1A1A]/50">Last Updated: August 2026</p>

          <section className="flex flex-col gap-4">
            <h2 className="text-[20px] md:text-[22px] font-semibold">About These Terms</h2>
            <p className="text-[15px] md:text-[16px] leading-[1.7] text-[#1A1A1A]/80">
              These Terms govern your use of the MyDomos Africa website and your participation in activities such as the waitlist, research, and partnership inquiries.
            </p>
            <p className="text-[15px] md:text-[16px] leading-[1.7] text-[#1A1A1A]/80">
              MyDomos Africa is a product of DomosHQ Limited, the entity responsible for the operation of this website.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-[20px] md:text-[22px] font-semibold">Using the Website</h2>
            <p className="text-[15px] md:text-[16px] leading-[1.7] text-[#1A1A1A]/80">
              You may use our website for lawful purposes only. You must not interfere with its operation, attempt to circumvent its security, or misuse its content or systems.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-[20px] md:text-[22px] font-semibold">Waitlist</h2>
            <p className="text-[15px] md:text-[16px] leading-[1.7] text-[#1A1A1A]/80">
              Joining the waitlist is an expression of interest. It does not guarantee product access, specific launch timing, availability in a particular city, pricing, or any specific product feature.
            </p>
            <p className="text-[15px] md:text-[16px] leading-[1.7] text-[#1A1A1A]/80">
              We may contact waitlist users with relevant updates as our infrastructure and services develop.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-[20px] md:text-[22px] font-semibold">Partnership and Contact Inquiries</h2>
            <p className="text-[15px] md:text-[16px] leading-[1.7] text-[#1A1A1A]/80">
              Sending a partnership or contact inquiry does not automatically create a partnership, agency relationship, employment relationship, investment relationship, or commercial agreement with DomosHQ Limited. Any formal relationship must be established through appropriate written agreements.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-[20px] md:text-[22px] font-semibold">User Submissions</h2>
            <p className="text-[15px] md:text-[16px] leading-[1.7] text-[#1A1A1A]/80">
              If you submit messages, feedback, or inquiries through the website, you should only submit information that you have the right to share. You should not submit passwords, banking credentials, government identification numbers, highly sensitive personal information, or private information belonging to another person without permission.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-[20px] md:text-[22px] font-semibold">Acceptable Use</h2>
            <p className="text-[15px] md:text-[16px] leading-[1.7] text-[#1A1A1A]/80">
              When using the website, you must not attempt unauthorised access, interfere with the website's performance, introduce malicious code, abuse our forms or systems, impersonate others, violate applicable law, or infringe upon another person's rights.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-[20px] md:text-[22px] font-semibold">Intellectual Property</h2>
            <p className="text-[15px] md:text-[16px] leading-[1.7] text-[#1A1A1A]/80">
              The MyDomos name, branding, website design, copy, software, and other original materials belong to DomosHQ Limited or relevant licensors. You may not reproduce or commercially exploit protected materials without permission, except where permitted by applicable law.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-[20px] md:text-[22px] font-semibold">Third-Party Services and Links</h2>
            <p className="text-[15px] md:text-[16px] leading-[1.7] text-[#1A1A1A]/80">
              If the website contains links to third-party services, those services may operate under their own terms and privacy policies. We are not responsible for third-party websites or services beyond what the law requires.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-[20px] md:text-[22px] font-semibold">Availability and Changes</h2>
            <p className="text-[15px] md:text-[16px] leading-[1.7] text-[#1A1A1A]/80">
              The website may change, be updated, or become temporarily unavailable from time to time. Information provided on the website may also become outdated as the product develops.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-[20px] md:text-[22px] font-semibold">Disclaimers</h2>
            <p className="text-[15px] md:text-[16px] leading-[1.7] text-[#1A1A1A]/80">
              Website content is provided for general informational purposes. MyDomos does not provide legal, financial, housing, investment, or professional advice through this website.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-[20px] md:text-[22px] font-semibold">Limitation of Liability</h2>
            <p className="text-[15px] md:text-[16px] leading-[1.7] text-[#1A1A1A]/80">
              To the extent permitted by law, DomosHQ Limited will not be liable for indirect, incidental, or consequential damages arising out of your use of the website or participation in early-stage activities. [Note: This section is provided for general website use and is subject to further legal review regarding applicable jurisdiction.]
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-[20px] md:text-[22px] font-semibold">Changes to These Terms</h2>
            <p className="text-[15px] md:text-[16px] leading-[1.7] text-[#1A1A1A]/80">
              We may update these Terms from time to time. When changes are made, we will display a new effective date at the top of this document.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-[20px] md:text-[22px] font-semibold">Governing Law</h2>
            <p className="text-[15px] md:text-[16px] leading-[1.7] text-[#1A1A1A]/80">
              These Terms will be governed by the laws applicable to DomosHQ Limited’s primary jurisdiction of operation, subject to final legal confirmation.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-[20px] md:text-[22px] font-semibold">Contact</h2>
            <p className="text-[15px] md:text-[16px] leading-[1.7] text-[#1A1A1A]/80">
              If you have any questions about these Terms, please contact us at <a href="mailto:hello@mydomos.org" className="text-[#F26522] hover:text-[#D1551A] transition-colors font-medium">hello@mydomos.org</a>.
            </p>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
};
