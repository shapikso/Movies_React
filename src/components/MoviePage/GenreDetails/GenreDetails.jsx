import React from 'react';

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

export default GenreDetails;
