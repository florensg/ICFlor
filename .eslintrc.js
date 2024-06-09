module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true, // Esto habilita las reglas de ESLint para Jest
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'no-undef': 'error',
  },
};
