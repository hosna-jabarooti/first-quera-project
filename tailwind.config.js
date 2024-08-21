
// module.exports = {
//   darkMode: 'class', // or 'media' for OS-based dark mode
//   theme: {
//     extend: {
//       colors: {
//         light: {
//           background: '#ffffff',
//           text: '#333333',
//           primary: '#007BFF',
//           secondary: '#6C757D',
//         },
//         dark: {
//           background: '#1a202c',
//           text: '#e2e8f0',
//           primary: '#3182ce',
//           secondary: '#718096',
//         },
//       },
//     },
//   },
//   plugins: [],
// }

/* <div class="bg-light-background text-light-text dark:bg-dark-background dark:text-dark-text">
  <h1 class="text-light-primary dark:text-dark-primary">Hello, World!</h1>
  <p class="text-light-secondary dark:text-dark-secondary">This is a paragraph.</p>
</div> */
//  #EEF5FF 
// #F8FBFF
// #F9FBFF
// #F8FCFF
tailwind.config = {
  theme: {
    extend: {
      fontSize: {
        'custom-sm': '10px',
      },
      spacing: {
        'custom-ten': '10px',
        // '18': '4.5rem',  // Adds a custom spacing value for 18 (4.5rem)
        // '22': '5.5rem',  // Adds a custom spacing value for 22 (5.5rem)
        // '30': '7.5rem',  // Adds a custom spacing value for 30 (7.5rem)
      },
      height :{
        // '266px': '266px'
      },
    },
  },
  plugins: [],
};