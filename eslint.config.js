export default [
  {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'prettier'],
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended',
    ],
    rules: {
      'no-console': 'warn',
    },
    ignores: [
      'node_modules',
      'dist',
      'build',
      '/*.js', // Ignora todos os arquivos .js na raiz do projeto
    ],
  },
];
