// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt().override('nuxt/vue/rules', {
  rules: {
    'vue/html-self-closing': 'off',
  },
}).override('nuxt/typescript/rules', {
  rules: {
    '@typescript-eslint/no-explicit-any': 'warn',
  },
})
