const fs = require('fs');
let code = fs.readFileSync('src/Header.tsx', 'utf-8');

code = code.replace(/\{ label: 'Product', href: '#product' \}/, "{ label: 'Product', href: '/#product' }");
code = code.replace(/\{ label: 'Partner with us', href: '#partner' \}/, "{ label: 'Partner with us', href: '/partner' }");
code = code.replace(/\{ label: 'About', href: '#about' \}/, "{ label: 'About', href: '/#about' }");
code = code.replace(/\{ label: 'Privacy', href: '#privacy' \}/, "{ label: 'Privacy', href: '/#privacy' }");
code = code.replace(/\{ label: 'Terms', href: '#terms' \}/, "{ label: 'Terms', href: '/#terms' }");

// Replace motion.a with Link for proper SPA navigation
if (!code.includes("import { Link } from 'react-router-dom';")) {
  code = code.replace(/import \{ useNavigate \} from 'react-router-dom';/, "import { useNavigate, Link } from 'react-router-dom';");
}

code = code.replace(/<motion\.a\n/g, "<motion.div\n");
code = code.replace(/<\/motion\.a>/g, "</motion.div>");
code = code.replace(/href=\{link\.href\}/g, ""); // remove href from motion.div

code = code.replace(/\{link\.label\}\n(\s*)<\/motion\.div>/g, "<Link to={link.href} className=\"w-full h-full text-center\">{link.label}</Link>\n$1</motion.div>");

fs.writeFileSync('src/Header.tsx', code);
console.log("Updated Header navigation");
