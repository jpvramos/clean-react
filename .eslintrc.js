module.exports = {
  extends: 'standard-with-typescript',
  parserOptions: {
    project: './tsconfig.json'
  },
  rules: {
    '@typescript-eslint/consistent-type-definition': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off'
  }
}
