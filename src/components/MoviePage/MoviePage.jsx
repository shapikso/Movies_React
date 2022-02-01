import React, {Component} from 'react';
import axios from 'axios';
import './MoviePage.scss';
import MovieDetails from './MovieDetails/MovieDetails';
import GenreDetails from './GenreDetails/GenreDetails';
import OverviewDetails from './OverviewDetails/OverviewDetails';
import Loader from '../common/Loader/Loader';
import {MOVIE_BY_ID, URL_IMG} from '../../constants/api';

class MoviePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            film: [],
            genres: [],
            hours: 0,
            minutes: 0,
            isLoading: true,
        };
    }

    componentDidMount() {
        this.getMovieFromApi();
    }

    getMovieFromApi = async () => {
        try {
            const res = await axios.get(`${MOVIE_BY_ID}${this.props.match.params.id}`);
            this.setState({film: res.data});
            this.formatRuntime();
        }finally {
            this.setState({isLoading: false});
        }
    }

    formatRuntime = () => {
        const hours = Math.floor(this.state.film.runtime / 60);
        const minutes = this.state.film.runtime % 60;
        this.setState({hours: hours, minutes: minutes});
    }


    render() {
        const styles = {
            background: `linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ), url(${URL_IMG + this.state.film.backdrop_path})`,
            backgroundSize: 'cover'
        };
        return (
            <>
                {this.state.isLoading
                    ? <Loader />
                    :
                    <div className='container movie-wrapper'>
                        <div className='title'>
                            <span>{this.state.film.title}</span>
                        </div>
                        <div className='movie-details' style={styles}>
                            <MovieDetails film={this.state.film} hours={this.state.hours} minutes={this.state.minutes}/>
                            <GenreDetails genres={this.state.film.name}/>
                            <OverviewDetails overview={this.state.film.overview}/>
                        </div>
                    </div>
                }
            </>
        );
    }
}

export default MoviePage;
