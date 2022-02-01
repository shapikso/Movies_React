import './Button.scss';
import React from 'react';
import PropTypes from 'prop-types';

import Loader from "../Loader/Loader";

const Button = ({
    type = 'button',
    isDisabled = false,
    isLoading=false,
    className,
    onClick,
    contentKey,
}) => {

    const btnClasses = ['button'];
    if (className) {
        btnClasses.push(className);
    }
    const handleClick = () => onClick(event);
    return (

        <button
            className={btnClasses.join(' ')}
            type={type}
            onClick={handleClick}
            disabled={isDisabled || isLoading}
        >
            {isLoading ? <Loader className={'loader-btn'} /> : contentKey}
        </button>
    );
};

Button.propTypes = {
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    className: PropTypes.string,
    isDisabled: PropTypes.bool,
    isLoading: PropTypes.bool,
    onClick: PropTypes.func,
    contentKey: PropTypes.string,
};

export default Button;
