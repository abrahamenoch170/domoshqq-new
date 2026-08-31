const fs = require('fs');

const code = `import React, { useState, useEffect, useRef } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { AFRICA_PATH } from './assets';

type Role = 'Tenant' | 'Landlord' | 'Agent';
type QuestionType = 'radio' | 'checkbox' | 'shortText' | 'email';

interface Question {
  id: string;
  text: string;
  type: QuestionType;
  options?: string[];
  optional?: boolean;
  optionalShortResponse?: string;
  conditional?: {
    dependsOnOption?: string;
    dependsOnNotOption?: string;
    questionText: string;
  };
}

const tenantQuestions: Question[] = [
  { id: "t_q1", text: "When was the last time you rented a place?", type: "radio", options: ["Within the last 3 months", "3–12 months ago", "1–3 years ago", "More than 3 years ago"] },
  { id: "t_q2", text: "What was the hardest part of finding the place?", type: "radio", options: ["Knowing which listings or people to trust", "Knowing whether the property was genuine", "Understanding the true cost", "Knowing whether the landlord/agent was legitimate", "Getting enough information about the property", "Dealing with agents or intermediaries", "Something else"], optionalShortResponse: "Tell us what happened." },
  { id: "t_q3", text: "Before you paid anything, what did you actually know about the person you were dealing with?", type: "radio", options: ["I knew them personally", "Someone I trusted referred them", "I checked them myself", "The agent/platform gave me some confidence", "I mostly relied on what they told me", "I knew very little"] },
  { id: "t_q4", text: "What made you decide it was safe enough to move forward?", type: "checkbox", options: ["Recommendation from someone I trusted", "Seeing the property", "Speaking with the landlord", "Speaking with the agent", "Documents or proof shown to me", "Previous experience with the person", "I had no better option", "Something else"] },
  { id: "t_q5", text: "Did anything turn out to be different from what you were told before you paid or moved in?", type: "radio", options: ["Yes", "No", "Not sure"], conditional: { dependsOnOption: "Yes", questionText: "What was different?" } },
  { id: "t_q6", text: "During the tenancy, what caused the most friction?", type: "radio", options: ["Repairs or maintenance", "Rent or payment issues", "Deposit", "Utilities or bills", "Communication", "Agreement or promises", "Property condition", "Privacy/access", "Nothing significant", "Something else"] },
  { id: "t_q7", text: "When something went wrong, where did the record of what happened live?", type: "radio", options: ["WhatsApp/messages", "Email", "Paper documents", "Bank/payment records", "Photos/videos", "I kept my own notes", "There was no proper record", "Somewhere else"] },
  { id: "t_q8", text: "Did you ever need to prove what had happened during the rental?", type: "radio", options: ["Yes", "No", "Almost"], conditional: { dependsOnOption: "Yes", questionText: "What were you trying to prove?" } },
  { id: "t_q9", text: "Have you ever lost money because of a rental problem?", type: "radio", options: ["Yes", "No", "Not directly, but it cost me significant time or stress"], conditional: { dependsOnOption: "Yes", questionText: "What happened?" } },
  { id: "t_q10", text: "How was the problem eventually resolved?", type: "radio", options: ["We resolved it directly", "An agent helped", "Family/friends helped", "A lawyer or authority became involved", "I simply accepted the loss/problem", "It was never resolved", "Something else"] },
  { id: "t_q11", text: "What do you do differently now because of that experience?", type: "shortText" },
  { id: "t_q12", text: "Before your next rental, what is the one thing you wish you could know with confidence?", type: "shortText" }
];

const landlordQuestions: Question[] = [
  { id: "l_q1", text: "When was the last time you rented out a property?", type: "radio", options: ["Within the last 3 months", "3–12 months ago", "1–3 years ago", "More than 3 years ago"] },
  { id: "l_q2", text: "What is the hardest part of finding a tenant you feel comfortable renting to?", type: "radio", options: ["Knowing whether they are genuine", "Knowing whether they can pay", "Knowing their rental history", "Knowing whether they will take care of the property", "Verifying information they provide", "Getting reliable information from references", "Something else"] },
  { id: "l_q3", text: "What do you currently do to decide whether a tenant is trustworthy?", type: "checkbox", options: ["Personal recommendation", "References", "Identity documents", "Previous landlord", "Employment/income information", "Agent recommendation", "Previous experience with the tenant", "Gut feeling", "Something else"] },
  { id: "l_q4", text: "Have you ever accepted a tenant and later discovered something you wish you had known beforehand?", type: "radio", options: ["Yes", "No"], conditional: { dependsOnOption: "Yes", questionText: "What did you discover?" } },
  { id: "l_q5", text: "What has caused you the most trouble during a tenancy?", type: "radio", options: ["Late or missed rent", "Property damage", "Maintenance", "Communication", "Utilities/bills", "Disputes", "Deposit", "Unauthorised changes/use", "Something else"] },
  { id: "l_q6", text: "When there is a disagreement, what evidence do you usually have?", type: "radio", options: ["Written agreement", "WhatsApp/messages", "Photos/videos", "Payment records", "Inspection records", "Witnesses", "Mostly verbal conversations", "Something else"] },
  { id: "l_q7", text: "Have you ever had difficulty proving what was agreed with a tenant?", type: "radio", options: ["Yes", "No", "Once or twice"], conditional: { dependsOnOption: "Yes", questionText: "What was difficult to prove?" } },
  { id: "l_q8", text: "Have you ever lost money because of a tenancy problem?", type: "radio", options: ["Yes", "No", "Not directly, but it cost significant time or stress"], conditional: { dependsOnOption: "Yes", questionText: "What happened?" } },
  { id: "l_q9", text: "How was the problem resolved?", type: "radio", options: ["We resolved it directly", "An agent helped", "Family/friends helped", "A lawyer or authority became involved", "I simply accepted the loss/problem", "It was never resolved", "Something else"] },
  { id: "l_q10", text: "After a tenant leaves, what information about that tenancy do you normally keep?", type: "radio", options: ["Agreement", "Payment records", "Inspection records", "Messages", "Photos/videos", "Maintenance history", "Almost nothing", "Something else"] },
  { id: "l_q11", text: "What makes you trust a tenant more than anything else?", type: "shortText" },
  { id: "l_q12", text: "Before renting to someone new, what do you wish you could know with confidence?", type: "shortText" }
];

const agentQuestions: Question[] = [
  { id: "a_q1", text: "How long have you been involved in helping people rent property?", type: "radio", options: ["Less than 1 year", "1–3 years", "3–5 years", "5+ years"] },
  { id: "a_q2", text: "What is the hardest part of getting a rental deal from interest to agreement?", type: "radio", options: ["Finding serious tenants", "Proving the property is genuine", "Proving my own credibility", "Coordinating tenant and landlord", "Agreeing on terms", "Payments", "Documentation", "Resolving disagreements", "Something else"] },
  { id: "a_q3", text: "What do tenants usually need to trust you?", type: "radio", options: ["Referrals", "Your track record", "Agency affiliation", "Identification", "Property documents", "Meeting in person", "Online presence", "They mostly take a chance", "Something else"] },
  { id: "a_q4", text: "What do landlords usually need to trust a tenant?", type: "checkbox", options: ["Personal recommendation", "References", "Identity documents", "Previous landlord", "Employment/income information", "Agent recommendation", "Previous experience with the tenant", "Gut feeling", "Something else"] },
  { id: "a_q5", text: "What information do you most often have to verify manually?", type: "radio", options: ["Tenant identity", "Landlord identity", "Property information", "Payment information", "Agreements/documents", "References", "Nothing consistently", "Something else"] },
  { id: "a_q6", text: "Where do you usually keep records of a rental transaction?", type: "radio", options: ["WhatsApp", "Email", "Paper", "Spreadsheets", "Agency software", "Phone/device", "Bank/payment records", "Several places", "Mostly nowhere"] },
  { id: "a_q7", text: "Have you ever been caught between a tenant and landlord during a dispute?", type: "radio", options: ["Often", "Sometimes", "Once or twice", "Never"], conditional: { dependsOnNotOption: "Never", questionText: "What was the dispute about?" } },
  { id: "a_q8", text: "What usually makes those disputes difficult to resolve?", type: "radio", options: ["No clear agreement", "Missing evidence", "Different versions of events", "Payment records", "Property condition", "Communication", "Neither party trusts the other", "Something else"] },
  { id: "a_q9", text: "Have you ever lost a deal because one party did not trust the other?", type: "radio", options: ["Yes", "No", "Not sure"], conditional: { dependsOnOption: "Yes", questionText: "What happened?" } },
  { id: "a_q10", text: "How do you currently prove your credibility when meeting someone new?", type: "shortText" },
  { id: "a_q11", text: "What part of managing a rental transaction takes more time than it should?", type: "shortText" },
  { id: "a_q12", text: "What would make it easier for you to confidently introduce two people to each other?", type: "shortText" }
];

const finalQuestions: Question[] = [
  { id: "f_q1", text: "If you could change one thing about renting today, what would it be?", type: "shortText" },
  { id: "f_email", text: "If you’re open to a follow-up conversation, leave your email.", type: "email", optional: true }
];

const CustomRadio = ({ label, selected, onClick }: { label: string; selected: boolean; onClick: () => void }) => (
  <button 
    type="button"
    onClick={onClick}
    className={\`w-full text-left px-5 py-4 min-h-[52px] rounded-xl border-[1.5px] transition-all duration-200 flex items-center gap-4 \${
      selected ? 'border-[#F26522] bg-[#F26522]/5' : 'border-[#1A1A1A]/15 hover:border-[#1A1A1A]/30 bg-white'
    }\`}
  >
    <div className={\`w-5 h-5 rounded-full border-[1.5px] flex items-center justify-center shrink-0 transition-colors \${
      selected ? 'border-[#F26522]' : 'border-[#1A1A1A]/30'
    }\`}>
      {selected && <div className="w-2.5 h-2.5 bg-[#F26522] rounded-full" />}
    </div>
    <span className={\`text-[16px] md:text-[17px] leading-snug \${selected ? 'font-medium text-[#1A1A1A]' : 'text-[#1A1A1A]/80'}\`}>
      {label}
    </span>
  </button>
);

const CustomCheckbox = ({ label, selected, onClick }: { label: string; selected: boolean; onClick: () => void }) => (
  <button 
    type="button"
    onClick={onClick}
    className={\`w-full text-left px-5 py-4 min-h-[52px] rounded-xl border-[1.5px] transition-all duration-200 flex items-start gap-4 \${
      selected ? 'border-[#F26522] bg-[#F26522]/5' : 'border-[#1A1A1A]/15 hover:border-[#1A1A1A]/30 bg-white'
    }\`}
  >
    <div className={\`w-5 h-5 mt-0.5 rounded-md border-[1.5px] flex items-center justify-center shrink-0 transition-colors \${
      selected ? 'border-[#F26522] bg-[#F26522]' : 'border-[#1A1A1A]/30 bg-transparent'
    }\`}>
      {selected && (
        <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
        </svg>
      )}
    </div>
    <span className={\`text-[16px] md:text-[17px] leading-snug \${selected ? 'font-medium text-[#1A1A1A]' : 'text-[#1A1A1A]/80'}\`}>
      {label}
    </span>
  </button>
);

export const SharePage = () => {
  const [role, setRole] = useState<Role | null>(null);
  const [currentStep, setCurrentStep] = useState(-1);
  const [direction, setDirection] = useState(1);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getQuestionList = () => {
    if (role === 'Tenant') return [...tenantQuestions, ...finalQuestions];
    if (role === 'Landlord') return [...landlordQuestions, ...finalQuestions];
    if (role === 'Agent') return [...agentQuestions, ...finalQuestions];
    return [];
  };

  const questions = getQuestionList();
  const currentQuestion = currentStep >= 0 && currentStep < questions.length ? questions[currentStep] : null;

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setDirection(1);
      setCurrentStep(prev => prev + 1);
      window.scrollTo({ top: document.getElementById('survey-flow')?.offsetTop || 0, behavior: 'smooth' });
    } else {
      submitSurvey();
    }
  };

  const handleBack = () => {
    if (currentStep >= 0) {
      setDirection(-1);
      setCurrentStep(prev => prev - 1);
      window.scrollTo({ top: document.getElementById('survey-flow')?.offsetTop || 0, behavior: 'smooth' });
    }
  };

  const submitSurvey = () => {
    setIsSubmitting(true);
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      window.scrollTo({ top: document.getElementById('survey-flow')?.offsetTop || 0, behavior: 'smooth' });
    }, 1200);
  };

  const handleAnswerChange = (questionId: string, value: any) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const handleCheckboxToggle = (questionId: string, option: string) => {
    const current = answers[questionId] || [];
    if (current.includes(option)) {
      handleAnswerChange(questionId, current.filter((o: string) => o !== option));
    } else {
      handleAnswerChange(questionId, [...current, option]);
    }
  };

  const isCurrentQuestionAnswered = () => {
    if (currentStep === -1) return role !== null;
    if (!currentQuestion) return false;
    if (currentQuestion.optional) return true;
    
    const ans = answers[currentQuestion.id];
    if (currentQuestion.type === 'radio' || currentQuestion.type === 'shortText' || currentQuestion.type === 'email') {
      return ans !== undefined && ans !== '';
    }
    if (currentQuestion.type === 'checkbox') {
      return ans && ans.length > 0;
    }
    return false;
  };

  // Determine if conditional sub-field should be shown
  const showConditional = () => {
    if (!currentQuestion?.conditional) return false;
    const ans = answers[currentQuestion.id];
    if (currentQuestion.conditional.dependsOnOption) {
      return ans === currentQuestion.conditional.dependsOnOption;
    }
    if (currentQuestion.conditional.dependsOnNotOption) {
      return ans !== undefined && ans !== currentQuestion.conditional.dependsOnNotOption;
    }
    return false;
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 20 : -20,
      opacity: 0
    }),
    center: {
      z: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      z: 0,
      x: direction < 0 ? 20 : -20,
      opacity: 0
    })
  };

  return (
    <div className="w-full bg-[#FFF5EB] selection:bg-[#F26522]/20 selection:text-[#1A1A1A] min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <div className="w-full bg-[#F26522] flex flex-col shrink-0">
        <div className="w-full bg-[#FFF8F0] min-h-[calc(100vh-40px)] md:min-h-[calc(100vh-60px)] rounded-b-[40px] md:rounded-b-[60px] shadow-[0_10px_40px_rgba(242,101,34,0.15)] relative flex flex-col shrink-0 z-10">
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
                TELL US WHAT <span className="text-[#F26522]">HAPPENED.</span>
              </h1>
              
              <p className="mt-3 md:mt-5 text-[15px] sm:text-[16px] md:text-[18px] text-[#6B6B6B] leading-[1.6] max-w-[540px] mx-auto">
                Rental problems are easier to talk about in theory. We want to understand what actually happens. Share a real experience. It takes a few minutes, and you can do it anonymously.
              </p>

              {/* CTA */}
              <div className="mt-6 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                <button 
                  onClick={() => document.getElementById("survey-flow")?.scrollIntoView({ behavior: "smooth" })} 
                  className="group w-full sm:w-auto flex items-center justify-center gap-2 bg-[#F26522] text-white text-[16px] font-semibold px-[36px] py-[16px] rounded-[100px] shadow-[0_8px_24px_rgba(242,101,34,0.25)] hover:bg-[#E55A1B] hover:shadow-[0_12px_32px_rgba(242,101,34,0.4)] hover:-translate-y-[2px] active:translate-y-[1px] active:shadow-[0_4px_12px_rgba(242,101,34,0.3)] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F26522] focus:ring-offset-[#FFF8F0]"
                >
                  Share Your Story
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Survey Flow Section */}
      <section id="survey-flow" className="w-full py-16 md:py-24 px-6 flex-1 flex flex-col items-center min-h-screen">
        <div className="w-full max-w-[600px] flex flex-col items-center">
          
          {isSuccess ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20 flex flex-col items-center"
            >
              <div className="w-16 h-16 bg-[#F26522]/10 text-[#F26522] rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-[28px] md:text-[32px] font-bold text-[#1A1A1A] mb-4">Thank you.</h2>
              <p className="text-[16px] md:text-[18px] text-[#6B6B6B] leading-[1.6] max-w-[420px]">
                Your experience helps us understand where rental trust breaks down and what needs to change.
              </p>
            </motion.div>
          ) : (
            <>
              {/* Progress & Disclaimer */}
              <div className="w-full flex flex-col items-center mb-8 md:mb-12">
                {currentStep >= 0 && (
                  <p className="text-[13px] font-medium tracking-widest uppercase text-[#F26522] mb-6">
                    Question {currentStep + 1} of {questions.length}
                  </p>
                )}
                {currentStep === -1 && (
                  <p className="text-[14px] text-[#1A1A1A]/60 text-center max-w-[480px] leading-[1.6]">
                    You can share your experience without identifying yourself. Please don't include passwords, financial credentials, government ID numbers, or another person's private information.
                  </p>
                )}
              </div>

              <div className="w-full relative min-h-[400px]">
                <AnimatePresence mode="wait" custom={direction}>
                  
                  {currentStep === -1 && (
                    <motion.div
                      key="step-role"
                      custom={direction}
                      variants={variants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="w-full flex flex-col gap-6"
                    >
                      <h2 className="text-[26px] md:text-[32px] font-semibold text-[#1A1A1A] tracking-tight leading-[1.2] mb-2">
                        Which part of the rental journey are you closest to?
                      </h2>
                      <div className="flex flex-col sm:flex-row gap-4">
                        {(['Tenant', 'Landlord', 'Agent'] as Role[]).map(r => (
                          <button
                            key={r}
                            onClick={() => setRole(r)}
                            className={\`flex-1 py-4 px-6 rounded-xl border-[1.5px] transition-all duration-300 font-medium text-[16px] \${
                              role === r 
                                ? 'border-[#F26522] bg-[#F26522]/5 text-[#1A1A1A]' 
                                : 'border-[#1A1A1A]/15 bg-white text-[#1A1A1A]/70 hover:border-[#1A1A1A]/30 hover:text-[#1A1A1A]'
                            }\`}
                          >
                            {r}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {currentStep >= 0 && currentQuestion && (
                    <motion.div
                      key={\`step-\${currentStep}\`}
                      custom={direction}
                      variants={variants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="w-full flex flex-col gap-6"
                    >
                      <h2 className="text-[26px] md:text-[32px] font-semibold text-[#1A1A1A] tracking-tight leading-[1.2] mb-2">
                        {currentQuestion.text}
                        {currentQuestion.optional && <span className="text-[#1A1A1A]/40 text-[18px] ml-2 font-normal">(Optional)</span>}
                      </h2>

                      {currentQuestion.type === 'radio' && currentQuestion.options && (
                        <div className="flex flex-col gap-3">
                          {currentQuestion.options.map(opt => (
                            <CustomRadio 
                              key={opt}
                              label={opt} 
                              selected={answers[currentQuestion.id] === opt} 
                              onClick={() => handleAnswerChange(currentQuestion.id, opt)} 
                            />
                          ))}
                        </div>
                      )}

                      {currentQuestion.type === 'checkbox' && currentQuestion.options && (
                        <div className="flex flex-col gap-3">
                          {currentQuestion.options.map(opt => (
                            <CustomCheckbox 
                              key={opt}
                              label={opt} 
                              selected={(answers[currentQuestion.id] || []).includes(opt)} 
                              onClick={() => handleCheckboxToggle(currentQuestion.id, opt)} 
                            />
                          ))}
                        </div>
                      )}

                      {/* Optional short response under radio/checkbox */}
                      {currentQuestion.optionalShortResponse && (
                        <div className="mt-4 flex flex-col gap-2">
                          <label className="text-[15px] font-medium text-[#1A1A1A]/70">{currentQuestion.optionalShortResponse} (Optional)</label>
                          <textarea
                            value={answers[\`\${currentQuestion.id}_extra\`] || ''}
                            onChange={(e) => handleAnswerChange(\`\${currentQuestion.id}_extra\`, e.target.value)}
                            placeholder="Type here..."
                            className="w-full min-h-[100px] p-4 rounded-xl border-[1.5px] border-[#1A1A1A]/15 bg-white text-[#1A1A1A] placeholder-[#1A1A1A]/30 focus:outline-none focus:border-[#F26522] focus:ring-1 focus:ring-[#F26522] resize-y transition-colors"
                          />
                        </div>
                      )}

                      {/* Conditional short response (e.g. "If yes: What happened?") */}
                      {showConditional() && currentQuestion.conditional && (
                        <motion.div 
                          initial={{ opacity: 0, height: 0, marginTop: 0 }}
                          animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
                          className="flex flex-col gap-2 overflow-hidden"
                        >
                          <label className="text-[16px] font-medium text-[#1A1A1A]">{currentQuestion.conditional.questionText}</label>
                          <textarea
                            value={answers[\`\${currentQuestion.id}_cond\`] || ''}
                            onChange={(e) => handleAnswerChange(\`\${currentQuestion.id}_cond\`, e.target.value)}
                            placeholder="Type here..."
                            className="w-full min-h-[120px] p-4 rounded-xl border-[1.5px] border-[#1A1A1A]/15 bg-white text-[#1A1A1A] placeholder-[#1A1A1A]/30 focus:outline-none focus:border-[#F26522] focus:ring-1 focus:ring-[#F26522] resize-y transition-colors"
                          />
                        </motion.div>
                      )}

                      {currentQuestion.type === 'shortText' && (
                        <textarea
                          value={answers[currentQuestion.id] || ''}
                          onChange={(e) => handleAnswerChange(currentQuestion.id, e.target.value)}
                          placeholder="Type your answer here..."
                          className="w-full min-h-[160px] p-4 rounded-xl border-[1.5px] border-[#1A1A1A]/15 bg-white text-[#1A1A1A] placeholder-[#1A1A1A]/30 focus:outline-none focus:border-[#F26522] focus:ring-1 focus:ring-[#F26522] resize-y transition-colors text-[16px]"
                        />
                      )}

                      {currentQuestion.type === 'email' && (
                        <input
                          type="email"
                          value={answers[currentQuestion.id] || ''}
                          onChange={(e) => handleAnswerChange(currentQuestion.id, e.target.value)}
                          placeholder="your@email.com"
                          className="w-full p-4 h-[56px] rounded-xl border-[1.5px] border-[#1A1A1A]/15 bg-white text-[#1A1A1A] placeholder-[#1A1A1A]/30 focus:outline-none focus:border-[#F26522] focus:ring-1 focus:ring-[#F26522] transition-colors text-[16px]"
                        />
                      )}
                    </motion.div>
                  )}

                </AnimatePresence>
              </div>

              {/* Navigation Controls */}
              <div className="w-full flex items-center justify-between mt-8 pt-8 border-t border-[#1A1A1A]/10">
                {currentStep >= 0 ? (
                  <button
                    onClick={handleBack}
                    className="text-[15px] font-semibold text-[#1A1A1A]/60 hover:text-[#1A1A1A] transition-colors px-4 py-2 -ml-4"
                  >
                    Back
                  </button>
                ) : (
                  <div></div>
                )}

                <button
                  onClick={handleNext}
                  disabled={!isCurrentQuestionAnswered() || isSubmitting}
                  className={\`flex items-center justify-center min-w-[120px] px-8 py-3.5 rounded-full font-semibold text-[15px] transition-all duration-300 \${
                    isCurrentQuestionAnswered() && !isSubmitting
                      ? 'bg-[#1A1A1A] text-white hover:bg-[#333] shadow-[0_4px_12px_rgba(26,26,26,0.15)] hover:shadow-[0_6px_16px_rgba(26,26,26,0.2)] hover:-translate-y-0.5'
                      : 'bg-[#1A1A1A]/10 text-[#1A1A1A]/40 cursor-not-allowed'
                  }\`}
                >
                  {isSubmitting ? 'Sharing...' : currentStep === (questions.length - 1) ? 'Share My Story' : 'Continue'}
                </button>
              </div>
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};
`
fs.writeFileSync('src/SharePage.tsx', code);
