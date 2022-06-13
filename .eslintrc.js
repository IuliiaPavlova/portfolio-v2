module.exports = {
  root: true,
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  plugins: ['import', 'prettier'],
  parserOptions: {
    project: './tsconfig.eslint.json',
  },
  rules: {
    quotes: [2, 'single', { avoidEscape: true }],
    'arrow-body-style': ['error', 'always'],
    'jsx-quotes': [2, 'prefer-single'],
  },
};
