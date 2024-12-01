import stylistic from '@stylistic/eslint-plugin'
import typescriptEslint from '@typescript-eslint/eslint-plugin'
import _import from 'eslint-plugin-import'
import prettier from 'eslint-plugin-prettier'
import { fixupPluginRules } from '@eslint/compat'
import tsParser from '@typescript-eslint/parser'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

export default [
  ...compat.extends(
    'eslint:recommended',
    'plugin:@stylistic/disable-legacy',
    'plugin:@stylistic/recommended-extends',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended'
  ),
  {
    plugins: {
      '@stylistic': stylistic,
      '@typescript-eslint': typescriptEslint,
      import: fixupPluginRules(_import),
      prettier,
    },

    languageOptions: {
      parser: tsParser,
      ecmaVersion: 5,
      sourceType: 'script',

      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    settings: {
      react: {
        version: 'detect',
      },
    },

    rules: {
      '@stylistic/arrow-parens': ['error', 'always'],

      '@stylistic/brace-style': [
        'error',
        '1tbs',
        {
          allowSingleLine: true,
        },
      ],

      '@stylistic/comma-dangle': [
        'error',
        {
          arrays: 'always-multiline',
          objects: 'always-multiline',
          imports: 'always-multiline',
          exports: 'always-multiline',
          enums: 'always-multiline',
          functions: 'never',
        },
      ],

      '@stylistic/indent': 0,
      '@stylistic/indent-binary-ops': 0,

      '@stylistic/max-len': [
        'error',
        {
          code: 130,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignoreComments: true,
        },
      ],

      '@stylistic/member-delimiter-style': [
        'error',
        {
          singleline: {
            delimiter: 'semi',
          },

          multiline: {
            delimiter: 'none',
          },
        },
      ],

      '@stylistic/multiline-ternary': 0,
      '@stylistic/operator-linebreak': 0,
      '@stylistic/space-in-parens': 0,
      '@stylistic/quote-props': ['error', 'as-needed'],

      '@stylistic/quotes': [
        'error',
        'single',
        {
          avoidEscape: true,
        },
      ],

      '@stylistic/jsx-curly-newline': 0,
      '@stylistic/jsx-one-expression-per-line': 0,
      '@stylistic/jsx-quotes': ['error', 'prefer-double'],

      '@stylistic/jsx-wrap-multilines': [
        'error',
        {
          declaration: 'parens',
          assignment: 'parens',
          return: 'parens',
          arrow: 'parens',
          condition: 'parens',
          logical: 'parens',
          prop: 'ignore',
        },
      ],

      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
        },
      ],

      '@typescript-eslint/ban-ts-comment': 0,
      '@typescript-eslint/no-explicit-any': 0,
      '@typescript-eslint/no-use-before-define': 'error',

      'import/namespace': [
        'error',
        {
          allowComputed: true,
        },
      ],

      'import/newline-after-import': 'error',
      'import/no-cycle': 'error',
      'import/no-duplicates': 'error',
      'array-callback-return': 'error',
      'dot-notation': 'error',

      'no-console': [
        'warn',
        {
          allow: ['warn', 'error'],
        },
      ],

      'no-else-return': [
        'error',
        {
          allowElseIf: false,
        },
      ],

      'no-lonely-if': 'error',
      'no-multi-assign': 'error',
      'no-negated-condition': 'error',
      'no-param-reassign': 'error',
      'no-return-assign': 'error',
      'no-undef': 0,
      'no-undef-init': 'error',
      'no-unneeded-ternary': 'error',
      'no-unused-expressions': 'error',
      'object-shorthand': 'error',
      'prefer-arrow-callback': 'error',

      'prefer-destructuring': [
        'error',
        {
          object: true,
        },
      ],

      'prefer-regex-literals': 'error',
      'prefer-template': 'error',
      'react/button-has-type': 'error',
      'react/jsx-boolean-value': 'error',
      'react/jsx-no-useless-fragment': 'error',
      'react/no-array-index-key': 'error',
      'react/prop-types': 0,
      'react/react-in-jsx-scope': 0,
      'react/self-closing-comp': 'error',
      'react/state-in-constructor': 'error',
      'prettier/prettier': ['error'],
    },
  },
]
