import React from 'react';
import './Input.scss';

const FilterInput = ({setSearchTitle}) => {
    const changeHandler = (e) => setSearchTitle(e.target.value);
    return (
        <input onChange={changeHandler} type="text" name="movie-title" id="movie-title" placeholder="Search..." className="basic-field" />
    );
};

export default FilterInput;