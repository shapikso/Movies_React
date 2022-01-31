import React from 'react';

const Form = ({ onSubmit, children }) => (
    <div className="form-wrapper">
        <form onSubmit={onSubmit}> 
            {children}
        </form>
    </div>
);

export default Form;
