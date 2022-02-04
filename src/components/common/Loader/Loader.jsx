import React from 'react';
import {StyledSecondDiv, StyledThirdDiv} from './styled';

const Loader = () => (
    <StyledSecondDiv>
        {new Array(4).fill(null).map((_, index) => <StyledThirdDiv key={index}/>)}
    </StyledSecondDiv>
);

export default Loader;
