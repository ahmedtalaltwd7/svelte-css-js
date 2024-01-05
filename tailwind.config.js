/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,svelte,ts}', 
    'node_modules/preline/dist/*.js'
  ],

 
  theme: {
    extend: {
      backgroundImage: {
        'sea1': 'url("/photo-1615529328331-f8917597711f (1).jpg")',
        'sea2': 'url("/photo-1503177847378-d2048487fa46 (2).jpg")',
        'sea3': 'url("/photo-1524704654690-b56c05c78a00 1.jpg")'
      }
    },
  },
  plugins: [

    require('preline/plugin'),
  ],
}
