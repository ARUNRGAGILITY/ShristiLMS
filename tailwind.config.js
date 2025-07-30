/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./js/*.js",
    "./courses/**/*.js",
    "./quiz/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        // Sea theme colors
        'sea': {
          'background': '#e0f7fa',
          'surface': '#b2ebf2',
          'surface-light': '#80deea',
          'text-primary': '#01579b',
          'text-secondary': '#0277bd',
          'border': '#4dd0e1',
          'accent-primary': '#00acc1',
          'accent-secondary': '#00bcd4',
        },
        // Earth theme colors
        'earth': {
          'background': '#f1f8e9',
          'surface': '#c5e1a5',
          'surface-light': '#aed581',
          'text-primary': '#33691e',
          'text-secondary': '#558b2f',
          'border': '#8bc34a',
          'accent-primary': '#8bc34a',
          'accent-secondary': '#9ccc65',
        },
        // Sunset theme colors
        'sunset': {
          'background': '#fff3e0',
          'surface': '#ffe0b2',
          'surface-light': '#ffcc80',
          'text-primary': '#e65100',
          'text-secondary': '#c62828',
          'border': '#ffab91',
          'accent-primary': '#ff7043',
          'accent-secondary': '#ab47bc',
        }
      },
      transitionProperty: {
        'all': 'all',
      },
      transitionDuration: {
        '300': '300ms',
      },
      transitionTimingFunction: {
        'ease': 'ease',
      }
    },
  },
  plugins: [],
} 