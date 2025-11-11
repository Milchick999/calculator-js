module.exports = {
  env: {
    browser: true,
    es2021: true,
  },

  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },

  rules: {
    'no-eval': 'error',
    'no-console': 'off',
    'class-methods-use-this': 'off',
    'no-plusplus': 'off',
    'no-underscore-dangle': 'off',
    'no-param-reassign': ['error', { props: false }],
    'import/extensions': ['error', 'always', { js: 'never' }],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'linebreak-style': 'off',
  },

  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.json'],
      },
      webpack: {
        config: 'webpack.config.js',
      },
    },
  },
};
