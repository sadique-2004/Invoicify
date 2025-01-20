/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],          // For body text, general use
        montserrat: ['Montserrat', 'sans-serif'], // For headings or call-to-actions
        merriweather: ['Merriweather', 'serif'],  // For elegant body text or quotes
        openSans: ['Open Sans', 'sans-serif'],    // For clarity in small text or inputs
        workSans: ['Work Sans', 'sans-serif'],    // For professional or modern touch in paragraphs
        oswald: ['Oswald', 'sans-serif'],         // For bold headings or highlights
        muli: ['Muli', 'sans-serif'],             // For light and subtle text
        lato: ['Lato', 'sans-serif'],             // For versatile headings and body

      },
    },
  },
  plugins: [],
}



