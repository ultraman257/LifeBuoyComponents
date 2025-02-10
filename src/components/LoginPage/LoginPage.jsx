import { Header } from '../Header/Header.jsx';
import { useState } from 'react';
import { TextInput } from '../TextInput/TextInput.jsx';
import { Button } from '../Button/Button.jsx';
import * as PropTypes from 'prop-types';

import './style.css';

export const LoginPage = ({ isError = false, handleRegister, handleLogin }) => {

    const [formData, setFormData] = useState({});

    const handleFieldChange = e => {

        if(!e.target) return;

        const { name, value } = e.target;

        let data = { ...formData, [name]: value };

        setFormData(data);

    };

    const handleClick = e => {
        console.log(formData)
        handleLogin(formData);
    };

    return (
        <div className={'lifebuoy-page--login'}>
            <Header isLoggedIn={false} />

            <div className={'loginForm'}>
                <h1>Login</h1>
                <TextInput
                    key={'username'}
                    isError={isError}
                    setValue={handleFieldChange}
                    placeholder={'Username'}
                    name={'username'}
                    label={'Username'}
                    value={formData['username']}
                />
                <TextInput
                    key={'password'}
                    isError={isError}
                    setValue={handleFieldChange}
                    placeholder={'Password'}
                    name={'password'}
                    label={'Password'}
                    value={formData['password']}
                    overrideType={'password'}
                />
                <div className={'button-group'}>
                    <Button onClick={handleClick} hasConfetti={true} content={'Login'} />
                    <Button onClick={handleRegister} content={'Register'} />
                </div>
            </div>
        </div>
    );
};

LoginPage.propTypes = {
    isError: PropTypes.bool,
    handleRegister: PropTypes.func,
    handleLogin: PropTypes.func
};
