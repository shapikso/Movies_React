import React, { Component } from 'react';
import './films.scss';
import './movies.scss';
import axios from 'axios';
import Button from '../common/Button/Button';
import MovieCard from './MovieCard/MovieCard';
import { URL_MOVIE, MOVIE_ON_PAGE } from '../../constants/api';
import Filters from './Filters/Filters';
import { normalizeFilters } from '../../helpers/format';
import { scrollToDownPage } from '../../helpers/scroll';
import {FILTERS_INIT} from '../../constants/filters';
import Loader from '../common/Loader/Loader';

class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            filters: FILTERS_INIT,
            isFiltersSet: false,
            currentPage: 1,
            isFiltersHidden: true,
            isLoading: true,
        };
    }

    componentDidMount() {
        this.getMovies();
    }

    setFilter = (key, value) => this.setState({ filters: { ...this.state.filters, [key]: value } });

    toggleFilters = () => this.setState({ isFiltersHidden: !this.state.isFiltersHidden });
    clearFilters = () =>
        this.setState({
            filters: FILTERS_INIT,
        });

    getMovies = async page => {
        try {
            this.setState({ isLoading: true });
            const { data } = await axios.get(URL_MOVIE, {
                params: {
                    ...normalizeFilters(this.state.filters),
                    page: page || this.state.currentPage,
                    per_page: MOVIE_ON_PAGE,
                },
            });
            this.setState({ movies: [...this.state.movies, ...data], currentPage: this.state.currentPage + 1 });
        } finally {
            this.setState({ isLoading: false });
            setTimeout(scrollToDownPage, 200);
        }
    };

    setPage = page => this.setState({ currentPage: page });

    loadMore = (e,page) => {
        this.getMovies(page);
    };

    submitResetFilters = () => {
        this.setState({ currentPage: 1, movies: [] });
        this.loadMore(1);
    };

    render() {
        return (
            <div className="container movie-wrapper">
                <div className="place-right">
                    <Button className="button--short" onClick={this.toggleFilters} contentKey="Filters" />
                </div>
                <div id="movie-list" className="movies">
                    {this.state.movies.map((element) => (
                        <MovieCard
                            key={element.id}
                            id={element.id}
                            backdropPath={element.backdrop_path}
                            title={element.title}
                            runtime={element.runtime}
                            voteAverage={element.vote_average}
                        />
                    ))}
                </div>
                <div className="center">
                    <Button
                        className="button"
                        isLoading={this.state.isLoading}
                        contentKey="Load more"
                        onClick={this.loadMore}
                    />
                </div>
                <div id="filters-modal" className={this.state.isFiltersHidden ? 'filters-modal-box hide' : 'filters-modal-box'}>
                    <Filters closeModal={this.toggleFilters} onSubmite={this.submitResetFilters} filters={this.state.filters} setFilter={this.setFilter} clearFilters={this.clearFilters} />
                </div>
            </div>
        );
    }
}

export default Movies;
