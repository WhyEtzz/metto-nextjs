/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        c_yellow: "#F4A43C",
        c_green: "#00A164",
        c_lgreen: "#F4F9F3",
        c_shopee: "#EE4D2D"
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    base: false
  }
};
