import React from 'react';
import Select from "../Selector/Select";
import {movieLanguages, movieStatus} from "../../../../constants/selectors";
import Input from "../../../common/input/InputField";
import PropTypes from "prop-types";

const FilterHeaders = ({setFilter, title}) => {
    const setStatus = (status) => setFilter('status', status);
    const setLanguage = (language) => setFilter('language', language);
    const setSearchTitle = (title) => setFilter('title', title);

    return (
        <div className="form-filters__header">
            <Input value={title}
                placeholder="Search..."
                onChange={setSearchTitle}
                className="movie-title"
            />
            <Select setSelector={setStatus} options={movieStatus}/>
            <Select setSelector={setLanguage} options={movieLanguages}/>
        </div>
    );
};

FilterHeaders.propTypes = {
    setFilter: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired
};

export default FilterHeaders;