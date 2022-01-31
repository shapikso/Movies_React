import React from 'react';
import InputLabel from './Label';

const InputField = ({ label, type, name, value, placeholder, onChange }) => {
    const handleChange = (e) => onChange(e.target.value);

    return (
        <div className="input-wrapper">
            {label && <InputLabel htmlFor={name} lable={label}></InputLabel>}
            <input
                type={type}
                name={name}
                value={value}
                placeholder={placeholder}
                autoComplete="off"
                onChange={handleChange}
            />
        </div>
    );
};

export default InputField;
