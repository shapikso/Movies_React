import React from 'react';
import PropTypes from 'prop-types';
import Select from '../Selector/Select';
import {movieLanguages, movieStatus} from '../../../../constants/selectors';
import Input from '../../../common/Input/InputField';
import {StFilterRow, StInputWrapper} from "../styled";

const FilterHeaders = ({language, status, setFilter, title,}) => {

    const setStatus = (status) => setFilter('status', status);
    const setLanguage = (language) => setFilter('language', language);
    const setSearchTitle = (title) => setFilter('title', title);

    return (
        <StFilterRow>
            <StInputWrapper>
                <Input value={title}
                    placeholder="Search..."
                    onChange={setSearchTitle}
                />
            </StInputWrapper>
            <Select value={status} setSelector={setStatus} options={movieStatus}/>
            <Select value={language} setSelector={setLanguage} options={movieLanguages}/>
        </StFilterRow>
    );
};

FilterHeaders.propTypes = {
    setFilter: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired
};

export default FilterHeaders;