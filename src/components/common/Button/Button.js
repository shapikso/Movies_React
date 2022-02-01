import './Button.scss';
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
    type = 'button',
    isDisabled = false,
    isLoading=false,
    className,
    onClick,
    contentKey,
    loader,
}) => {
    const btnClasses = ['button'];
    if (className) {
        btnClasses.push(className);
    }
    const handleClick = () => onClick();
    return (
        <button
            className={btnClasses.join(' ')}
            type={type}
            onClick={handleClick}
            disabled={isDisabled || isLoading}
        >
            {isLoading ? loader : contentKey}
        </button>
    );
};

Button.propTypes = {
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    className: PropTypes.string,
    isDisabled: PropTypes.bool,
    isLoading: PropTypes.bool,
    onClick: PropTypes.func,
    contentKey: PropTypes.oneOfType([PropTypes.string, PropTypes.obj]),
    loader: PropTypes.element.isRequired
};

export default Button;
