import React from 'react';
import SelectItem from "./SelectItem";

const Select = ({options}) => {
    return (
        <select name="movie-status" className="basic-field">
            {options.map((el, index) => <SelectItem key={index} value={el[0]} title={el[1]} />)}

        </select>
    );
};

export default Select;