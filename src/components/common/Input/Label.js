import React from 'react';

const InputLabel = ({ label, htmlFor }) =>
    (
        <label htmlFor={htmlFor} className='label'>
            {label}{htmlFor}
        </label>
    );

export default InputLabel;
