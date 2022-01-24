import React from 'react';
import '../MoviePage.scss';

const MovieDetails = ({film,hours,minutes}) => {
    return (
        <ul className="base-gaps" id="info">
            <li className="small-info info-block-size">adult: {film.adult
                ? 'true'
                : 'false'
            }</li>
            <li className="small-info info-block-size">{hours}h {minutes}m </li>
            <li className="small-info info-block-size">movie rate: {film.vote_average}</li>
        </ul>
    );
};

export default MovieDetails;
