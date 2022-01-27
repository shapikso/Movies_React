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
    toggleFilters = (e) =>e.target.classList.contains('filters-modal-box') || e.target.classList.contains('button') ? this.setState({isFiltersHidden: !this.state.isFiltersHidden}) : 0;
    render() {
        return (
            <div className="container movie-wrapper">
                <div className="place-right">
                    <Button onClick={this.toggleFilters} contentKey ="Filters"/>
                </div>
                <div id="movie-list" className="movies">

                </div>

                <div className="center">
                    <Button contentKey ="Load More"/>
                </div>
                <div id="filters-modal" onClick={this.toggleFilters} className={this.state.isFiltersHidden ? "filters-modal-box hide" : "filters-modal-box" }>
                    <Filters/>
                </div>
            </div>
        );
    }
}

export default Movies;