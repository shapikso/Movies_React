import React, { Component } from 'react';
import './movies.scss';
import Button from '../common/Button/Button';
import Filters from './Filters/Filters';

class Movies extends Component {
    constructor(props) {
        super(props);
        this.state ={
            isFiltersHidden : true
        };
    }
    render() {
        return (
            <div className="container movie-wrapper">
                <div className="place-right">
                    <Button contentKey ="Filters"/>
                </div>
                <div id="movie-list" className="movies">

                </div>

                <div className="center">
                    <Button contentKey ="Load More"/>
                </div>
                <div id="filters-modal" className="filters-modal-box ">
                    <Filters/>
                </div>
            </div>
        );
    }
}

export default Movies;