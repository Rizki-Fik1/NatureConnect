/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif', 'Cina Geo'], // Menggunakan Poppins sebagai default
      },
    },
  },
  plugins: [],
}

