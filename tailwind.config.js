/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Rubi',],
    },
    extend: {
      backgroundImage: {
        'light-right-arrow': "url('/assets/svg's/eside-neutral1-right-arrow.svg')",
        'dark-right-arrow': "url('/assets/svg's/eside-neutral1-right-arrow.svg')",
      },variants: {
        fill: ['hover', 'focus'], // this line does the trick
      },
    },
    colors: {
      'eside-Primary-1': '#092A49',
      'eside-Primary-2': '#3A688C',
      'eside-Accent-1-hover': '#f88e45',
      'eside-Accent-1': '#F77F39',
      'eside-Accent-2': '#FABB88',
      'eside-Accent-2-opacity-30': 'rgba(250,187,136,0.3)',
      'eside-Neutral-1': '#242D34',
      'eside-Neutral-2': '#454E55',
      'eside-Neutral-3': '#8D95A0',
      'eside-Neutral-4': '#DEE7EE',
      'eside-Semantic-red': '#D23457',
      'eside-Semantic-yellow': '#EADF25',
      'eside-Semantic-yellow-opacity-10': 'rgba(234,223,37,0.1)',
      'eside-Semantic-green': '#43AF3F',
      'eside-light': 'rgba(250,187,136,0.1)',
      'eside-white': '#FFF',
      'eside-white-hover': '#f6f6f6',
      'eside-black': '#000',
      'eside-bleu-light': '#F3F6F9',
      'eside-black-opacity-35': 'rgba(0,0,0,0.35)',
      'eside-black-opacity-70': 'rgba(0,0,0,0.7)',
      'eside-black-opacity-90': 'rgba(0,0,0,0.9)',
      'eside-commentCaMarche-bg': 'rgba(222,231,238,0.37)',
    },
  },
  plugins: [],
}
