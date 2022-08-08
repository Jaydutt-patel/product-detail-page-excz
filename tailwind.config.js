/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./common/**/*.{js,ts,jsx,tsx}",
    "./feature/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xsm: "380px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    minWidth: {
      0: "0px",
      100: "100px",
      200: "200px",
      300: "300px",
      400: "400px",
    },
    minHeight: {
      0: "0px",
      500: "500px",
      full: "100%",
    },
    maxHeight: {
      0: "0px",
      750: "750px",
      full: "100%",
    },
    extend: {
      strokeWidth: {
        5: "5px",
      },
    },
  },
  plugins: [],
};
