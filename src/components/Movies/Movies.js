import React, { Component } from 'react';
import './movies.scss';
import './Movies.scss';
import Button from '../common/Button/Button';
import Filters from './Filters/Filters';
import MovieCard from './MovieCard/MovieCard';
import axios from 'axios';
import { URL_MOVIE, MOVIE_ON_PAGE } from '../../constants/api';
import Loader from '../common/Loader/Loader';


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
        this.getMovies();
    }

    toggleFilters = (e) =>e.target.classList.contains('filters-modal-box') || e.target.classList.contains('button') ? this.setState({isFiltersHidden: !this.state.isFiltersHidden}) : 0;

    getMovies = async () => {
        try {
            this.setState({ isLoading: true });
            const { data } = await axios.get(`${URL_MOVIE}?page=${this.state.currentPage}&per_page=${MOVIE_ON_PAGE}`);
            this.setState((prevState) => {
                return {
                    ...prevState,
                    movies: [...prevState.movies, ...data],
                    currentPage: prevState.currentPage + 1
                };
            });
        } finally {
            this.setState({ isLoading: false });
        }
    };

    loadMore = () => {
        this.setState({ currentPage: this.state.currentPage + 1 });
        this.getMovies();
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
                    <Button className="button" contentKey="Load More" onClick={()=> this.loadMore() } />
                </div>
                <div id="filters-modal" onClick={this.toggleFilters} className={this.state.isFiltersHidden ? "filters-modal-box hide" : "filters-modal-box" }>
                    <Filters/>
                </div>
            </div>
        );
    }
}

export default Movies;