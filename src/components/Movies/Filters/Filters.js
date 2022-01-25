import React, {Component} from 'react';
import './filters.css';
import Select from "./Selector/Select";
import {movieLanguages,movieStatus} from '../../../constants/selectors';
import FilterInput from "./Input/FilterInput";
import DoubleRange from "./DoubleRange/DoubleRange";

class Filters extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <form id="filters" name="filters" className="form-filters frosted-glass-effect" action="#">
                <div className="form-filters__header">
                    <FilterInput />
                    <Select options={movieStatus} />
                    <Select options={movieLanguages} />

                </div>
                <div className="form-filters__ranges">

                    <DoubleRange title="Budget, $" step="100000" minValue="0" maxValue="500000000" />
                    <DoubleRange title="Popularity" step="1" minValue="0" maxValue="200" />
                    <DoubleRange title="Vote count" step="1" minValue="0" maxValue="30000" />

                </div>
                <div className="form-filters__release-date">
                    <div id="release-date-first" className="form-filters__release-date__item date-picker">
                        <input type="text" value="" placeholder="Select Date.." data-input
                            className="basic-field date-picker__input" data-url="release_date_first"
                            data-item="filter"/>

                        <a className="input-button date-picker__clear" title="clear" data-clear>
                            <i className="icon-close">
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="#DBDEE5"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                        d="M14.8167 0.183594C14.8748 0.241644 14.921 0.310604 14.9525 0.386526C14.984 0.462448 15.0002 0.543839 15.0002 0.626038C15.0002 0.708236 14.984 0.789628 14.9525 0.865549C14.921 0.941471 14.8748 1.01043 14.8167 1.06848L1.0684 14.8167C0.951055 14.9341 0.791903 15 0.625954 15C0.460006 15 0.300854 14.9341 0.18351 14.8167C0.0661668 14.6994 0.000244141 14.5402 0.000244141 14.3743C0.000244141 14.2083 0.0661668 14.0492 0.18351 13.9318L13.9318 0.183594C13.9898 0.125397 14.0588 0.0792246 14.1347 0.0477206C14.2106 0.0162165 14.292 0 14.3742 0C14.4564 0 14.5378 0.0162165 14.6137 0.0477206C14.6896 0.0792246 14.7586 0.125397 14.8167 0.183594V0.183594Z"/>
                                    <path fillRule="evenodd" clipRule="evenodd"
                                        d="M0.183594 0.183594C0.125397 0.241644 0.0792246 0.310604 0.0477206 0.386526C0.0162165 0.462448 0 0.543839 0 0.626038C0 0.708236 0.0162165 0.789628 0.0477206 0.865549C0.0792246 0.941471 0.125397 1.01043 0.183594 1.06848L13.9318 14.8167C14.0492 14.9341 14.2083 15 14.3743 15C14.5402 15 14.6994 14.9341 14.8167 14.8167C14.9341 14.6994 15 14.5402 15 14.3743C15 14.2083 14.9341 14.0492 14.8167 13.9318L1.06848 0.183594C1.01043 0.125397 0.941471 0.0792246 0.865549 0.0477206C0.789628 0.0162165 0.708236 0 0.626038 0C0.543839 0 0.462448 0.0162165 0.386526 0.0477206C0.310604 0.0792246 0.241644 0.125397 0.183594 0.183594V0.183594Z"/>
                                </svg>
                            </i>
                        </a>
                    </div>

                    <div id="release-date-last" className="form-filters__release-date__item date-picker">
                        <input type="text" value="" placeholder="Select Date.." data-input
                            className="basic-field date-picker__input" data-url="release_date_last"
                            data-item="filter"/>

                        <a className="input-button date-picker__clear" title="clear" data-clear>
                            <i className="icon-close">
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="#DBDEE5"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                        d="M14.8167 0.183594C14.8748 0.241644 14.921 0.310604 14.9525 0.386526C14.984 0.462448 15.0002 0.543839 15.0002 0.626038C15.0002 0.708236 14.984 0.789628 14.9525 0.865549C14.921 0.941471 14.8748 1.01043 14.8167 1.06848L1.0684 14.8167C0.951055 14.9341 0.791903 15 0.625954 15C0.460006 15 0.300854 14.9341 0.18351 14.8167C0.0661668 14.6994 0.000244141 14.5402 0.000244141 14.3743C0.000244141 14.2083 0.0661668 14.0492 0.18351 13.9318L13.9318 0.183594C13.9898 0.125397 14.0588 0.0792246 14.1347 0.0477206C14.2106 0.0162165 14.292 0 14.3742 0C14.4564 0 14.5378 0.0162165 14.6137 0.0477206C14.6896 0.0792246 14.7586 0.125397 14.8167 0.183594V0.183594Z"/>
                                    <path fillRule="evenodd" clipRule="evenodd"
                                        d="M0.183594 0.183594C0.125397 0.241644 0.0792246 0.310604 0.0477206 0.386526C0.0162165 0.462448 0 0.543839 0 0.626038C0 0.708236 0.0162165 0.789628 0.0477206 0.865549C0.0792246 0.941471 0.125397 1.01043 0.183594 1.06848L13.9318 14.8167C14.0492 14.9341 14.2083 15 14.3743 15C14.5402 15 14.6994 14.9341 14.8167 14.8167C14.9341 14.6994 15 14.5402 15 14.3743C15 14.2083 14.9341 14.0492 14.8167 13.9318L1.06848 0.183594C1.01043 0.125397 0.941471 0.0792246 0.865549 0.0477206C0.789628 0.0162165 0.708236 0 0.626038 0C0.543839 0 0.462448 0.0162165 0.386526 0.0477206C0.310604 0.0792246 0.241644 0.125397 0.183594 0.183594V0.183594Z"/>
                                </svg>
                            </i>
                        </a>
                    </div>
                </div>
                <div className="form-filters__buttons">
                    <button type="submit" className="basic-btn">Submit</button>
                    <button id="reset-btn" type="reset" className="basic-btn" disabled>Reset</button>
                </div>
            </form>
        );
    }
}

export default Filters;