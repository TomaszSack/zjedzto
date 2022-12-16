/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-orange": "#FE9305",
        "secondary-orange": "rgba(254, 147, 5, 0.5)",
        "primary-pink": "#F562BE",
        "secondary-pink": "rgba(245, 99, 187, 0.7)",
        "primary-gray": "#A59E95",
        "primary-white": "#f9f9f9",
      },
      boxShadow: {
        nav: "0 0px 25px 0px rgba(0, 0, 0, 0.3)",
      },
      zIndex: {
        'minus': "-5",
      },
    },
  },
  plugins: [],
};
