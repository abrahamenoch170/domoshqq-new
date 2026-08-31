const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

const replacement = `const StoryCard = ({ align, statHighlight, statText, title, text, name, role, image, index }: StoryCardProps) => {
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
      className={\`flex flex-col gap-1.5 w-full \${isRight ? 'items-end' : 'items-start'}\`}
    >
      {/* Avatar and Name */}
      <div className={\`flex flex-col items-center mb-1 \${isRight ? 'mr-4' : 'ml-4'}\`}>
        <img src={image} alt={name} className="w-[36px] h-[36px] rounded-full object-cover shadow-sm" />
        <div className="text-center mt-1 leading-[1.1]">
          <div className="text-[12px] font-bold text-[#1A1A1A]">{name},</div>
          <div className="text-[12px] font-medium text-[#1A1A1A]/70">{role}</div>
        </div>
      </div>

      {/* Stat Label */}
      <div className={\`flex items-center gap-1.5 text-[#1A1A1A]/60 text-[13px] \${isRight ? 'flex-row-reverse text-right' : 'flex-row text-left'}\`}>
        <TrendingUp className="w-[14px] h-[14px] text-[#F26522] shrink-0" strokeWidth={2.5} />
        <span><strong className="text-[#F26522] font-bold">{statHighlight}</strong> {statText}</span>
      </div>

      {/* Chat Bubble */}
      <div className={\`bg-[#1A1A1A] text-white p-4 md:p-5 rounded-[20px] max-w-[280px] md:max-w-[340px] shadow-[0_8px_24px_rgba(0,0,0,0.12)] relative overflow-hidden \${isRight ? 'rounded-tr-sm' : 'rounded-tl-sm'}\`}>
        <div className="relative z-10 text-[13.5px] md:text-[14px] leading-[1.6]">
          <strong className="font-bold text-white">{title}</strong> <span className="text-white/85">{text}</span>
        </div>
      </div>
    </motion.div>
  );
};

const BetrayalSection = () => {
  return (
    <section id="problem" className="relative w-full bg-[#FFFFFF] pt-[60px] pb-[80px] md:pt-[100px] md:pb-[120px] flex flex-col items-center overflow-hidden">
      <div className="w-full max-w-[560px] mx-auto px-6 flex flex-col gap-10 md:gap-12 relative">

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

        {/* The Problem Section */}
        <div className="relative w-full flex flex-col items-center my-6 md:my-10">
          {/* Segun Avatar on the far left of the column */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col items-center ml-4"
          >
            <img src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?auto=format&fit=crop&w=150&q=80" alt="Segun" className="w-[36px] h-[36px] rounded-full object-cover shadow-sm" />
            <div className="text-center mt-1 leading-[1.1]">
              <div className="text-[12px] font-bold text-[#1A1A1A]">Segun,</div>
              <div className="text-[12px] font-medium text-[#1A1A1A]/70">Tenant</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
            className="flex flex-col items-center text-center max-w-[340px] md:max-w-[420px] mx-auto gap-3 pl-[50px] pr-2 md:pl-0"
          >
            <span className="text-[#1A1A1A]/50 text-[16px] font-medium">The Problem</span>
            <h2 className="text-[24px] md:text-[28px] font-bold text-[#1A1A1A] leading-[1.35] tracking-tight">
              Renting across Africa is broken. These systemic issues affect tenants, landlords, and agents every day.
            </h2>
          </motion.div>
        </div>

        <StoryCard
          align="left"
          statHighlight="80%+"
          statText="of African rentals lack written"
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
    </section>
  );
};`;

const startIndex = content.indexOf('const StoryCard =');
const endIndex = content.indexOf('const LandingPage =');

if (startIndex !== -1 && endIndex !== -1) {
  content = content.substring(0, startIndex) + replacement + "\n\n" + content.substring(endIndex);
  fs.writeFileSync('src/App.tsx', content);
  console.log('Replaced successfully.');
} else {
  console.log('Could not find start or end index.');
}
