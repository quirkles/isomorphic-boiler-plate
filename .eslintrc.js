module.exports = {
  env: {
    'jest/globals': true,
  },
  extends: ['eslint:recommended', 'prettier', 'plugin:react/recommended'], // extending recommended config and config derived from eslint-config-prettier
  parser: 'babel-eslint',
  plugins: ['prettier', 'jest'], // activating eslint-plugin-prettier (--fix stuff)
  rules: {
    'prettier/prettier': [ // customizing prettier rules (unfortunately not many of them are customizable)
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
    eqeqeq: ['error', 'always'], // adding some custom ESLint rules
  },
};