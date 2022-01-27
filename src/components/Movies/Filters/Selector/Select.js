import React from 'react';
import SelectItem from "./SelectItem";

const Select = ({options,setDelector}) => {
    const clickHandler = (e)=> setDelector(e.target.value);
    return (
        <select onChange={clickHandler} name="movie-status" className="basic-field">
            {options.map((el, index) => <SelectItem key={index} value={el[0]} title={el[1]} />)}
        </select>
    );
};

export default Select;