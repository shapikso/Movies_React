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
            isResetDisabled: true
        };
    }

 formSubmitHandler = () => {
     this.props.setFilter(true);
     setTimeout(()=>{
         this.props.closeModal();
         this.props.onSubmite();
         this.setState({isResetDisabled: false});
     },50);

 };

formResetHandler = () => {
    this.props.setFilter(false);
    setTimeout(()=>{
        this.props.closeModal();
        this.props.onSubmite();
        this.setState({isResetDisabled: true});
    },50);
};

render() {
    return (
        <form id="filters" name="filters" className="form-filters frosted-glass-effect" action="#">
            <div className="form-filters__header">
                <FilterInput value={this.props.filters.title} setSearchTitle={this.props.setSearchTitle} />
                <Select setDelector={this.props.setStatus} options={movieStatus} />
                <Select setDelector={this.props.setLanguage} options={movieLanguages} />
            </div>
            <div className="form-filters__ranges">
                <DoubleRange setRange={this.props.setBudget}
                    title="Budget, $"
                    step="100000"
                    minValue="0"
                    maxValue="500000000"
                    maxInputValue={this.props.filters.budget_max}
                    minInputValue={this.props.filters.budget_min}
                />
                <DoubleRange setRange={this.props.setPopularity}
                    title="Popularity"
                    step="1" minValue="0"
                    maxValue="200"
                    maxInputValue={this.props.filters.popularity_max}
                    minInputValue={this.props.filters.popularity_min}
                />
                <DoubleRange setRange={this.props.setVote}
                    title="Vote count"
                    step="1"
                    minValue="0"
                    maxValue="30000"
                    maxInputValue={this.props.filters.revenue_max}
                    minInputValue={this.props.filters.revenue_min}
                />
            </div>
            <div className="form-filters__release-date">
                <div id="release-date-first" className="form-filters__release-date__item date-picker">
                    <DatePicker selected={this.props.filters.release_date_first}
                        onChange={(date) => this.props.setMinDate(date)}
                        placeholderText="Select Date.."
                        className="basic-field date-picker__input" />
                </div>
                <div id="release-date-last" className="form-filters__release-date__item date-picker">
                    <DatePicker selected={this.props.filters.release_date_last}
                        onChange={(date) => this.props.setMaxDate(date)}
                        placeholderText="Select Date.."
                        className="basic-field date-picker__input" />
                </div>
            </div>
            <div className="form-filters__buttons">
                <Button onClick={this.formSubmitHandler} className="basic-btn" contentKey ="Submit"/>
                <Button onClick={this.formResetHandler} type="reset" className="basic-btn"  contentKey="Reset"/>
                <span onClick={this.props.closeModal} className="close">x</span>
            </div>
        </form>
    );
}
}

export default Filters;