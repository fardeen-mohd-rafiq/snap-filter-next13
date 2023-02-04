/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "text-primary":"#1BC6E0",
        "text-secondary":"#2C4EFE",
        "primary-100":"#fff",
        "primary-200":"#EFEFEF",
        "secondary-100":"#000625",
        "secondary-200":"#13233E"
      },
      height: {
        '85vh': '85vh',
      },
      boxShadow:{
        "3xl": " 0px 5px 15px 0px rgba(44, 78, 254, 0.15)"
      }
    },
  },
  plugins: [],
}