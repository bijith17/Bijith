/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        mainBg:"#E5CFF7",
        btn:"#5B0888",
        secBg:"#9D76C1",
        underline:"#713ABE",
        txtColor:"#252525"
      },
    },
  },
  plugins: [],
}

