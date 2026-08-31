const fs = require('fs');
let code = fs.readFileSync('src/WaitlistPage.tsx', 'utf8');

// Replace the first return block's ending.
code = code.replace("      </div>\n    );\n  }", "      </div>\n      </>\n    );\n  }");

fs.writeFileSync('src/WaitlistPage.tsx', code);
