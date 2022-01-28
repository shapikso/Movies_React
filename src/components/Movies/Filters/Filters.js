import React, {Component} from 'react';
import './filters.css';
import Select from "./Selector/Select";
import {movieLanguages,movieStatus} from '../../../constants/selectors';
import FilterInput from "./Input/FilterInput";
import DoubleRange from "./DoubleRange/DoubleRange";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from "../../common/Button/Button";

class Filters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            language: '',
            status:  '',
            release_date_first: '',
            release_date_last: '',
            budget_min: 0,
            budget_max: 500000000,
            popularity_min: 0,
            popularity_max: 200,
            revenue_min: 0,
            revenue_max: 30000,
            isResetDisabled: true
        };
    }
    setBudget = (minBudget, maxBudget) => this.setState({budget_min: minBudget,budget_max: maxBudget});
    setPopularity = (minPopularity, maxPopularity) => this.setState({ popularity_min: minPopularity, popularity_max: maxPopularity});
    setVote = (minVote, maxVote) => this.setState({revenue_min: minVote,revenue_max: maxVote});
    setLanguage = (language) => this.setState({language: language});
    setStatus = (status) => this.setState({status: status});
    setSearchTitle = (title) => this.setState({title: title});
    setMinDate = (date) => this.setState({release_date_first: date});
    setMaxDate = (date) => this.setState({release_date_last: date});

    getUrl = () => {
        let result = `http://localhost:3001/movies?`;
        Object.entries(this.state).forEach((element) => {
            if (element[1] !== '' && element[0] !== 'isResetDisabled') {
                result += `&${element[0]}=${element[1].toString().replace(/,/g, '').replace(/ /g, '%20')}`;
            }
        });
        return result;
    };

 formSubmitHandler = () => {
     localStorage.setItem('isFiltersApply', 'true');
     localStorage.setItem('filtersURL', this.getUrl());
     localStorage.removeItem('moviesPages');
     this.props.closeModal();
     this.props.onSubmite();
     this.setState({isResetDisabled: false});
 };

formResetHandler = () => {
    localStorage.removeItem('isFiltersApply');
    localStorage.removeItem('filtersURL');
    localStorage.removeItem('moviesPages');
    this.props.closeModal();
    this.props.onSubmite();
    this.setState({isResetDisabled: true});
};

render() {
    return (
        <form id="filters" name="filters" className="form-filters frosted-glass-effect" action="#">
            <div className="form-filters__header">
                <FilterInput value={this.state.title} setSearchTitle={this.setSearchTitle} />
                <Select setDelector={this.setStatus} options={movieStatus} />
                <Select setDelector={this.setLanguage} options={movieLanguages} />
            </div>
            <div className="form-filters__ranges">
                <DoubleRange setRange={this.setBudget}
                    title="Budget, $"
                    step="100000"
                    minValue="0"
                    maxValue="500000000"
                    maxInputValue={this.state.budget_max}
                    minInputValue={this.state.budget_min}
                />
                <DoubleRange setRange={this.setPopularity}
                    title="Popularity"
                    step="1" minValue="0"
                    maxValue="200"
                    maxInputValue={this.state.popularity_max}
                    minInputValue={this.state.popularity_min}
                />
                <DoubleRange setRange={this.setVote}
                    title="Vote count"
                    step="1"
                    minValue="0"
                    maxValue="30000"
                    maxInputValue={this.state.revenue_max}
                    minInputValue={this.state.revenue_min}
                />
            </div>
            <div className="form-filters__release-date">
                <div id="release-date-first" className="form-filters__release-date__item date-picker">
                    <DatePicker selected={this.state.release_date_first}
                        onChange={(date) => this.setMinDate(date)}
                        placeholderText="Select Date.."
                        className="basic-field date-picker__input" />
                </div>
                <div id="release-date-last" className="form-filters__release-date__item date-picker">
                    <DatePicker selected={this.state.release_date_last}
                        onChange={(date) => this.setMaxDate(date)}
                        placeholderText="Select Date.."
                        className="basic-field date-picker__input" />
                </div>
            </div>
            <div className="form-filters__buttons">
                <Button onClick={this.formSubmitHandler} type="submit" className="basic-btn" contentKey ="Submit"/>
                <Button onClick={this.props.closeModal} className="basic-btn" contentKey ="Close"/>
                <Button onClick={this.formResetHandler} type="reset" className="basic-btn"  contentKey="Reset"/>
            </div>
        </form>
    );
}
}

export default Filters;