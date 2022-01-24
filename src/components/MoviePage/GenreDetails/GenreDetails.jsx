import React from 'react';

const GenreDetails = ({genres}) => {
    return (
        <div>
            <span className="movie-header">Genres</span>
            <div className="genres-info info-block-size" id="genres ">
                {genres}
            </div>
        </div>
    );
};

export default GenreDetails;
