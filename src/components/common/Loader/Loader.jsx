import React from 'react';
import {StyledMainDiv, StyledSecondDiv, StyledThirdDiv} from './styled';

const Loader = () => (
    <StyledMainDiv>
        <StyledSecondDiv>
            {new Array(4).fill(null).map((_, index) => <StyledThirdDiv key={index}/>)}
        </StyledSecondDiv>
    </StyledMainDiv>
);

export default Loader;
