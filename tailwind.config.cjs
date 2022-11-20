/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-yellow": "#BAA333",
        "bs-primary": "#0d6efd",
        "bs-secondary": "#6c757d",
        "bs-success": "#198754",
        "bs-danger": "#dc3545",
        "bs-warning": "#ffc107",
        "bs-info": "#0dcaf0",
        "dark-purple": "#081A51",
        "sidebar-black": "#1d1d1f",
        "light-white": "rgba(255,255,255,0.17)",
      },
    },
  },
  plugins: [],
};
