import React from 'react';
import PropTypes from 'prop-types';
import {StButton} from "./styled";

const Button = ({ type = 'button', isDisabled = false, onClick, contentKey }) => {
    return (
        <StButton type={type} onClick={onClick} disabled={isDisabled}>
            {contentKey}
        </StButton>
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
