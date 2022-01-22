import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

const Button = ({
    type = 'button',
    isDisabled = false,
    className,
    onClick,
    children,
}) => {
    const btnClasses = ['button'];
    if (className) {
        btnClasses.push(className);
    }
    return (
        <button
            className={btnClasses.join(' ')}
            type={type}
            onClick={onClick}
            disabled={isDisabled}
        >
            {children}
        </button>
    );
};

Button.propTypes = {
    type: PropTypes.oneOf(['button', 'submit']),
    className: PropTypes.string,
    isDisabled: PropTypes.bool,
    onClick: PropTypes.func,
    children: PropTypes.PropTypes.string.isRequired,
};

export default Button;
