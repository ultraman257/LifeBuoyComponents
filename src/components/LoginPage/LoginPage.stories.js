import {LoginPage} from "./LoginPage.jsx";
import {fn} from "@storybook/test";

import './style.css';

export default {
    title: 'Pages/Login',
    component: LoginPage,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen'
    },
    args: {
        onLogin: fn()
    }

}

export const Login = {
    args: {
        onLogin: undefined
    }
}

export const LoginError = {
    args: {
        onLogin: undefined,
        isError: true,
        message: 'An error of some kind occurred.'
    }
}