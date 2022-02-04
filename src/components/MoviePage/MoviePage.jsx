import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import {StyledMovieDetails, StyledTitle, StyledWrapper} from './styled';
import MovieDetails from './MovieDetails/MovieDetails';
import GenreDetails from './GenreDetails/GenreDetails';
import OverviewDetails from './OverviewDetails/OverviewDetails';
import Loader from '../common/Loader/Loader';
import {MOVIE_BY_ID} from '../../constants/api';
import {formatTime} from '../../helpers/format';

const MoviePage = () => {

    const {id} = useParams();

    const [state, setState] = useState({
        film: [],
        genres: [],
        hours: 0,
        minutes: 0,
        isLoading: true,
    });

    useEffect(() => {getMovieFromApi();}, []);

    const getMovieFromApi = async () => {
        try {
            const {data} = await axios.get(`${MOVIE_BY_ID}${id}`);
            const dates = formatTime(data.runtime);
            setState((prevState) => ({...prevState, film: data, ...dates}));
        } finally {
            setState((prevState) => ({...prevState, isLoading: false}));
        }
    };
    return (
        <>
            {state.isLoading
                ? <Loader/>
                :
                <StyledWrapper>
                    <StyledTitle>
                        <span>{state.film.title}</span>
                    </StyledTitle>
                    <StyledMovieDetails path={state.film.backdrop_path}>
                        <MovieDetails film={state.film} hours={state.hours} minutes={state.minutes}/>
                        <GenreDetails genres={state.film.name}/>
                        <OverviewDetails overview={state.film.overview}/>
                    </StyledMovieDetails>
                </StyledWrapper>
            }
        </>
    );
};

export default MoviePage;