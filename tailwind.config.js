/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Syne'", "sans-serif"],
        body:    ["'DM Sans'", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        card:       "var(--card)",
        border:     "var(--border)",
        muted:      "var(--muted)",
        primary: {
          DEFAULT:    "var(--primary)",
          foreground: "var(--primary-fg)",
        },
        secondary:  "var(--secondary)",
        accent:     "var(--accent)",
      },
    },
  },
  plugins: [],
};
