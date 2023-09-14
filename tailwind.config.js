/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "theme-primary": "#5bba47",
        "theme-secondary": "#808080",

      },
      fontFamily: {
        'Sukhumvit': ['SukhumvitSet', 'cursive']
        
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
    }
    
    
  },
 
  
  plugins: [],
}

