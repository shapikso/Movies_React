import React from 'react';
import '../Input/Form.scss';
import {StForm} from './styled.js';
import {StFormContainer} from "../Input/styled";

const Form = ({ onSubmit, children }) => (
    <StFormContainer>
        <p>fadsf</p>
        <StForm onSubmit={onSubmit}>
            {children}
        </StForm>
    </StFormContainer>
);

export default Form;
