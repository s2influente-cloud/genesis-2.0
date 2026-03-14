/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        genesis: {
          bg: "#020205",
          accent: "#10b981", // Emerald 500
          accentSoft: "#059669",
          blue: "#3b82f6",
          purple: "#8b5cf6",
          slate: "#0f172a",
          zinc: "#18181b",
          border: "rgba(255,255,255,0.06)",
        },
      },
      boxShadow: {
        soft: "0 20px 50px rgba(0,0,0,0.8)",
        glow: "0 0 40px rgba(16, 185, 129, 0.12)",
        "glow-blue": "0 0 40px rgba(59, 130, 246, 0.12)",
        card: "0 0 0 1px rgba(255, 255, 255, 0.05)",
        "card-hover": "0 0 0 1px rgba(255, 255, 255, 0.1), 0 20px 40px rgba(0,0,0,0.4)",
      },
      borderRadius: {
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      backgroundImage: {
        "grid-dark":
          "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.07) 1px, transparent 0)",
      },
      animation: {
        "float-slow": "float 8s ease-in-out infinite",
        "fade-in-up": "fadeInUp 0.7s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(12px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

