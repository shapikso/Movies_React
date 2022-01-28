import './Movies.scss';
import React, { Component } from 'react';
import axios from 'axios';
import Button from '../common/Button/Button';
import MovieCard from './MovieCard/MovieCard';
import { URL_MOVIE, MOVIE_ON_PAGE } from '../../constants/api';
import Loader from '../common/Loader/Loader';


class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            currentPage: 1,
            isLoading: true,
        };
    }

    componentDidMount() {
        this.getMovies();
    }

    getMovies = async () => {
        try {
            this.setState({ isLoading: true });
            const { data } = await axios.get(`${URL_MOVIE}?page=${this.state.currentPage}&per_page=${MOVIE_ON_PAGE}`);
            this.setState((prevState) => ({ ...prevState, movies: [...prevState.movies, ...data],currentPage: prevState.currentPage + 1}));
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
                    <Button className="button--short" contentKey="Filters" />
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
                    <Button className="button" contentKey="Load More" onClick={()=> this.loadMore() } />
                </div>
            </div>
        );
    }
}

export default Movies;