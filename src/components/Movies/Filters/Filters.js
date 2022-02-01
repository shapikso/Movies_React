import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './filters.css';
import FilterHeaders from './FilterHeaders/FilterHeaders';
import FiltersRanges from './FiltersRanges/FiltersRanges';
import FilterDate from './FilterDate/FilterDate';
import FiltersButtons from './FiltersButtons/FiltersButtons';

class Filters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isResetDisabled: true
        };
    }

 formSubmitHandler = () => {
     this.props.closeModal();
     this.props.onSubmite();
     this.setState({isResetDisabled: false});
 };

formResetHandler = () => {
    this.props.clearFilters();
    setTimeout(() => {
        this.props.closeModal();
        this.props.onSubmite();
        this.setState({isResetDisabled: true});
    },1);
};

render() {
    const {title, budget_max, budget_min, popularity_max,popularity_min, revenue_max, revenue_min, release_date_first, release_date_last} = this.props.filters;
    const {setFilter, closeModal} = this.props;
    return (
        <form id="filters" name="filters" className="form-filters frosted-glass-effect" action="#">
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
            <FiltersButtons closeModal={closeModal} formResetHandler={this.formResetHandler} formSubmitHandler={this.formSubmitHandler}/>
        </form>
    );
}
}

Filters.propTypes = {
    closeModal: PropTypes.func.isRequired,
    onSubmite : PropTypes.func.isRequired,
    filters: PropTypes.object.isRequired,
    setFilter: PropTypes.func.isRequired,
    clearFilters: PropTypes.func.isRequired,
};

export default Filters;

