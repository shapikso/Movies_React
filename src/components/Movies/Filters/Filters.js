import React from 'react';
import PropTypes from 'prop-types';
import FilterHeaders from './FilterHeaders/FilterHeaders';
import FiltersRanges from './FiltersRanges/FiltersRanges';
import FilterDate from './FilterDate/FilterDate';
import FiltersButtons from './FiltersButtons/FiltersButtons';
import {FILTERS_INIT} from '../../../constants/filters';
import {StClose, StFormFilter} from "./styled";

const Filters = ({
    filters,
    setFilter,
    closeModal,
    onSubmite,
    clearFilters
}) => {
    const {
        title,
        budget_max,
        budget_min,
        popularity_max,
        popularity_min,
        revenue_max,
        revenue_min,
        language,
        status,
        release_date_first,
        release_date_last
    } = filters;
    const formSubmitHandler = () => {
        closeModal();
        onSubmite();
    };

    const formResetHandler = () => {
        clearFilters();
    };
    return (
        <StFormFilter action="#">
            <StClose onClick={closeModal}>x</StClose>
            <FilterHeaders language={language} status={status} title={title} setFilter={setFilter}/>
            <FiltersRanges
                budgetMax={budget_max}
                budgetMin={budget_min}
                popularityMax={popularity_max}
                popularityMin={popularity_min}
                revenueMin={revenue_min}
                revenueMax={revenue_max}
                setFilter={setFilter}
            />
            <FilterDate releaseDateFirst={release_date_first} releaseDateLast={release_date_last} setFilter={setFilter}
            />
            <FiltersButtons
                isResetDisabled={JSON.stringify(filters) === JSON.stringify(FILTERS_INIT)}
                formResetHandler={formResetHandler}
                formSubmitHandler={formSubmitHandler}/>
        </StFormFilter>
    );
};

Filters.propTypes = {
    closeModal: PropTypes.func.isRequired,
    onSubmite : PropTypes.func.isRequired,
    filters: PropTypes.object.isRequired,
    setFilter: PropTypes.func.isRequired,
    clearFilters: PropTypes.func.isRequired,
};

export default Filters;

