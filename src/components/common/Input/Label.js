import React from 'react';

const InputLabel = ({ label, htmlFor }) =>
    (
        <label htmlFor={htmlFor}>
            {label}{htmlFor}
        </label>
    );

export default InputLabel;
