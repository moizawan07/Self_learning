/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors:{
       primary: "rgb(var(--primary) / <alpha-value>)",
        secondary: "rgb(var(--secondary) / <alpha-value>)",
        background: "rgb(var(--background) / <alpha-value>)",
        textPrimary: "rgb(var(--text-primary) / <alpha-value>)",
        textSecondary: "rgb(var(--text-secondary) / <alpha-value>)",
        danger: "rgb(var(--danger) / <alpha-value>)",
      },
      fontFamily:{
         robotoLight: ["Roboto_300Light"],
        robotoLightItalic: ["Roboto_300Light_Italic"],
        nunitoLight: ["Nunito_200ExtraLight"],
        nunitoBold: ["Nunito_600SemiBold"],
        
      }
    },
  },
  plugins: [],
}

