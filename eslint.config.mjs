// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  ignores: ['dist', 'node_modules', '.output', '.nuxt'],
})
  .override('nuxt/vue/rules', {
    rules: {
      'vue/html-self-closing': 'off',
    },
  })
  .override('nuxt/typescript/rules', {
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  })
