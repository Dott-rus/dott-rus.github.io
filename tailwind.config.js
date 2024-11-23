/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#1E1E3F',
        'secondary': '#2f2f71',
        'purple': '#483D8B',
        'accent': '#7C4DFF',
        'card': 'rgba(46, 46, 102, 0.5)'
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '20px'
      },
      scale: {
        '105': '1.05'
      },
      backgroundColor: {
        'card': 'rgba(46, 46, 102, 0.5)'
      }
    },
  },
  plugins: [],
}