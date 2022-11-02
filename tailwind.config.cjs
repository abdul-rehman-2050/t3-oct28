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
      },
    },
  },
  plugins: [require("daisyui")],
};
