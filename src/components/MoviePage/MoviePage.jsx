import React, {Component} from 'react';
import axios from "axios";
import './MoviePage.scss';
import MovieDetails from "./MovieDetails/MovieDetails";
import GenreDetails from "./GenreDetails/GenreDetails";
import OverviewDetails from "./OverviewDetails/OverviewDetails";
import Loader from "../common/Loader/Loader";

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
        setTimeout(this.getMovieFromApi, 1000);
    }

    startLoader = () => {
        this.setState({isLoading: true});
    };

    stopLoader = () => {
        this.setState({isLoading: false});
    };

    getMovieFromApi = async () => {
        try {
            this.startLoader();
            const res = await axios.get('http://localhost:3001/movie/?id=13');
            this.setState({film: res.data});
            this.formatRuntime();
        } catch (error) {
            // eslint-disable-next-line no-console
            console.log(error);
        } finally {
            this.stopLoader();
        }
    }

    formatRuntime = () => {
        const hours = Math.floor(this.state.film.runtime / 60);
        const minutes = this.state.film.runtime % 60;
        this.setState({hours: hours, minutes: minutes});
    }


    render() {
        const styles = {
            background: `linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ), url(${'https://image.tmdb.org/t/p/original/' + this.state.film.backdrop_path})`,
            backgroundSize: 'cover'
        };
        return (
            <div>
                {this.state.isLoading
                    ? <Loader/>
                    :
                    <div>
                        <div className="title">
                            <span>{this.state.film.title}</span>
                        </div>
                        <div className="movie-details" style={styles}>
                            <MovieDetails film={this.state.film} hours={this.state.hours} minutes={this.state.minutes}/>
                            <GenreDetails genres={this.state.film.name}/>
                            <OverviewDetails overview={this.state.film.overview}/>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default MoviePage;
