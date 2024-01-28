/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'contrastAlpha': 'var(--contrast-alpha)',
        'contrast':'var(--contrast)',
        'grey2':'var(--grey2)',
        'grey3':'var(--grey3)',
        'base':'var(--base)',
        'alt':'var(--alt)',
        'red':'var(--red)',
        'accent':'var(--accent)',
        'baseTrans':'var(--baseTrans)',
        'lightgreen':'var(--lightGreen)',

      },
    },
  },
  plugins: [],
}

