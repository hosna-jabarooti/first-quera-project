module.exports = {
  content: ["./index.html", "./about-us.html", "./contact-us.html"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'YekanBakh': ['YekanBach', 'Yekan', 'sans-serif']
      },
      fontSize: {
        'custom-sm': '10px',
        'custom-4xl': '40px',
        'custom-14': '14px',
        'custom-15': '15px',
        'custom-28': '28px',
        'custom-32': '32px',
        'custom-46': '46px',
        'custom-28': '28px',
        'custom-50': '50px',
        'custom-64': '64px',
      },
      spacing: {
        'custom-ten': '10px',
        'custom-60': '60px',
        'custom-330': '330px',
        'custom-156': '156px',
        'custom-350': '350px',

      },
      lineHeight: {
        'custom-18': '18px',
        'custom-72': '72px',
        'custom-30': '30px',
        'custom-50': '50px',
        'custom-80': '80px',
        'custom-115': '115px'
      },
      margin: {
        'custom-ten': '10px'
      },
      height: {
        // '266px': '266px'
        'custom-cir': '450px'
      },
      width: {
        'custom-cir': '450px'
      },
      colors: {
        dark: {
          primary: "#3A86F8",
          "primary-hover-dark": "#6BA4FA",
          "main-background": "#040810",
          "on-background-dark": "#E6E9EF",
          "surface-dark": "#E6E9EF",
          "a-dark": "#CFCFCF",
          "a-hover-dark": "#037FFF",
          "text-color": "#ffffff",
          "about-bg": "#122549",
          "card-bg": "#0B192D",
          "about-me-card": "#0E1E34",
          "white-text": "#E6E6E6",
          "custom-gray": "#B5B5B5",
          "light-gray": "#ACACAC",
          "tile-background": "#0E1E34",
          "input-border": "#A1A1A1",
          "copy-right": "#DFDFDF",
          "medium-gray": "#DEDEDE",
          "card-border": "#293242"
        },
      },
      backgroundImage: {
        'dark-gradient': 'linear-gradient(180deg, rgba(2, 103, 255, 0.25) -25.32%, rgba(26, 32, 44, 0) 88.96%)',
        'light-gradient': 'linear-gradient(rgba(235, 243, 255, 1),rgba(255, 255, 255, 1))'
      },
    },
  },
  plugins: [],
};


