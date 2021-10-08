module.exports = {
  'root': true,
  'env': {
    'browser': true,
    'es2021': true,
    'node': true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  'parserOptions': {
    'ecmaVersion': 12,
    'sourceType': 'module'
  },
  'rules': {
    'indent': ['warn', 2],
    'quotes': ['warn', 'single'],
    'keyword-spacing': ['warn', {
      'after': true
    }],
    'no-constant-condition': [0, false]
  }
};
