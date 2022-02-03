import React from 'react';
import PropTypes from 'prop-types';
import SelectItem from './SelectItem';
import {StSelect} from "../DoubleRange/styled";

const Select = ({options,setSelector}) => {
    const onChangeHandler = (e)=> setSelector(e.target.value);
    return (
        <StSelect onChange={onChangeHandler}>
            {options.map((el, index) => <SelectItem key={index} value={el[0]} title={el[1]} />)}
        </StSelect>
    );
};

Select.propTypes = {
    options: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
    setSelector : PropTypes.func.isRequired
};

export default Select;