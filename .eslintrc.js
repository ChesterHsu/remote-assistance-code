module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'eslint-config-prettier'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: ['react', '@typescript-eslint', 'prettier'],
    rules: {
        'prettier/prettier': 0,
        'generator-star-spacing': 'off',
        'arrow-parens': 'off',
        'one-var': 'off',
        'import/first': 'off',
        'import/named': 'error',
        'import/namespace': 'error',
        'import/default': 'error',
        'import/export': 'error',
        'import/extensions': 'off',
        'import/no-unresolved': 'off',
        'import/no-extraneous-dependencies': 'off',
        'prefer-promise-reject-errors': 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'indent': 'off',
        'no-trailing-spaces': 0,
        'space-before-function-paren': [0, 'always'],
        'no-multiple-empty-lines': 'off',
        'no-multi-spaces': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': ['warn', {
            'additionalHooks': '(useMyCustomHook|useMyOtherCustomHook)'
        }]
    },
};
