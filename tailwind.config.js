/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#d4af37',
        accent: '#f8f8f8',
      },
      fontFamily: {
        serif: ['Times New Roman', 'serif'],
      },
    },
  },
  plugins: [],
}