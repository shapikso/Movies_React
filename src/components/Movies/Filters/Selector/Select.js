import React from 'react';
import SelectItem from "./SelectItem";
import PropTypes from "prop-types";

const Select = ({options,setSelector}) => {
    const clickHandler = (e)=> setSelector(e.target.value);
    return (
        <select onChange={clickHandler} name="movie-status" className="basic-field">
            {options.map((el, index) => <SelectItem key={index} value={el[0]} title={el[1]} />)}
        </select>
    );
};

Select.propTypes = {
    options: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
    setSelector : PropTypes.func.isRequired
};

export default Select;