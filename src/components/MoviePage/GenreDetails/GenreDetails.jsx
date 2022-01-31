import React from 'react';
import PropTypes from 'prop-types';

const GenreDetails = ({genres}) => (
    <div>
        <span className="movie-header">Genres</span>
        <div className="base-gaps">
            {genres.map((el) =>
                <div key={el} className="genres-info info-block-size">
                    {el}
                </div>)}
        </div>
    </div>
);

GenreDetails.propTypes = {
    genres: PropTypes.arrayOf(PropTypes.string),
};

export default GenreDetails;
