import { create } from '@storybook/theming/create';

export default create({
    base: 'dark',
    // Typography
    fontBase: '"Open Sans", sans-serif',
    fontCode: 'monospace',

    brandTitle: 'Lifebuoy Design Components',
    brandUrl: 'https://matthewthaskins.com/lifebuoy',
    // brandImage: 'https://storybook.js.org/images/placeholders/350x150.png',
    brandTarget: '_self',

    //
    colorPrimary: '#3A10E5',
    colorSecondary: '#585C6D',

    // UI
    appBg: '#0f0c27',
    appContentBg: '#1d182b',
    appPreviewBg: '#1d182b',
    appBorderColor: '#585C6D',
    appBorderRadius: 4,

    // Text colors
    textColor: '#c4c1da',
    textInverseColor: '#0f0c27',

    // Toolbar default and active colors
    barTextColor: '#9E9E9E',
    barSelectedColor: '#585C6D',
    barHoverColor: '#585C6D',
    barBg: '#1d182b',

    // Form colors
    inputBg: '#1d182b',
    inputBorder: '#10162F',
    inputTextColor: '#c4c1da',
    inputBorderRadius: 2,

    buttonBg: '#110726',
    buttonBorder: '#847cb5',

    booleanBg: '#1d182b',
    booleanSelectedBg: '#847cb5',



});