/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "verde": "#027333",
        "laranja": "#D96C0D",
        "laranja-2": "#FFB878;"
      }
    },
  },
  plugins: [],
}