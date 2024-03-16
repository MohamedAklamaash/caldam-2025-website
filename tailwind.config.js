/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        rose: {
          DEFAULT: "#cd8987",
          100: "#301514",
          200: "#602a28",
          300: "#913f3c",
          400: "#b95b58",
          500: "#cd8987",
          600: "#d7a2a0",
          700: "#e1b9b8",
          800: "#ebd0d0",
          900: "#f5e8e7",
        },
        black: {
          DEFAULT: "#000000",
          100: "#000000",
          200: "#000000",
          300: "#000000",
          400: "#000000",
          500: "#000000",
          600: "#333333",
          700: "#666666",
          800: "#999999",
          900: "#cccccc",
        },
        gold: {
          DEFAULT: "#deb841",
          100: "#312709",
          200: "#614d11",
          300: "#92741a",
          400: "#c29a22",
          500: "#deb841",
          600: "#e4c566",
          700: "#ebd38d",
          800: "#f2e2b3",
          900: "#f8f0d9",
        },
        salt: {
          DEFAULT: "#f7f7f9",
          100: "#2b2b38",
          200: "#555571",
          300: "#8585a3",
          400: "#bebece",
          500: "#f7f7f9",
          600: "#f8f8fa",
          700: "#fafafb",
          800: "#fcfcfc",
          900: "#fdfdfe",
        },
        magenta: {
          DEFAULT: "#932f6d",
          100: "#1d0916",
          200: "#3b132b",
          300: "#581c41",
          400: "#762557",
          500: "#932f6d",
          600: "#c23f90",
          700: "#d16fac",
          800: "#e19fc7",
          900: "#f0cfe3",
        },
        headingColor:"#081424",
        sponsersBgColor:"#C5D8D1",
        navbg:"#102133"
      },
      screens:{
        'lapsize':'677px'
      }
    },
  },
  plugins: [],
};
