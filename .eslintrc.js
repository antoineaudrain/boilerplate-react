module.exports = {
  env: {
    es2020: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier', 'react'],
  rules: {
    'prettier/prettier': ['error']
  },
  ignorePatterns: ['dist/*', 'node-modules/*']
}
