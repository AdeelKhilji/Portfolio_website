/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        akihi:["Akihibara-eeW3", "sans-serif"],
        akihiHyper:["AkihiHyper", "sans-serif"],
      }
    },
  },
  plugins: [],
}