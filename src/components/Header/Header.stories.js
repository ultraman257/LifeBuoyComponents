import { Header } from './Header.jsx';
import { fn } from '@storybook/test';

export default {
    title: 'LifeBuoy/Header',
    component: Header,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
        layout: 'fullwidth'
    },
    args: {
        onLogin: fn(),
        onLogout: fn(),
        onCreateAccount: fn()
    }
};

export const NotLoggedIn = {
    args: {
        isLoggedIn: false
    }
};

export const LoggedIn = {
    args: {
        isLoggedIn: true,
        user: {
            name: 'Matt'
        }
    }
};
