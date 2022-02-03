import React from 'react';
import PropTypes from 'prop-types';
import Select from '../Selector/Select';
import {movieLanguages, movieStatus} from '../../../../constants/selectors';
import Input from '../../../common/Input/InputField';
import {StFilterRow} from "../styled";

const FilterHeaders = ({setFilter, title,}) => {

    const setStatus = (status) => setFilter('status', status);
    const setLanguage = (language) => setFilter('language', language);
    const setSearchTitle = (title) => setFilter('title', title);

    return (
        <StFilterRow>
            <Input value={title}
                placeholder="Search..."
                onChange={setSearchTitle}
                className="movie-title"
            />
            <Select setSelector={setStatus} options={movieStatus}/>
            <Select setSelector={setLanguage} options={movieLanguages}/>
        </StFilterRow>
    );
};

FilterHeaders.propTypes = {
    setFilter: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired
};

export default FilterHeaders;