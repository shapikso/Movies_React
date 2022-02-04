import React from 'react';
import PropTypes from 'prop-types';
import './filters.css';
import FilterHeaders from './FilterHeaders/FilterHeaders';
import FiltersRanges from './FiltersRanges/FiltersRanges';
import FilterDate from './FilterDate/FilterDate';
import FiltersButtons from './FiltersButtons/FiltersButtons';
import {StClose, StFormFilter} from "./styled";

const Filters = ({
    filters: {title,
        budget_max,
        budget_min,
        popularity_max,
        popularity_min,
        revenue_max,
        revenue_min,
        release_date_first,
        release_date_last
    },
    setFilter,
    closeModal,
    onSubmite,
    clearFilters
}) => {
    const [isResetDisabled,setIsResetDisabled] = React.useState(true);
    const formSubmitHandler = () => {
        closeModal();
        onSubmite();
        setIsResetDisabled(false);
    };

    const formResetHandler = () => {
        clearFilters();
        setTimeout(() => {
            closeModal();
            onSubmite();
            setIsResetDisabled(true);
        },1);
    };
    return (
        <StFormFilter action="#">
            <StClose onClick={closeModal} className="close">x</StClose>
            <FilterHeaders title={title} setFilter={setFilter}/>
            <FiltersRanges
                budgetMax={budget_max}
                budgetMin={budget_min}
                popularityMax={popularity_max}
                popularityMin={popularity_min}
                revenueMin={revenue_min}
                revenueMax={revenue_max}
                setFilter={setFilter}
            />
            <FilterDate
                releaseDateFirst={release_date_first}
                releaseDateLast={release_date_last}
                setFilter={setFilter}
            />
            <FiltersButtons isResetDisabled={isResetDisabled} formResetHandler={formResetHandler} formSubmitHandler={formSubmitHandler}/>
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

