/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}",
    "./index.html"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-light': 'linear-gradient(75deg, rgba(79,70,229,1) 22%, rgba(252,252,252,1) 22%)',
        'gradient-dark': 'linear-gradient(75deg, rgba(79,70,229,1) 22%, rgba(0,0,0,1) 22%)',
      },
    },
  },
  plugins: [],
}

