import React, { Component } from 'react';
import './movies.scss';
//import './Movies.scss';
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
            isFiltersSet: false,
            currentPage: 1,
            isFiltersHidden : true,
            isLoading: true,
        };
    }

    componentDidMount() {
        this.getMovies(this.getCurrentUrl(this.state.currentPage));
    }

    setBudget = (minBudget, maxBudget) => this.setState({filters : {...this.state.filters, budget_min: minBudget,budget_max: maxBudget}});
    setPopularity = (minPopularity, maxPopularity) => this.setState({filters :{...this.state.filters, popularity_min: minPopularity, popularity_max: maxPopularity}});
    setVote = (minVote, maxVote) => this.setState({filters :{...this.state.filters,revenue_min: minVote,revenue_max: maxVote}});
    setLanguage = (language) => this.setState({filters :{...this.state.filters,language: language}});
    setStatus = (status) => this.setState({filters :{...this.state.filters,status: status}});
    setSearchTitle = (title) => this.setState({filters :{...this.state.filters,title: title}});
    setMinDate = (date) => this.setState({filters :{...this.state.filters,release_date_first: date}});
    setMaxDate = (date) => this.setState({filters :{...this.state.filters,release_date_last: date}});

    toggleFilters = () =>  this.setState({isFiltersHidden: !this.state.isFiltersHidden});
    setFilter = (isFiltersSet) => this.setState({isFiltersSet: isFiltersSet})

    getUrl = () => {
        let result = `${URL_MOVIE}?`;
        Object.entries(this.state.filters).forEach((element) => {
            if (element[1] !== '') {
                result += `&${element[0]}=${element[1].toString().replace(/,/g, '').replace(/ /g, '%20')}`;
            }
        });
        return result;
    };

    getCurrentUrl = (page) => {
        return (this.state.isFiltersSet
            ? `${this.getUrl()}&page=${page}&per_page=${MOVIE_ON_PAGE}`
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
                    <Filters closeModal={this.toggleFilters}
                        onSubmite={this.submitResetFilters}
                        setBudget={this.setBudget}
                        setPopularity={this.setPopularity}
                        setVote={this.setVote}
                        setLanguage={this.setLanguage}
                        setStatus={this.setStatus}
                        setSearchTitle={this.setSearchTitle}
                        setMinDate={this.setMinDate}
                        setMaxDate={this.setMaxDate}
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