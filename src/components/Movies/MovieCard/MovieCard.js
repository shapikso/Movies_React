import React from 'react';
import { URL_IMG } from '../../../constants/api';
import { Link } from 'react-router-dom';
import './MovieCard.scss';
import { formatRuntime, formatRate } from '../../../helpers/format';


const MovieCard = ({ id, backdrop_path, title, runtime, vote_average }) => {
    const runtimeFormated = formatRuntime(runtime);
    const formatedRate = formatRate(vote_average);
    return (
        <Link to={`movie/${id}`}>
            <div className="MovieCard card" data-movieid={id}>
                <div className="card-wrapper">
                    <div className="film-poster">
                        <img src={URL_IMG+backdrop_path} className="small-poster" alt="poster" />
                    </div>
                    <div className="film-description">
                        <div className="film-name">
                            <span>{title}</span>
                        </div>
                        <div className="film-duration">
                            <span>{runtimeFormated}</span>
                        </div>
                    </div>
                    <div className="film-rate {{typeRate}}">
                        <span>{formatedRate}</span>
                    </div>
                </div>
            </div>
        </Link >
    );
};

export default MovieCard;
