/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        josefin: ["Josefin Sans"],
        poppins: ["Poppins"]
      },
      colors : {
        customYellow : "#F3F806",
        customBlueLight : "#E8F5FF",
        customBlueDark : "#004F9F",
        lightPink: "#f4f1f1"
      }
       
      
    },
  },
  plugins: [],
}

