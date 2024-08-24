tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      fontSize: {
        'custom-sm': '10px',
        'custom-4xl': '40px',
        'custom-14': '14px',
        'custom-28': '28px',
        'custom-32': '32px',
        'custom-28': '28px',
        'custom-50': '50px',
      },
      spacing: {
        'custom-ten': '10px',
        'custom-60': '60px',
        'custom-330': '330px',
        'custom-156': '156px',

      },
      lineHeight: {
        'custom-72': '72px',
        'custom-30': '30px',
        'custom-82': '82px',
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
          "primary": "#3A86F8",
          "primary-hover-dark": "#6BA4FA",
          "background-dark": "#040810",
          "on-background-dark": "#E6E9EF",
          "surface-dark": "#E6E9EF",
          "a-dark": "#CFCFCF",
          "a-hover-dark": "#037FFF",
          "text-color": "#ffffff",
          "about-bg": "#122549",
          "card-bg": "#0B192D",
          "about-me-card": "#0E1E34",
        },
      },
    },
  },
  plugins: [],
};