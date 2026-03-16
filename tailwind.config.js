/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          950: "#0a0e27",
          900: "#0f1535",
          800: "#1a1f3a",
        },
        neon: {
          purple: "#a855f7",
          blue: "#0ea5e9",
          pink: "#ec4899",
          green: "#10b981",
        },
      },
      backgroundImage: {
        "gradient-dark": "linear-gradient(135deg, #0a0e27 0%, #1a1f3a 100%)",
        "gradient-neon": "linear-gradient(135deg, #a855f7 0%, #0ea5e9 100%)",
        "gradient-neon-green": "linear-gradient(135deg, #10b981 0%, #0ea5e9 100%)",
        "gradient-card": "linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(14, 165, 233, 0.1) 100%)",
      },
      boxShadow: {
        "glow-purple": "0 0 20px rgba(168, 85, 247, 0.3)",
        "glow-blue": "0 0 20px rgba(14, 165, 233, 0.3)",
        "glow-pink": "0 0 20px rgba(236, 72, 153, 0.3)",
      },
      animation: {
        "float": "float 3s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
      },
    },
  },
  plugins: [],
}
