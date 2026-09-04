const fs = require('fs');
let content = fs.readFileSync('src/SolutionSection.tsx', 'utf-8');

const oldScroll = `  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;
    const cards = scrollRef.current.querySelectorAll('.solution-card');
    if (cards[index]) {
      cards[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  };`;

const newScroll = `  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const cards = container.querySelectorAll('.solution-card');
    const targetCard = cards[index] as HTMLElement;
    if (targetCard) {
      // Calculate scroll position to center the card horizontally without affecting vertical page scroll
      const scrollPosition = targetCard.offsetLeft - (container.clientWidth / 2) + (targetCard.clientWidth / 2);
      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  };`;

content = content.replace(oldScroll, newScroll);
fs.writeFileSync('src/SolutionSection.tsx', content);
