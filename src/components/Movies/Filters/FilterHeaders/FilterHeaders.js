import React from 'react';
import FilterInput from "../Input/FilterInput";
import Select from "../Selector/Select";
import {movieLanguages, movieStatus} from "../../../../constants/selectors";


const FilterHeaders = ({setFilter, title}) => {

    const setStatus = (status) => setFilter('status', status);
    const setLanguage = (language) => setFilter('language', language);
    const setSearchTitle = (title) => setFilter('title', title);

    return (
        <div className="form-filters__header">
            <FilterInput value={title} setSearchTitle={setSearchTitle}/>
            <Select setDelector={setStatus} options={movieStatus}/>
            <Select setDelector={setLanguage} options={movieLanguages}/>
        </div>
    );
};

export default FilterHeaders;