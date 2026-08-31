const fs = require('fs');
let code = fs.readFileSync('src/Footer.tsx', 'utf-8');

if (!code.includes("import { Link } from 'react-router-dom';")) {
  code = code.replace(/import \{ useNavigate \} from 'react-router-dom';/, "import { useNavigate, Link } from 'react-router-dom';");
}

code = code.replace(/<a href="#product"/, '<Link to="/#product"');
code = code.replace(/<a href="#share"/, '<Link to="/#share"');
code = code.replace(/<a href="#partner"/, '<Link to="/partner"');
code = code.replace(/<a href="#about"/, '<Link to="/#about"');
code = code.replace(/<a href="#privacy"/, '<Link to="/#privacy"');
code = code.replace(/<a href="#terms"/, '<Link to="/#terms"');

code = code.replace(/<\/a><\/li>/g, '</Link></li>');

fs.writeFileSync('src/Footer.tsx', code);
console.log("Updated Footer links");
