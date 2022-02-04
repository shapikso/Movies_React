import React from 'react';
import PropTypes from 'prop-types';
import {ADULT_FALSE, ADULT_TRUE} from '../../../constants/formatMovie';
import {StyledGapsUl, StyledInfoLi} from './styled';

const MovieDetails = ({adult, hours, minutes, voteAverage}) => (
    <StyledGapsUl>
        <StyledInfoLi>adult: {adult
            ? ADULT_TRUE
            : ADULT_FALSE
        }</StyledInfoLi>
        <StyledInfoLi>{hours}h {minutes}m</StyledInfoLi>
        <StyledInfoLi>movie rate: {voteAverage}</StyledInfoLi>
    </StyledGapsUl>
);

MovieDetails.propTypes = {
    hours: PropTypes.number,
    minutes: PropTypes.number,
    adult: PropTypes.bool,
    voteAverage: PropTypes.number,
};

export default MovieDetails;
