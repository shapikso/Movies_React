import React from 'react';
import InputLabel from './Label';

const InputField = ({className, label, type='text', name, value, placeholder, onChange }) => {
    const handleChange = (e) => onChange(e.target.value);

    const inputClasses = ['basic-field'];
    if (className) {
        inputClasses.push(className);
    }

    return (
        <>
            {label && <InputLabel htmlFor={name} lable={label}/>}
            <input
                type={type}
                className={inputClasses.join(' ')}
                name={name}
                value={value}
                placeholder={placeholder}
                autoComplete="off"
                onChange={handleChange}
            />
        </>
    );
};

export default InputField;
