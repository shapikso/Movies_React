import PropTypes from 'prop-types';
import React from 'react';
import { URL_IMG } from '../../../constants/api';
import { Link } from 'react-router-dom';
import { formatRuntime, formatRate, getRateState } from '../../../helpers/format';
import MoviePage from "../../MoviePage/MoviePage";
import {GOOD_RATE} from "../../../constants/formatMovie";
import {
    StCard,
    StCardWrapper,
    StDescription,
    StFilmDuration,
    StFilmName,
    StFilmPoster,
    StFilmRate,
    StImg
} from "./styled";


const MovieCard = ({ id, backdropPath, title, runtime, voteAverage }) => {
    const runtimeFormated = formatRuntime(runtime);
    const formatedRate = formatRate(voteAverage);
    const typeRate = getRateState(voteAverage);
    return (
        <Link to={`/movies/${id}`} element={<MoviePage id={id}/>}>
            <StCard>
                <StCardWrapper>
                    <StFilmPoster>
                        <StImg src={URL_IMG+backdropPath} alt="poster" />
                    </StFilmPoster>
                    <StDescription>
                        <StFilmName>
                            <span>{title}</span>
                        </StFilmName>
                        <StFilmDuration>
                            <span>{runtimeFormated}</span>
                        </StFilmDuration>
                    </StDescription>
                    <StFilmRate isGoodRate={typeRate === GOOD_RATE}>
                        <span>{formatedRate}</span>
                    </StFilmRate>
                </StCardWrapper>
            </StCard>
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
