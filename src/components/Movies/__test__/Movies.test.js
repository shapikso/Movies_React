import React from 'react';
import {mount, shallow} from 'enzyme';
import Movies from '../Movies';
import {FILTERS_INIT} from "../../../constants/filters";
import axios from "axios";
import { act } from "react-dom/test-utils";
import moviesData from './__movies-mock__';


describe('Movies', () => {
    const setStateMock = jest.fn();
    beforeEach(() => {
        React.useState = jest.fn().mockReturnValue([{
            movies: [],
            filters: FILTERS_INIT,
            currentPage: 1,
            isFiltersHidden: true,
            isLoading: true,
        }, setStateMock]);

    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should render correctly', () => {
        const component = shallow(<Movies/>);
        expect(component).toMatchSnapshot();
    });

    it ('should set filter ', () => {
        const component = mount(<Movies/>);
        console.log(component.debug());
        component.find('InputField').at(0).getElement().props.onChange({target:{ value : 'bla bla'}});
        expect(setStateMock).toHaveBeenCalled();
    });

    it(`should show filter modal`, () => {
        const component = mount(<Movies/>);
        console.log(component.debug());
        component.find('button').at(0).getElement().props.onClick();
        expect(setStateMock).toHaveBeenCalled();
    });

    it(`should show filter modal`, () => {
        const component = mount(<Movies/>);
        console.log(component.debug());
        component.find('button').at(0).getElement().props.onClick();
        expect(setStateMock).toHaveBeenCalled();
    });

    it(`should clear filters in modal`, () => {
        const component = mount(<Movies/>);
        console.log(component.find('button').at(1).getElement().props);
        component.find('button').at(1).getElement().props.onClick();
        expect(setStateMock).toHaveBeenCalled();
    });
    it(`should submit filters`,  () => {
        const component = mount(<Movies/>);
        console.log(component.debug());
        console.log(component.find('button').at(2).getElement().props);
        component.find('button').at(2).getElement().props.onClick();
        expect(setStateMock).toHaveBeenCalled();
    });
});

const data = moviesData;
jest.mock("axios");
describe('async Movies', () => {
    const setStateMock = jest.fn();

    beforeEach(() => {
        React.useState = jest.fn().mockReturnValue([{
            movies: [],
            filters: FILTERS_INIT,
            currentPage: 1,
            isFiltersHidden: true,
            isLoading: true,
        }, setStateMock]);

    });

    afterEach(() => {
        jest.clearAllMocks();
    });
    it(`should load films`, async () => {
        let component;
        await act(async () => {
            await axios.get.mockImplementationOnce(() => Promise.resolve(data));
            component = mount(<Movies/>);
        });
        component.update();
        await expect(axios.get).toHaveBeenCalledWith("http://localhost:3001/movies", {"params": {
            "budget_max": 500000000,
            "budget_min": 0,
            "page": 1,
            "per_page": 8,
            "popularity_max": 200,
            "popularity_min": 0,
            "revenue_max": 30000,
            "revenue_min": 0
        }});
        await expect(axios.get).toHaveBeenCalledTimes(1);
        expect(setStateMock).toHaveBeenCalled();
    });
});
