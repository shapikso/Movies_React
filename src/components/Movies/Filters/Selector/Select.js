import React from 'react';
import PropTypes from 'prop-types';
import SelectItem from './SelectItem';

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