import React from 'react';
import {StInvalid} from "./styled";

const Error = ({message}) => (
    <StInvalid>
        {message}
    </StInvalid>
);

export default Error;