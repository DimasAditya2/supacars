/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "text-custom-color": "#7D7E82",
      },
    },
  },
  plugins: [],
};
