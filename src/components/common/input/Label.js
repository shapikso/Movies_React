import React from 'react';

const InputLabel = ({ label, htmlFor, classNameLabel }) =>
    label && (
        <label htmlFor={htmlFor} className={classNameLabel}>
            {label}
        </label>
    );

export default InputLabel;
