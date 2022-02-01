import './Button.scss';
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ type = 'button', isDisabled = false, className, onClick, contentKey }) => {
    const btnClasses = ['button'];
    if (className) {
        btnClasses.push(className);
    }
    const handleClick = () => onClick(event);
    return (
        <button className={btnClasses.join(' ')} type={type} onClick={handleClick} disabled={isDisabled}>
            {contentKey}
        </button>
    );
};

Button.propTypes = {
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    className: PropTypes.string,
    isDisabled: PropTypes.bool,
    onClick: PropTypes.func,
    contentKey: PropTypes.string.isRequired,
};

export default Button;
