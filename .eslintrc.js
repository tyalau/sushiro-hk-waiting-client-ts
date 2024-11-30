module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@stylistic/disable-legacy', // TODO: to be used when adding new rules
    'plugin:@stylistic/recommended-extends',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  plugins: ['@stylistic', '@typescript-eslint', 'import', 'prettier'],
  parser: '@typescript-eslint/parser',
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // @stylistic
    '@stylistic/arrow-parens': ['error', 'always'],
    '@stylistic/brace-style': ['error', '1tbs', { allowSingleLine: true }],
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
    '@stylistic/max-len': ['error', { code: 130, ignoreStrings: true, ignoreTemplateLiterals: true, ignoreComments: true }],
    '@stylistic/member-delimiter-style': [
      'error',
      {
        singleline: { delimiter: 'semi' },
        multiline: { delimiter: 'none' },
      },
    ],
    '@stylistic/multiline-ternary': 0,
    '@stylistic/operator-linebreak': 0,
    '@stylistic/space-in-parens': 0,
    '@stylistic/quote-props': ['error', 'as-needed'],
    '@stylistic/quotes': ['error', 'single', { avoidEscape: true }],

    // @stylistic/jsx
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

    // @typescript-eslint
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-use-before-define': 'error',

    // import
    'import/namespace': ['error', { allowComputed: true }], // TODO: Remove after fixing,
    'import/newline-after-import': 'error',
    'import/no-cycle': 'error',
    'import/no-duplicates': 'error',

    // eslint
    'array-callback-return': 'error',
    'dot-notation': 'error',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-else-return': ['error', { allowElseIf: false }],
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
    'prefer-destructuring': ['error', { object: true }],
    'prefer-regex-literals': 'error',
    'prefer-template': 'error',

    // react
    'react/button-has-type': 'error',
    'react/jsx-boolean-value': 'error',
    'react/jsx-no-useless-fragment': 'error',
    'react/no-array-index-key': 'error',
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    'react/self-closing-comp': 'error',
    'react/state-in-constructor': 'error',

    // prettier
    'prettier/prettier': ['error'],
  },
}
