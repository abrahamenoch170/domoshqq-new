const fs = require('fs');
let code = fs.readFileSync('src/Footer.tsx', 'utf-8');

// replace imports
code = code.replace(/import \{ useWaitlist \} from "\.\/WaitlistContext";\n/, "import { useNavigate } from 'react-router-dom';\n");

// remove openWaitlist
code = code.replace(/const \{ openWaitlist \} = useWaitlist\(\);\n/, "const navigate = useNavigate();\n");

// replace onClick={openWaitlist}
code = code.replace(/onClick=\{openWaitlist\}/g, "onClick={() => navigate('/waitlist')}");

fs.writeFileSync('src/Footer.tsx', code);
