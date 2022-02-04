import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import './date.scss';
import 'react-datepicker/dist/react-datepicker.css';
import {StFilterRow} from "../styled";
import {StDate} from "../DoubleRange/styled";

const FilterDate = ({releaseDateFirst, releaseDateLast, setFilter}) => {

    const setMinDate = (date) => setFilter('release_date_first',date);
    const setMaxDate = (date) => setFilter('release_date_last',date);

    return (
        <StFilterRow>
            <StDate>
                <DatePicker selected={releaseDateFirst}
                    onChange={setMinDate}
                    placeholderText="Select Date.."
                    className="basic-field date-picker__input"/>
            </StDate>
            <StDate>
                <DatePicker selected={releaseDateLast}
                    onChange={setMaxDate}
                    placeholderText="Select Date.."
                    className="basic-field date-picker__input"/>
            </StDate>
        </StFilterRow>
    );
};

FilterDate.propTypes = {
    releaseDateFirst: PropTypes.string.isRequired,
    releaseDateLast : PropTypes.string.isRequired,
    setFilter: PropTypes.func.isRequired
};

export default FilterDate;