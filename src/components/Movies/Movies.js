import React, { Component } from 'react';
import './movies.scss';
import './Movies.scss';
import Button from '../common/Button/Button';
import MovieCard from './MovieCard/MovieCard';
import axios from 'axios';
import { URL_MOVIE, MOVIE_ON_PAGE } from '../../constants/api';
import Loader from '../common/Loader/Loader';
import Filters from "./Filters/Filters";


class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            currentPage: 1,
            isFiltersHidden : true,
            isLoading: true,
        };
    }

    componentDidMount() {
        this.getMovies(this.getCurrentUrl(this.state.currentPage));
    }

    toggleFilters = () =>  this.setState({isFiltersHidden: !this.state.isFiltersHidden});

    getCurrentUrl = (page) => {
        const filtersURL = localStorage.getItem('filtersURL');
        const isFilters = localStorage.getItem('isFiltersApply') === 'true';
        return (isFilters
            ? `${filtersURL}&page=${page}&per_page=${MOVIE_ON_PAGE}`
            : `${URL_MOVIE}?page=${page}&per_page=${MOVIE_ON_PAGE}`);
    };

    getMovies = async (URL) => {
        try {
            this.setState({ isLoading: true });
            const { data } = await axios.get(URL);
            this.setState({movies: [...this.state.movies, ...data], currentPage: this.state.currentPage+1});
        } finally {
            this.setState({ isLoading: false });
        }
    };

    setPage = (page) => this.setState({ currentPage: page });

    loadMore = (page) => {
        console.log( this.state.currentPage);
        console.log(page || this.state.currentPage + 1);
        this.getMovies(this.getCurrentUrl(page || this.state.currentPage));
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
                                backdrop_path={element.backdrop_path}
                                title={element.title}
                                runtime = { element.runtime }
                                vote_average= {element.vote_average}
                            />
                        ))) : (
                            <h1>You have no images!</h1>
                        )}
                </div>
                <div className="center">
                    <Button className="button" contentKey="Load More" onClick={this.loadMore} />
                </div>
                <div id="filters-modal" className={this.state.isFiltersHidden ? "filters-modal-box hide" : "filters-modal-box" }>
                    <Filters closeModal={this.toggleFilters} onSubmite={this.submitResetFilters}/>
                </div>
            </div>
        );
    }
}

export default Movies;