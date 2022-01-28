import React from 'react';
import './Input.scss';

const FilterInput = ({setSearchTitle, value}) => {
    const changeHandler = (e) => setSearchTitle(e.target.value);
    return (
        <input onChange={changeHandler} value={value} type="text" name="movie-title" id="movie-title" placeholder="Search..." className="basic-field" />
    );
};

export default FilterInput;