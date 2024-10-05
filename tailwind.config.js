/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./*.{html,js}"], // Tambahkan path ini untuk file di root directory
  theme: {
    extend: {
      colors: {
        "text-custom-color": "#7D7E82",
      },
    },
  },
  plugins: [],
};
