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
            searchTitle: '',
            language: '',
            status:  '',
            minDate: '',
            maxDate: '',
            minBudget: 0,
            maxBudget: 500000000,
            minPopularity: 0,
            maxPopularity: 200,
            minVote: 0,
            maxVote: 30000
        };
    }
    setBudget = (minBudget, maxBudget) => this.setState({minBudget: minBudget,maxBudget: maxBudget});
    setPopularity = (minPopularity, maxPopularity) => this.setState({minPopularity: minPopularity,maxPopularity: maxPopularity});
    setVote = (minVote, maxVote) => this.setState({minVote: minVote,maxVote: maxVote});
    setLanguage = (language) => this.setState({language: language});
    setStatus = (status) => this.setState({status: status});
    setSearchTitle = (title) => this.setState({searchTitle: title});
    setMinDate = (date) => this.setState({minDate: date});
    setMaxDate = (date) => this.setState({maxDate: date});

    render() {
        return (
            <form id="filters" name="filters" className="form-filters frosted-glass-effect" action="#">
                <div className="form-filters__header">
                    <FilterInput setSearchTitle={this.setSearchTitle} />
                    <Select setDelector={this.setStatus} options={movieStatus} />
                    <Select setDelector={this.setLanguage} options={movieLanguages} />
                </div>
                <div className="form-filters__ranges">
                    <DoubleRange setRange={this.setBudget}
                        title="Budget, $"
                        step="100000"
                        minValue="0"
                        maxValue="500000000"
                        maxInputValue={this.state.maxBudget}
                        minInputValue={this.state.minBudget}
                    />
                    <DoubleRange setRange={this.setPopularity}
                        title="Popularity"
                        step="1" minValue="0"
                        maxValue="200"
                        maxInputValue={this.state.maxPopularity}
                        minInputValue={this.state.minPopularity}
                    />
                    <DoubleRange setRange={this.setVote}
                        title="Vote count"
                        step="1"
                        minValue="0"
                        maxValue="30000"
                        maxInputValue={this.state.maxVote}
                        minInputValue={this.state.minVote}
                    />
                </div>
                <div className="form-filters__release-date">
                    <div id="release-date-first" className="form-filters__release-date__item date-picker">
                        <DatePicker selected={this.state.minDate}
                            onChange={(date) => this.setMinDate(date)}
                            placeholderText="Select Date.."
                            className="basic-field date-picker__input" />
                    </div>
                    <div id="release-date-last" className="form-filters__release-date__item date-picker">
                        <DatePicker selected={this.state.maxDate}
                            onChange={(date) => this.setMaxDate(date)}
                            placeholderText="Select Date.."
                            className="basic-field date-picker__input" />
                    </div>
                </div>
                <div className="form-filters__buttons">
                    <Button type="submit" className="basic-btn" contentKey ="Submit"/>
                    <Button type="reset" className="basic-btn" isDisabled={true} contentKey="Reset"/>
                </div>
            </form>
        );
    }
}

export default Filters;