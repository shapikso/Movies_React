import React, { Component } from 'react';
import Button from '../common/Button/Button';

class Movies extends Component {
    render() {
        return (
            <div>
                <h1>Movies</h1>
                <Button contentKey ="Load More"/>
            </div>
        );
    }
}

export default Movies;