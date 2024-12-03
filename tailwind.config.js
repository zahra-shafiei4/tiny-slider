/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "*.{html,js}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

// npx tailwindcss -i ./disc/input.css -o ./disc/app.css --watch