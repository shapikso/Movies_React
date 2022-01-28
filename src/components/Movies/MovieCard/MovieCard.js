import './MovieCard.scss';
import React from 'react';
import { URL_IMG } from '../../../constants/api';
import { Link } from 'react-router-dom';
import { formatRuntime, formatRate, getRateState } from '../../../helpers/format';

const MovieCard = ({ id, backdropPath, title, runtime, voteAverage }) => {
    const runtimeFormated = formatRuntime(runtime);
    const formatedRate = formatRate(voteAverage);
    const typeRate = getRateState(voteAverage);
    return (
        <Link to={`movie/${id}`}>
            <div className="movie-card card">
                <div className="card-wrapper">
                    <div className="film-poster">
                        <img src={URL_IMG+backdropPath} className="small-poster" alt="poster" />
                    </div>
                    <div className="film-description">
                        <div className="film-name">
                            <span>{title}</span>
                        </div>
                        <div className="film-duration">
                            <span>{runtimeFormated}</span>
                        </div>
                    </div>
                    <div className={`film-rate ${typeRate}`}>
                        <span>{formatedRate}</span>
                    </div>
                </div>
            </div>
        </Link >
    );
};

export default MovieCard;
