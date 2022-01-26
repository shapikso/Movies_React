import React, { Component } from 'react';
import './Movies.scss';
import Button from '../common/Button/Button';

class Movies extends Component {
    render() {
        return (
            <div className="container movie-wrapper">
                <div className="place-right">
                    <Button className="button--short" contentKey="Filters" />
                {/* <button class="basic-btn" id="filter-btn">
                    Filters
                </button> */}
                </div>
                <div id="movie-list" className="movies"></div>

                <div className="center">
                    <Button className="button" contentKey="Load More" />
                {/* <button id="load-more" className="basic-btn" disabled>
                    Load More
                </button> */}
                </div>
            </div>
        );
    }
}

export default Movies;