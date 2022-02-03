import React from 'react';
import '../Input/Form.scss';
import {StForm, StFormContainer} from './styled';


const Form = ({ onSubmit, children }) => (
    <StFormContainer>
        <StForm onSubmit={onSubmit}>
            {children}
        </StForm>
    </StFormContainer>
);

export default Form;
