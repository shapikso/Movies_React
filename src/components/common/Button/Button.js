import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

const Button = ({
    type = 'button',
    isDisabled = false,
    className,
    onClick,
    contentKey,
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
            {contentKey}
        </button>
    );
};

Button.propTypes = {
    type: PropTypes.oneOf(['button', 'submit']),
    className: PropTypes.string,
    isDisabled: PropTypes.bool,
    onClick: PropTypes.func,
    contentKey: PropTypes.string.isRequired,
};

export default Button;
