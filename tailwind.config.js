/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 30s linear infinite",
        "infinite-scroll": "infinite-scroll var(--scroll-speed, 35s) linear infinite",
        "scroll-right": "moveRight var(--scroll-speed, 35s) linear infinite",
      },
      dropShadow: {
        'custom': '0 4px 6px #90C74B',
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" }
        },
        moveRight: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },

      colors: {
        primary: "#90C74B",
        secondary: "#000000",
      },
      screens: {
        sm: "768px", // Mobile breakpoint
        md: "1024px", // Tablet breakpoint
        lg: "1440px", // Laptop breakpoint
      },
    }, // <-- Add this closing brace
  }, // <-- Add this closing brace
  plugins: [require("tailwindcss-animated")],
};
