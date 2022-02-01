import React from 'react';
import '../MoviePage.scss';
import {ADULT_FALSE, ADULT_TRUE} from '../../../constants/formatMovie';
import PropTypes from 'prop-types';

const MovieDetails = ({film, hours, minutes}) => (
    <ul className='base-gaps'>
        <li className='small-info info-block-size'>adult: {film.adult
            ? ADULT_TRUE
            : ADULT_FALSE
        }</li>
        <li className='small-info info-block-size'>{hours}h {minutes}m</li>
        <li className='small-info info-block-size'>movie rate: {film.vote_average}</li>
    </ul>
);

MovieDetails.propTypes = {
    hours: PropTypes.number,
    minutes: PropTypes.number,
    film: PropTypes.object,
};

export default MovieDetails;
