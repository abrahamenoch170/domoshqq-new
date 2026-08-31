const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf-8');

// Replace imports
code = code.replace(/import \{ WaitlistProvider, useWaitlist \} from "\.\/WaitlistContext";\nimport \{ WaitlistModal \} from "\.\/WaitlistModal";\n/, '');
code = code.replace(/import \{ Footer \} from "\.\/Footer";\n/, 'import { Footer } from "./Footer";\nimport { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";\nimport { WaitlistPage } from "./WaitlistPage";\n');

// Update Hero to use navigate
code = code.replace(/const Hero = \(\) => \{\n  const \{ openWaitlist \} = useWaitlist\(\);\n/, 'const Hero = () => {\n  const navigate = useNavigate();\n');
code = code.replace(/<button onClick=\{openWaitlist\}/g, '<button onClick={() => navigate("/waitlist")}');

// Update "See how it works" to scroll to solution
code = code.replace(/<button className="group w-full sm:w-auto flex items-center justify-center gap-2 bg-transparent/g, '<button onClick={() => document.getElementById("solution")?.scrollIntoView({ behavior: "smooth" })} className="group w-full sm:w-auto flex items-center justify-center gap-2 bg-transparent');

// Extract LandingPage component
code = code.replace(/export default function App\(\) \{\n  return \(\n    <WaitlistProvider>\n([\s\S]*?)    <\/WaitlistProvider>\n  \);\n\}/, 
`const LandingPage = () => {
  return (
$1  );
};

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/waitlist" element={<WaitlistPage />} />
      </Routes>
    </BrowserRouter>
  );
}`);

// Remove WaitlistModal from LandingPage
code = code.replace(/        <WaitlistModal \/>\n/g, '');

fs.writeFileSync('src/App.tsx', code);
