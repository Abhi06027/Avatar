module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
 colors:{
  netflixred:"#F40612",
  goli: "#141414",
  hello: "#303030",
   
 }
 },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
