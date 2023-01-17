/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      '3xl': '2300px',
    },
    extend: {
      colors: {
        "primary-orange": "#FE9305",
        "secondary-orange": "rgba(254, 147, 5, 0.5)",
        "tertiary-orange": "rgba(254, 147, 5, 0.3)",
        "primary-pink": "#F562BE",
        "secondary-pink": "rgba(245, 99, 187, 0.7)",
        "primary-gray": "#A59E95",
        "primary-white": "#f9f9f9",
      },
      boxShadow: {
        nav: "0 0px 25px 0px rgba(0, 0, 0, 0.3)",
      },
      zIndex: {
        "minus": "-5",
      },
      height: {
        "1/18": "5.5%",
        "2/18": "11.1%",
        "3/18": "16.6%",
        "4/18": "22.2%",
        "5/18": "27.7%",
        "6/18": "33.3%",
        "7/18": "38.8%",
        "8/18": "44.4%",
        "9/18": "49.9%",
        "10/18": "55.5%",
        "11/18": "61.1%",
        "12/18": "66.6%",
        "13/18": "72.2%",
        "14/18": "77.7%",
        "15/18": "83.3%",
        "16/18": "88.8%",
        "17/18": "94.4%",
      },
    },
  },
  plugins: [],
};
