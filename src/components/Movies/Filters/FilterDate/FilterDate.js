import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const FilterDate = ({releaseDateFirst, releaseDateLast, setFilter}) => {

    const setMinDate = (date) => setFilter('release_date_first',date);
    const setMaxDate = (date) => setFilter('release_date_last',date);


    return (
        <div className="form-filters__release-date">
            <div className="form-filters__release-date__item date-picker">
                <DatePicker selected={releaseDateFirst}
                    onChange={setMinDate}
                    placeholderText="Select Date.."
                    className="basic-field date-picker__input"/>
            </div>
            <div className="form-filters__release-date__item date-picker">
                <DatePicker selected={releaseDateLast}
                    onChange={setMaxDate}
                    placeholderText="Select Date.."
                    className="basic-field date-picker__input"/>
            </div>
        </div>
    );
};

export default FilterDate;