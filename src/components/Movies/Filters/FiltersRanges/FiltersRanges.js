import React from 'react';
import PropTypes from 'prop-types';
import DoubleRange from '../DoubleRange/DoubleRange';
import {StFilterRow} from "../styled";

const FiltersRanges = ({ budgetMax, budgetMin, popularityMax, popularityMin, revenueMax, revenueMin,setFilter}) => {

    const setBudget = (minBudget, maxBudget) => {
        setFilter('budget_min', minBudget);
        setFilter('budget_max', maxBudget);

    };

    const setPopularity = (minPopularity, maxPopularity) => {
        setFilter('popularity_min', minPopularity);
        setFilter('popularity_max', maxPopularity);
    };

    const setVote = (minVote, maxVote) => {
        setFilter('revenue_min', minVote);
        setFilter('revenue_max', maxVote);
    };

    return (
        <StFilterRow>
            <DoubleRange setRange={setBudget}
                title="Budget, $"
                step="100000"
                minValue="0"
                maxValue="500000000"
                maxInputValue={budgetMax}
                minInputValue={budgetMin}
            />
            <DoubleRange setRange={setPopularity}
                title="Popularity"
                step="1" minValue="0"
                maxValue="200"
                maxInputValue={popularityMax}
                minInputValue={popularityMin}
            />
            <DoubleRange setRange={setVote}
                title="Vote count"
                step="1"
                minValue="0"
                maxValue="30000"
                maxInputValue={revenueMax}
                minInputValue={revenueMin}
            />
        </StFilterRow>
    );
};

FiltersRanges.propTypes = {
    budgetMax: PropTypes.number.isRequired,
    budgetMin: PropTypes.number.isRequired,
    popularityMax: PropTypes.number.isRequired,
    popularityMin: PropTypes.number.isRequired,
    revenueMax: PropTypes.number.isRequired,
    revenueMin: PropTypes.number.isRequired,
    setFilter : PropTypes.func.isRequired
};

export default FiltersRanges;