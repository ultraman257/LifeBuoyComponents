import './style.css';
import * as PropTypes from 'prop-types';
import {useState} from "react";

export const TextInput = ({
    placeholder,
    value,
    label,
    helpText,
    errorText,
    isError,
    setValue,
    name,
    overrideType = 'text'
}) => {

    const [stateValue, setStateValue] = useState('');
    // Notify the parent of the change only if the event has a change.
    const handleChangeEvent = e => {

        if (!Object.prototype.hasOwnProperty.call(e, 'target') || !Object.prototype.hasOwnProperty.call(e.target, 'value')) return;

        setStateValue(e.target.value);
        setValue(e.target.value);
    };

    return (
        <div>
            <label form={name} className={errorText || isError ? 'input-error' : null}>
                {label}
                {errorText ? <span className={'errorText'}>{errorText}</span> : null}
                {helpText ? <span className={'helpText'}>{helpText}</span> : null}
                <input
                    type={overrideType}
                    name={name}
                    placeholder={placeholder}
                    value={stateValue}
                    onChange={handleChangeEvent}
                />
            </label>
        </div>
    );
};

TextInput.propTypes = {
    placeholder: PropTypes.string,
    value: PropTypes.string,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    helpText: PropTypes.string,
    isError: PropTypes.bool,
    errorText: PropTypes.string,
    overrideType: PropTypes.string,
    setValue: PropTypes.func
};
