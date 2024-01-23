/** @type {import('tailwind.css').Config} **/
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {},
    },
    plugins: [],
  }

  module.exports = {
    theme: {
      extend: {
        backgroundImage: {
          '1.png': "url('./images/.1.png')",
        }
      }
    }
  }