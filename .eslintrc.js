// eslint-disable-next-line
module.exports = {
    root: true,

    parserOptions: {
        parser: '@babel/eslint-parser',
        requireConfigFile: false,
        ecmaVersion: 8, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module', // Allows for the use of imports
    },

    env: {
        browser: true,
        node: true,
        es6: true,
    },

    // Rules order is important, please avoid shuffling them
    extends: [
        'plugin:vue/essential',
        'plugin:prettier/recommended',
        'eslint:recommended',
        'plugin:react-hooks/recommended',
    ],

    plugins: [
        'react-hooks',
        'import',
    ],

    globals: {
        ga: true,
        cordova: true,
        __statics: true,
        process: true,
        Capacitor: true,
        chrome: true,
    },

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
