module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
    rules: {
    'curly': ['error', 'all'],
    'no-console': 'error',
    'no-undef': 'error',
    'no-extra-semi': 'error',
  },
};
