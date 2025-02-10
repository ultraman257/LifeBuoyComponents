import {LoginPage, TextInput} from './components/index.js';
import {useState} from "react";

function App() {

    const [usename, setUsername] = useState('');

    const setNameFunction = (e) => {
        setUsername(e.target.value);
    }

    return (
        <>
            <TextInput isError={false} name={'username'} value={usename} setValue={setUsername} label={'Username'} />
        </>
    );
}

export default App;
