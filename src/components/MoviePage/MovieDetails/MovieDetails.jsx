import React from 'react';
import PropTypes from 'prop-types';
import {ADULT_FALSE, ADULT_TRUE} from '../../../constants/formatMovie';
import {StyledGapsUl, StyledInfoLi} from './styled';

const MovieDetails = ({film, hours, minutes}) => (
    <StyledGapsUl>
        <StyledInfoLi>adult: {film.adult
            ? ADULT_TRUE
            : ADULT_FALSE
        }</StyledInfoLi>
        <StyledInfoLi>{hours}h {minutes}m</StyledInfoLi>
        <StyledInfoLi>movie rate: {film.vote_average}</StyledInfoLi>
    </StyledGapsUl>
);

MovieDetails.propTypes = {
    hours: PropTypes.number,
    minutes: PropTypes.number,
    film: PropTypes.object,
};

export default MovieDetails;
