import React from 'react';
import PropTypes from 'prop-types';
import {StButton} from "./styled";

const Button = ({ type = 'button', isDisabled, onClick, contentKey, width, color }) => (
    <StButton type={type} onClick={onClick} disabled={isDisabled} width={width} color={color}>
        {contentKey}
    </StButton>
);

Button.propTypes = {
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    className: PropTypes.string,
    width: PropTypes.string,
    color: PropTypes.string,
    isDisabled: PropTypes.bool,
    onClick: PropTypes.func,
    contentKey: PropTypes.string.isRequired,
};

export default Button;
