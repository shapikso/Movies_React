import React from 'react';
import InputLabel from './Label';
import Error from './Error';

const InputField = ({
    className,
    label,
    type = 'text',
    value,
    placeholder,
    onChange,
    error,
    readOnly = false,
    onBlur,
}) => {
    const handleChange = (e) => onChange(e.target.value);
    const handleBlur = (e)=>onBlur(e.target.value);

    const inputClasses = ['basic-field'];
    if (className) inputClasses.push(className);
    if(error) inputClasses.push('error');

    return (
        <div className="relative-wrapper">
            {label && <InputLabel htmlFor={label} lable={label}/>}
            <input
                type={type}
                className={inputClasses.join(' ')}
                name={label}
                value={value}
                placeholder={placeholder}
                readOnly={readOnly}
                autoComplete="off"
                onChange={handleChange}
                onBlur={handleBlur}
            />
            {error && <Error message={error}/>}
        </div>
    );
};

export default InputField;

