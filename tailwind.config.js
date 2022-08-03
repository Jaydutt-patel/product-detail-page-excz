/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./common/**/*.{js,ts,jsx,tsx}",
    "./feature/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        47: "47%",
        49: "49%",
        465: "465px",
      },
      strokeWidth: {
        5: "5px",
      },
    },
  },
  plugins: [],
};
