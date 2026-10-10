import type { Config } from 'tailwindcss';
const config: Config = { content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'], theme: { extend: { colors: { pine: '#254C45', sage: '#DDE8DD', cream: '#F8F5EF', clay: '#C67D63', ink: '#253631' }, fontFamily: { sans: ['Arial', 'Helvetica', 'sans-serif'] } } }, plugins: [] };
export default config;
