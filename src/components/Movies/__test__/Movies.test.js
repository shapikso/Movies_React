import React from 'react';
import {mount, shallow} from 'enzyme';
import Movies from '../Movies';
import {FILTERS_INIT} from "../../../constants/filters";
// import axios from 'axios';
// import mockMovies from './__movies-mock__';
// import { act } from 'react-dom/test-utils';
// import { BrowserRouter } from 'react-router-dom';
// import { FILTERS_INIT } from '../../../constants/filters';
// import {COLORS} from "../../common/styles/colors";

describe('Movies', () => {

    it('should render correctly', () => {
        const component = shallow(<Movies/>);
        expect(component).toMatchSnapshot();
    });

    it ('should render prop filmTitle', () => {
        // console.log(component.debug());
        const setStateMock = jest.fn();
        React.useState = jest.fn().mockReturnValue([{
            movies: [],
            filters: FILTERS_INIT,
            currentPage: 1,
            isFiltersHidden: true,
            isLoading: true,
        }, setStateMock]);
        const component = mount(<Movies/>);
        console.log(component.debug());
        component.find('InputField').at(0).getElement().props.onChange({target:{ value : 'bla bla'}});
        //console.log(component.find('button').at(0).getElement().props);
        expect(setStateMock).toHaveBeenCalled();
        //expect(component.find('span').at(0).text()).toEqual(props.title);
    });

    // it(`should set background-color to ${COLORS.badRate} if voteAverage < 7 `, () => {
    //     const component = shallow(<MovieCard {...props} voteAverage={6} />);
    //     expect(component.find('[data-testId="StFilmRate"]')).toHaveStyleRule('background-color', `${COLORS.badRate}`);
    // });
    //
    // it(`should set background-color to ${COLORS.goodRate} if voteAverage >= 7`, () => {
    //     const component = shallow(<MovieCard {...props} voteAverage={8} />);
    //     expect(component.find('[data-testId="StFilmRate"]')).toHaveStyleRule('background-color', `${COLORS.goodRate}`);
    // });
});