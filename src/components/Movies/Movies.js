import React from 'react';
import axios from 'axios';
import Button from '../common/Button/Button';
import { URL_MOVIE, MOVIE_ON_PAGE } from '../../constants/api';
import Filters from './Filters/Filters';
import { normalizeFilters } from '../../helpers/format';
import { scrollToDownPage } from '../../helpers/scroll';
import { FILTERS_INIT } from '../../constants/filters';
import { StFiltersModal, StMovieWrapper, StPlaceRight } from './styled';
import MoviesMainWrapper from "./MoviesMainWrapper/MoviesMainWrapper";

const Movies = () => {
    const [state, setState] = React.useState({
        movies: [],
        filters: FILTERS_INIT,
        currentPage: 1,
        isFiltersHidden: true,
        isLoading: true,
    });
    React.useEffect(() => getMovies(), []);

    const setFilter = (key, value) =>
        setState((prevState) => ({ ...prevState, filters: { ...prevState.filters, [key]: value } }));
    const toggleFilters = () =>
        setState((prevState) => ({ ...prevState, isFiltersHidden: !prevState.isFiltersHidden }));
    const clearFilters = () => setState((prevState) => ({ ...prevState, filters: FILTERS_INIT }));

    const getMovies = async (page) => {
        try {
            setState((prevState) => ({ ...prevState, isLoading: true }));
            const { data } = await axios.get(URL_MOVIE, {
                params: {
                    ...normalizeFilters(state.filters),
                    page: page || state.currentPage,
                    per_page: MOVIE_ON_PAGE,
                },
            });
            setState((prevState) => ({
                ...prevState,
                movies: [...prevState.movies, ...data],
                currentPage: prevState.currentPage + 1,
            }));
        } finally {
            setState((prevState) => ({ ...prevState, isLoading: false }));
            setTimeout(scrollToDownPage, 200);
        }
    };

    const loadMore = (e, page) => getMovies(page);

    const submitResetFilters = (e) => {
        setState((prevState) => ({ ...prevState, currentPage: 1, movies: [], isFiltersHidden: true }));
        loadMore(e, 1);
    };

    return (
        <StMovieWrapper>
            <StPlaceRight>
                <Button width="100px" onClick={toggleFilters} contentKey="Filters" data-testid="filters-toggler" />
            </StPlaceRight>
            <MoviesMainWrapper movies={state.movies} isLoading={state.isLoading} loadMore={loadMore} />
            <StFiltersModal hidden={state.isFiltersHidden} data-testid="filter-modal">
                <Filters
                    closeModal={toggleFilters}
                    onSubmite={submitResetFilters}
                    filters={state.filters}
                    setFilter={setFilter}
                    clearFilters={clearFilters}
                />
            </StFiltersModal>
        </StMovieWrapper>
    );
};

export default Movies;
