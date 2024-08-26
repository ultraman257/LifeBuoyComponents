import PropTypes from "prop-types";
import './style.css';

export const TextInput = ({ placeholder, value, label, helpText, errorText, isError, setValue, name, overrideType = 'text' }) => {

    // Notify the parent of the change only if the event has a change.
    const handleChangeEvent = (e) => {

        if(!Object.prototype.hasOwnProperty.call(e, ['target.value'])) return;

        setValue(e.target.value);

    }

    return <div>
        <label form={name} className={errorText || isError ? 'input-error' : null}>
            { label }
            { errorText ? <span className={'errorText'}>{ errorText }</span> : null }
            { helpText ? <span className={'helpText'}>{ helpText }</span> : null }
            <input type={overrideType} name={name} placeholder={placeholder} value={value} onChange={handleChangeEvent}/>
        </label>
    </div>

}

TextInput.propTypes = {
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    helpText: PropTypes.string,
    isError: PropTypes.bool,
    errorText: PropTypes.string,
    overrideType: PropTypes.string,
    setValue: PropTypes.func.isRequired
}