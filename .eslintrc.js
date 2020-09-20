module.exports = {
  env: {
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'prettier'
  ],
  ignorePatterns: ['dist/*', 'node-modules/*'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'prettier/prettier': ['error']
  },
  plugins: [
    'prettier',
    'react'
  ]
}
