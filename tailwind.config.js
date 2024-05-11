/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope"],
      },
      backgroundImage: {
        "hero-pattern": "url('./assets/image-category-page-preview.jpg')",
      },
    },
  },
  plugins: [require("daisyui")],
};
