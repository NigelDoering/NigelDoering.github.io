module.exports = {
  content: ["./index.html","./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#1f6f78",
          50:"#ecfcf7",100:"#d6f5ec",200:"#b3eadc",300:"#86d8c7",
          400:"#54bead",500:"#2aa597",600:"#1f6f78",700:"#195a61",
          800:"#153e43",900:"#0f2c30",
        },
        skyish: { 400:"#60a5fa", 600:"#2563eb" },
        meadow: { 300:"#a7f3d0", 500:"#10b981" },
        earth: {
          50:"#f7f6f2",   // pastel sand (bg)
          100:"#efeee8",
          200:"#e6e4db",
          300:"#e7e5e4",  // you already had
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