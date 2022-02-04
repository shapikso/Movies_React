import React, { useState, useEffect} from 'react';
import axios from 'axios';
import Button from '../common/Button/Button';
import MovieCard from './MovieCard/MovieCard';
import NoData from '../common/NoData/NoData';
import { URL_MOVIE, MOVIE_ON_PAGE } from '../../constants/api';
import Filters from './Filters/Filters';
import { normalizeFilters } from '../../helpers/format';
import { scrollToDownPage } from '../../helpers/scroll';
import {FILTERS_INIT} from '../../constants/filters';
import {StCenter, StFiltersModal, StMovies, StMovieWrapper, StPlaceRight} from "./styled";

const Movies = () => {
    const [state, setState] = useState({
        movies: [],
        filters: FILTERS_INIT,
        isFiltersSet: false,
        currentPage: 1,
        isFiltersHidden: true,
        isLoading: true,
    });
    useEffect(() => getMovies(), []);

    const setFilter = (key, value) => setState( {...state, filters: { ...state.filters, [key]: value }, isFiltersSet: true});
    const toggleFilters = () => setState({...state, isFiltersHidden: !state.isFiltersHidden });
    const clearFilters = () => setState({...state, filters: FILTERS_INIT});

    const getMovies = async page => {
        try {
            setState((prevState) => ({...prevState, isLoading: true }));
            const { data } = await axios.get(URL_MOVIE, {
                params: {
                    ...normalizeFilters(state.filters),
                    page: page || state.currentPage,
                    per_page: MOVIE_ON_PAGE,
                },
            });
            setState((prevState) => ({...prevState, movies: [...prevState.movies, ...data], currentPage: prevState.currentPage + 1 }));
        } finally {
            setState((prevState) => ({...prevState, isLoading: false }));
            setTimeout(scrollToDownPage, 200);
        }
    };

    const loadMore = (e, page) => getMovies(page);

    const submitResetFilters = (e) => {
        setState({...state, currentPage: 1, movies: [], isFiltersHidden: true } );
        loadMore(e,1);
    };

    return (
        <StMovieWrapper>
            <StPlaceRight>
                <Button width="100px" onClick={toggleFilters} contentKey="Filters" />
            </StPlaceRight>
            {(state.movies.length)
                ? <>
                    <StMovies>
                        {state.movies.map((element) => (
                            <MovieCard
                                key={element.id}
                                id={element.id}
                                backdropPath={element.backdrop_path}
                                title={element.title}
                                runtime={element.runtime}
                                voteAverage={element.vote_average}
                            />
                        ))}
                    </StMovies>
                    <StCenter>
                        <Button
                            className="button"
                            isLoading={state.isLoading}
                            contentKey="Load more"
                            onClick={loadMore}
                        />
                    </StCenter>
                </>
                :state.isLoading ? false :<NoData/>}
            <StFiltersModal hidden={state.isFiltersHidden}>
                <Filters
                    closeModal={toggleFilters}
                    onSubmite={submitResetFilters}
                    filters={state.filters}
                    setFilter={setFilter}
                    clearFilters={clearFilters} />
            </StFiltersModal>
        </StMovieWrapper>
    );
};

export default Movies;
