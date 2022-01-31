import './MovieCard.scss';
import React from 'react';
import { URL_IMG } from '../../../constants/api';
import { Link } from 'react-router-dom';
import { formatRuntime, formatRate, getRateState } from '../../../helpers/format';
import MoviePage from "../../MoviePage/MoviePage";
import PropTypes from 'prop-types';

const MovieCard = ({ id, backdropPath, title, runtime, voteAverage }) => {
    const runtimeFormated = formatRuntime(runtime);
    const formatedRate = formatRate(voteAverage);
    const typeRate = getRateState(voteAverage);
    return (
        <Link to={`movie/${id}`} element={<MoviePage props={id}/>}>
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

MovieCard.propTypes = {
    id: PropTypes.number.isRequired,
    backdropPath: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    runtime: PropTypes.number.isRequired,
    voteAverage: PropTypes.number.isRequired,
};

export default MovieCard;
