import React from 'react';
import {StyledMainDiv, StyledSecondDiv} from './styled';

const Loader = () => (
    <StyledMainDiv>
        <StyledSecondDiv>
            {new Array(4).fill(null).map((_, index) => <div key={index}/>)}
        </StyledSecondDiv>
    </StyledMainDiv>
);

export default Loader;
