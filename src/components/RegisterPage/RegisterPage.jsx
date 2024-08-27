import {Header} from "../Header/Header.jsx";
import {useState} from "react";
import {TextInput} from "../TextInput/TextInput.jsx";
import {Button} from "../Button/Button.jsx";
import * as PropTypes from "prop-types";

export const RegisterPage = ({ onRegister, isError = false }) => {

    const [formData, setFormData] = useState({})

    const handleFieldChange = (e) => {

        const { name, value } = e.target;

        setFormData((data) => {
            return {...data, [name]: value}
        });

    }

    const handleClick = (e) => {

        console.log(e)

    }

    const superMenu = <>
        <a href={'#'} className={'superMenu-item'}>
            <h4>Admin Reset</h4>
            <p>An alternative way to reset an account password. Refer to console for more information.</p>
        </a>
    </>

    return (
        <div className={'lifebuoy-page--login'}>

            <Header superMenuOverride={superMenu} isLoggedIn={false} />

            <div className={'loginForm'}>
                <h1>Register</h1>
                <TextInput isError={isError} setValue={handleFieldChange} placeholder={'Email'} name={'email'} label={'Email'} value={formData['email']} helpText={''} />
                <TextInput isError={isError} setValue={handleFieldChange} placeholder={'Display Name'} name={'displayName'} label={'Display Name'} value={formData['displayName']} helpText={'What do you want us to call you?'} />
                <TextInput isError={isError} setValue={handleFieldChange} placeholder={'Password'} name={'password'} label={'Password'} value={formData['password']} overrideType={'password'} helpText={'Choose a strong password.'}/>
                <TextInput isError={isError} setValue={handleFieldChange} placeholder={'Password Confirmation'} name={'password'} label={'Password Confirmation'} value={formData['password']} overrideType={'password'} helpText={'Enter your password again to make sure it\'s correct.'}/>
                <div className={'button-group'}>
                    <Button onClick={handleClick} content={'Register'}/>
                    <Button onClick={handleClick} content={'Back to Login'}/>
                </div>
            </div>

        </div>
    )


}

RegisterPage.PropTypes = {
    isError: PropTypes.bool
}