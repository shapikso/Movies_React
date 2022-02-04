import React from 'react';
import PropTypes from 'prop-types';
import {StyledGapsDiv, StyledHeaderSpan, StyledOverviewParagraph} from './styled';

const OverviewDetails = ({overview}) => (
    <div>
        <StyledHeaderSpan>Overview</StyledHeaderSpan>
        <StyledGapsDiv>
            <StyledOverviewParagraph>{overview}</StyledOverviewParagraph>
        </StyledGapsDiv>
    </div>
);

OverviewDetails.propTypes = {
    overview: PropTypes.string,
};

export default OverviewDetails;
