const fs = require('fs');
let code = fs.readFileSync('src/Header.tsx', 'utf-8');

// replace imports
code = code.replace(/import \{ useWaitlist \} from '\.\/WaitlistContext';\n/, "import { useNavigate } from 'react-router-dom';\n");

// remove openWaitlist from Header
code = code.replace(/const \{ openWaitlist \} = useWaitlist\(\);\n/, "const navigate = useNavigate();\n");

// replace onClick={openWaitlist}
code = code.replace(/onClick=\{openWaitlist\}/g, "onClick={() => navigate('/waitlist')}");

// replace onClick={() => { setIsMenuOpen(false); openWaitlist(); }}
code = code.replace(/onClick=\{\(\) => \{ setIsMenuOpen\(false\); openWaitlist\(\); \}\}/g, "onClick={() => { setIsMenuOpen(false); navigate('/waitlist'); }}");

fs.writeFileSync('src/Header.tsx', code);
