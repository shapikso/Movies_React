import React from 'react';

import './MovieCard.scss';

const MovieCard = () => {
    return (
        <div className="MovieCard card" data-movieid="{{movieId}}">
            <div className="card-wrapper">
                <div className="film-poster">
                    <img src="{{backdropPath}}" className="small-poster" alt="poster"/>
                </div>
                <div className="film-description">
                    <div className="film-name">
                        <span>{{title}}</span>
                    </div>
                    <div className="film-duration">
                        <span>{{runtime}}</span>
                    </div>
                </div>
                <div className="film-rate {{typeRate}}">
                    <span>{{movieRate}}</span>
                </div>
            </div>  
        </div>
    );
};

export default MovieCard;
