import React from 'react';
import PropTypes from 'prop-types';
import {StyledGapsDiv, StyledHeaderSpan, StyledOverviewParagraph} from './styled';

const OverviewDetails = ({overview}) => (
    <>
        <StyledHeaderSpan>Overview</StyledHeaderSpan>
        <StyledGapsDiv>
            <StyledOverviewParagraph>{overview}</StyledOverviewParagraph>
        </StyledGapsDiv>
    </>
);

OverviewDetails.propTypes = {
    overview: PropTypes.string,
};

export default OverviewDetails;
