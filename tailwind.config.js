module.exports = {
  darkMode: false,
  theme: {
    transitionDuration: {
      DEFAULT: '200ms',
    },
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#FFF',
      dark: '#00004C',
      light: '#F3F3F6',
      gray: '#4B4B4B',
      orange: '#E7793D',
      red: '#DD3C45',
      yellow: '#F9BC32',
      green: '#43AD67',
      blue: '#447DD9',
      'light-blue': '#F5FBFF',
    },
    extend: {
      height: {
        'fit': 'fit-content',
        '18': '4.5rem',
      },
      width: {
        'fit': 'fit-content',
        '18': '4.5rem',
      },
      screens: {
        'portrait': { 'raw': '(orientation: portrait)' },
      },
    }
  },
  variants: {
  },
  plugins: [],
}
