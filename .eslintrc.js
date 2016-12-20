module.exports = {
  'extends': [
    'airbnb',
  ],
  'parser': 'babel-eslint',
  'plugins': [
    'babel'
  ],
  'rules': {
    'new-cap': 0,
    'no-console': 0,
    'generator-star-spacing': 0,
    'babel/generator-star-spacing': 1,
    'space-before-function-paren': ['error', 'always'],
    'no-magic-numbers': ['error', {
      'ignore': [
        0,
        1,
        -1,  // indexOf
        2    // JSON.stringify
      ]
    }],
    'array-bracket-spacing': 'off',
    'max-len': ['warn', 120],
  },
  'env': {
    'browser': true,
  }
};
