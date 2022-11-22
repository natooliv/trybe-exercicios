module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  overrides: [
  ],
  parser:'babel-eslint',
  parserOptions: {
    ecmaVersion: 'latest',
    ecmaFeatures:{
      "jsx":true,
    }
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "react/jsx-filename-extension": 0,
    "react/state-in-constructor": 0,
    "react/forbid-prop-types": 0,
  },
};
