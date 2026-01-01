import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'
import typography from '@tailwindcss/typography'

export default <Config>{
  darkMode: 'class',
  plugins: [typography],
  content: [
    'components/**/*.{vue,ts,tsx}',
    'content/**/*.md',
    'layouts/**/*.vue',
    'pages/**/*.vue',
    'composables/**/*.ts',
    'plugins/**/*.ts',
    'app.vue',
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.stone,
        secondary: colors.teal,
      },
    },
  },
}
