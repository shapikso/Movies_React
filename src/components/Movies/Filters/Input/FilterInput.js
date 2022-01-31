import React from 'react';

const FilterInput = ({setSearchTitle, value}) => {
    const changeHandler = (e) => setSearchTitle(e.target.value);
    return (
        <input onChange={changeHandler} value={value} type="text"  className="basic-field movie-title" />
    );
};

export default FilterInput;