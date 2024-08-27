import { Header } from '../Header/Header.jsx';
import { useState } from 'react';
import { TextInput } from '../TextInput/TextInput.jsx';
import { Button } from '../Button/Button.jsx';
import * as PropTypes from 'prop-types';

import './style.css';

export const LoginPage = ({ isError = false }) => {
    const [formData, setFormData] = useState({});

    const handleFieldChange = e => {
        const { name, value } = e.target;

        setFormData(data => {
            return { ...data, [name]: value };
        });
    };

    const handleClick = e => {
        console.log(e);
    };

    return (
        <div className={'lifebuoy-page--login'}>
            <Header isLoggedIn={false} />

            <div className={'loginForm'}>
                <h1>Login</h1>
                <TextInput
                    isError={isError}
                    setValue={handleFieldChange}
                    placeholder={'Username'}
                    name={'username'}
                    label={'Username'}
                    value={formData['username']}
                />
                <TextInput
                    isError={isError}
                    setValue={handleFieldChange}
                    placeholder={'Password'}
                    name={'password'}
                    label={'Password'}
                    value={formData['password']}
                    overrideType={'password'}
                />
                <div className={'button-group'}>
                    <Button onClick={handleClick} content={'Login'} />
                    <Button onClick={handleClick} content={'Forgot Password'} />
                </div>
            </div>
        </div>
    );
};

LoginPage.propTypes = {
    isError: PropTypes.bool
};
