import React from 'react';
import {StForm, StFormContainer} from './styled';
import PropTypes from 'prop-types';

const Form = ({ onSubmit, children}) => (
    <StFormContainer>
        <StForm onSubmit={onSubmit}>
            {children}
        </StForm>
    </StFormContainer>
);

Form.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
};

export default Form;