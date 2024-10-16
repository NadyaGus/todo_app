module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true },
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:perfectionist/recommended-natural',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'node_modules', 'jest.config.ts', 'jest.setup.ts'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['tsconfig.json', 'tsconfig.node.json', 'tsconfig.app.json', 'jest.config.ts', 'jest.setup.ts'],
    tsConfigRootDir: __dirname,
  },
  plugins: ['@typescript-eslint', 'react-refresh', 'react-compiler'],
  rules: {
    'react-compiler/react-compiler': 'error',
    '@typescript-eslint/consistent-type-exports': 'error',
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowExpressions: true,
      },
    ],
    '@typescript-eslint/no-explicit-any': 'error',
    curly: ['error', 'all'],
    'perfectionist/sort-imports': [
      'error',
      {
        'custom-groups': {
          type: {
            react: ['react', 'react-*', 'react-*/*'],
          },
          value: {
            react: ['react', 'react-*', 'react-*/*'],
          },
        },
        groups: [
          'type',
          'react',
          ['builtin', 'external'],
          'internal-type',
          'internal',
          ['parent-type', 'sibling-type', 'index-type'],
          ['parent', 'sibling', 'index'],
          'object',
          'style',
          'unknown',
        ],
        'internal-pattern': ['@/**'],
        'newlines-between': 'always',
        order: 'asc',
        type: 'natural',
      },
    ],
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        project: ['tsconfig.json', 'tsconfig.node.json', 'tsconfig.app.json'],
      },
      alias: {
        map: [['', './public']],
      },
    },
    react: {
      version: 'detect',
    },
  },
};
