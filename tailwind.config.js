module.exports = {
  content: ["./index.html","./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Rose: pastel tints (50–300) for surfaces, deeper shades (600+) for readable text/buttons.
        brand: {
          DEFAULT: "#b84a6f",
          50:"#fdf2f5",100:"#fbe4ea",200:"#f7cbd7",300:"#f0a9bd",
          400:"#e6879f",500:"#d4678a",600:"#b84a6f",700:"#993a5b",
          800:"#7a2f49",900:"#5c2437",
        },
        skyish: { 400:"#c4537a", 600:"#993a5b" }, // link colors
        meadow: { 300:"#f7cbd7", 500:"#e6879f" }, // text selection
        earth: {
          50:"#fcf7f8",   // blush (bg)
          100:"#f6eef0",
          200:"#ecdfe3",
          300:"#e7e5e4",
          600:"#57534e",
          900:"#1c1917",
        },
      },
      boxShadow: { soft: "0 8px 30px rgba(0,0,0,0.08)" },
      borderRadius: { xl2: "1.25rem" },
      maxWidth: { screen: "1200px" },
    },
  },
  plugins: [],
};