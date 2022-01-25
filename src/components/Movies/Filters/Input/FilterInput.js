import React from 'react';
import './Input.scss';

const FilterInput = () => {
    return (
        <input type="text" name="movie-title" id="movie-title" placeholder="Search..." className="basic-field" />
    );
};

export default FilterInput;