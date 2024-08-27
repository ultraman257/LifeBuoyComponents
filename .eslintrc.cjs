// eslint-disable-next-line no-undef
module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true
    },
    extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:prettier/recommended'],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: ['react', 'prettier'],
    rules: {
        'no-unused-vars': 'error',
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 'off',
        'no-undef': 'off',
        'prettier/prettier': ['error'],
        'import/no-webpack-loader-syntax': 'off'
    },
    settings: {
        react: {
            version: 'detect'
        }
    }
};
