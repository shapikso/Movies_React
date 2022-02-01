import React from 'react';
import Select from "../Selector/Select";
import {movieLanguages, movieStatus} from "../../../../constants/selectors";
import Input from "../../../common/Input/InputField";

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
            <Select setDelector={setStatus} options={movieStatus}/>
            <Select setDelector={setLanguage} options={movieLanguages}/>
        </div>
    );
};

export default FilterHeaders;