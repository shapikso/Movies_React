import React from 'react';
import InputLabel from '../Label';

class InputField extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    render() {
        return (
            <div className="input-wrapper">
                <InputLabel htmlFor={htmlFor} className={classNameLabel} />
                <input
                    id={id}
                    type={type}
                    name={inputName}
                    value={value}
                    className={classNameInput}
                    placeholder={placeholder}
                    autocomplete="off"
                    onBlur={onBlur?.bind(null, value)}
                    onKeyDown={onKeyDown?.bind(null, value)}
                    icons={icons}
                    onChange={handleChange}
                />
                <ErrorMessage>{error}</ErrorMessage>
            </div>
        );
    }
}

export default InputField;

// const InputField = ({ labelInfo, id, type, name, value, classNameInput, placeholder, onBlur, onKeyDown, icons, error, onChange }) => (
//     <div className="input-wrapper">
//         <InputLabel labelInfo={labelInfo}/>
//         <input
//         id={id}
//         type={type}
//         name={name}
//         value={value}
//         className={classNameInput}
//         placeholder={placeholder}
//         autocomplete='off'
//         onBlur={onBlur?.bind(null, value)}
//         onKeyDown={onKeyDown?.bind(null, value)}
//         icons={icons}
//         onChange={onChange} />
//         <ErrorMessage>{ error }</ErrorMessage>
//     </div>
// );
