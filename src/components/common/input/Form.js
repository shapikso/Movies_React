import React from 'react';
import '../input/Form.scss';

const Form = ({ onSubmit, children }) => (
    <div>
        <form onSubmit={onSubmit} className="form frosted-glass-effect">
            {children}
        </form>
    </div>
);

export default Form;
