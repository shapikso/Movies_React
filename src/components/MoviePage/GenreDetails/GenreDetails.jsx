import React from 'react';

const GenreDetails = ({genres}) => {
    return (
        <div>
            <span className="movie-header">Genres</span>
            <div className="base-gaps" id="genres">
                {genres.map((el) =>
                    <div key={el} className="genres-info info-block-size" id="genres ">
                        {el}
                    </div>)}
            </div>
        </div>
    );
};

export default GenreDetails;
