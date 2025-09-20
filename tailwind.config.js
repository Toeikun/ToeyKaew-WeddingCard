/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          pink: "#7e9281",
          rose: "#e2e4dd",
          blush: "#e2e7e1",
        },
      },
      fontFamily: {
        display: ['Great Vibes', 'serif'], // สำหรับหัวข้อ
        body: ['Inter', 'sans-serif'],    // สำหรับเนื้อหา
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
};
