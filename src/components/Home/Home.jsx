import {Header} from "../Header/Header.jsx";
import {useState} from "react";
import {TextInput} from "../TextInput/TextInput.jsx";
import {Button} from "../Button/Button.jsx";
import PropTypes from "prop-types";

export const Home = ({ isError = false }) => {

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

    return (
        <div className={'lifebuoy-page--home'} >

            <Header isLoggedIn={true} />

            <div className={'loginForm'}>
                <h1>Login</h1>
                <TextInput isError={isError} setValue={handleFieldChange} placeholder={'Username'} name={'username'} label={'Username'} value={formData['username']} />
                <TextInput isError={isError} setValue={handleFieldChange} placeholder={'Password'} name={'password'} label={'Password'} value={formData['password']} overrideType={'password'} />
                <div className={'button-group'}>
                    <Button onClick={handleClick} content={'Login'}/>
                    <Button onClick={handleClick} content={'Forgot Password'}/>
                </div>
            </div>

        </div>
    )


}

Home.PropTypes = {
    user: PropTypes.bool
}