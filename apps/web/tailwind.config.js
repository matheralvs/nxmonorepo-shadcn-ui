/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',

    '../../libs/ui/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {},
  presets: [require('../../tailwind-workspace-preset.js')],
};
