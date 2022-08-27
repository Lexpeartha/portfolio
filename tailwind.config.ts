import { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

export default <Config>{
  darkMode: 'class',
  plugins: [
    require('@tailwindcss/typography')
  ],
  content: [
    'components/**/*.{vue,ts,tsx}',
    'content/**/*.md',
    'layouts/**/*.vue',
    'pages/**/*.vue',
    'composables/**/*.ts',
    'plugins/**/*.ts',
    'app.vue'
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.stone,
        secondary: colors.teal
      }
    }
  }
}
