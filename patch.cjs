const fs = require('fs');
let content = fs.readFileSync('src/SolutionSection.tsx', 'utf-8');

// Replace open div for cards
content = content.replace(/const (Card[A-Za-z]+) = \(\) => \(\n  <div className="solution-card/g, 
  'const $1 = () => (\n  <motion.div\n    initial={{ opacity: 0, y: 50 }}\n    whileInView={{ opacity: 1, y: 0 }}\n    viewport={{ once: true, margin: "-50px" }}\n    transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}\n    className="solution-card');

// Replace close div for cards. Since the end of a card is `  </div>\n);\n`, we can target that!
content = content.replace(/  <\/div>\n\);\n/g, '  </motion.div>\n);\n');

// For SolutionSection scroll parallax
// Add useScroll and useTransform logic inside SolutionSection
const scrollLogic = `
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const yParallax = useTransform(scrollYProgress, [0, 1], [60, -60]);
`;
content = content.replace(/export const SolutionSection = \(\) => \{/, 'export const SolutionSection = () => {' + scrollLogic);

// Add sectionRef to section
content = content.replace(/<section className="bg-\[#FFF5EB\]/, '<section ref={sectionRef} className="bg-[#FFF5EB]');

// Change track container to motion.div with style={{ y: yParallax }}
content = content.replace(/      <div\n        ref={scrollRef}\n        className="flex overflow-x-auto/, 
  '      <motion.div\n        style={{ y: yParallax }}\n        ref={scrollRef}\n        className="flex overflow-x-auto');
content = content.replace(/      <\/div>\n    <\/section>/, '      </motion.div>\n    </section>');

fs.writeFileSync('src/SolutionSection.tsx', content);
