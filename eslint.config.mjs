import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default [
  {
    files: ['src/**/*.{js,ts}']
  },
  {
    files: ['src/**/*.js'],
    languageOptions: {sourceType: 'commonjs'}
  },
  {
    languageOptions: { globals: globals.node }
  },
  {
    ignores: ['dist/', 'eslint.config.mjs', 'webpack.config.js', '.webpack/']
  },
  {
    rules: {
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'line-comment-position': ['error', { 'position': 'above' }],
      'max-len': ['error', { 'code': 120 }],
      'max-lines-per-function': ['error', 140],
      'max-params': ['error', 6],
      'no-magic-numbers': ['error', {
          'ignoreDefaultValues': true,
          'ignoreArrayIndexes': true
      }],
      'no-case-declarations': 'off',
      'sort-imports': ['error', {
        'allowSeparatedGroups': true,
        'ignoreCase': true,
        'ignoreDeclarationSort': false,
        'ignoreMemberSort': false,
        'memberSyntaxSortOrder': ['all', 'single', 'multiple', 'none']
      }],
      'quotes': ['error', 'single']
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  eslintPluginPrettierRecommended
];