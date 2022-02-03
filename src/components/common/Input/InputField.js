import React from 'react';
import InputLabel from './Label';
import Error from './Error';
import {StInput,
    StWrapper} from "./styled";

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
        <StWrapper>
            {label && <InputLabel htmlFor={label} lable={label}/>}
            <StInput
                type={type}
                className={inputClasses.join(' ')}
                name={label}
                value={value}
                placeholder={placeholder}
                readOnly={readOnly}
                autoComplete="off"
                onChange={handleChange}
                onBlur={handleBlur}
                error={error}
            />
            {error && <Error message={error}/>}
        </StWrapper>
    );
};

export default InputField;

