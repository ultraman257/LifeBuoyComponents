import {RegisterPage} from "./RegisterPage.jsx";
import {fn} from "@storybook/test";

import './style.css';

export default {
    title: 'Pages/Register',
    component: RegisterPage,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen'
    },
    args: {
        onLogin: fn()
    }

}

export const Register = {
    args: {
        onRegister: undefined
    }
}

export const RegisterError = {
    args: {
        onRegister: undefined,
        isError: true,
        message: 'An error of some kind occurred.'
    }
}