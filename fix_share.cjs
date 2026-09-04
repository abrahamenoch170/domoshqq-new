const fs = require('fs');
let code = fs.readFileSync('src/SharePage.tsx', 'utf8');

code = code.replace("const CustomRadio = ({ label, selected, onClick }: { label: string; selected: boolean; onClick: () => void }) => (", "const CustomRadio: React.FC<{ label: string; selected: boolean; onClick: () => void }> = ({ label, selected, onClick }) => (");

code = code.replace("const CustomCheckbox = ({ label, selected, onClick }: { label: string; selected: boolean; onClick: () => void }) => (", "const CustomCheckbox: React.FC<{ label: string; selected: boolean; onClick: () => void }> = ({ label, selected, onClick }) => (");

fs.writeFileSync('src/SharePage.tsx', code);
