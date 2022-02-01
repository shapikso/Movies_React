import React, { Component } from 'react';
import './films.scss';
import './Movies.scss';
import axios from 'axios';
import Button from '../common/Button/Button';
import MovieCard from './MovieCard/MovieCard';
import { URL_MOVIE, MOVIE_ON_PAGE } from '../../constants/api';
import Loader from '../common/Loader/Loader';
import Filters from './Filters/Filters';
import {normalizeFilters} from '../../helpers/format';


class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            filters: {
                title: '',
                language: '',
                status:  '',
                release_date_first: '',
                release_date_last: '',
                budget_min: 0,
                budget_max: 500000000,
                popularity_min: 0,
                popularity_max: 200,
                revenue_min: 0,
                revenue_max: 30000,
            },
            currentPage: 1,
            isFiltersHidden : true,
            isLoading: true,
        };
    }

    componentDidMount() {
        this.getMovies();
    }

    setFilter = (key,value) => this.setState({filters : {...this.state.filters,[key]: value}});

    toggleFilters = () =>  this.setState({isFiltersHidden: !this.state.isFiltersHidden});
    clearFilters = () => this.setState({  filters: {
        title: '',
        language: '',
        status:  '',
        release_date_first: '',
        release_date_last: '',
        budget_min: 0,
        budget_max: 500000000,
        popularity_min: 0,
        popularity_max: 200,
        revenue_min: 0,
        revenue_max: 30000,
    }})

    getMovies = async (page) => {
        try {
            this.setState({ isLoading: true });
            const { data } = await axios.get(URL_MOVIE,{params: {...normalizeFilters(this.state.filters), page: page || this.state.currentPage, per_page: MOVIE_ON_PAGE}});
            this.setState({movies: [...this.state.movies, ...data], currentPage: this.state.currentPage+1});
        } finally {
            this.setState({ isLoading: false });
        }
    };

    setPage = (page) => this.setState({ currentPage: page });

    loadMore = (page) => {
        this.getMovies(page);
    }

    submitResetFilters = () => {
        this.setState({ currentPage: 1, movies: [] });
        this.loadMore(1);
    }

    render() {
        return (
            <div className="container movie-wrapper">
                <div className="place-right">
                    <Button className="button--short" onClick={this.toggleFilters} contentKey="Filters" />
                </div>
                <div id="movie-list" className="movies">
                    {this.state.isLoading ? (
                        <Loader />
                    ) : this.state.movies.length ?
                        (this.state.movies.map((element) => (
                            <MovieCard
                                key={element.id}
                                id={element.id}
                                backdropPath={element.backdrop_path}
                                title={element.title}
                                runtime={ element.runtime }
                                voteAverage={element.vote_average}
                            />
                        ))) : (
                            <h1>You have no films!</h1>
                        )}
                </div>
                <div className="center">
                    <Button className="button" contentKey="Load More" onClick={this.loadMore} />
                </div>
                <div id="filters-modal" className={this.state.isFiltersHidden ? "filters-modal-box hide" : "filters-modal-box" }>
                    <Filters closeModal={this.toggleFilters}
                        onSubmite={this.submitResetFilters}
                        filters={this.state.filters}
                        setFilter={this.setFilter}
                        clearFilters={this.clearFilters}
                    />
                </div>
            </div>
        );
    }
}

export default Movies;