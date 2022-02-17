import React from 'react';
import {shallow, mount} from 'enzyme';
import MovieCard from "../MovieCard";
import { COLORS } from '../../../common/styles/colors';
import 'jest-styled-components';

jest.mock('react-router-dom', () => ({
    useLocation: () => ({ pathname: '/' }),
    Link: "a",
}));

describe('MovieCard', () => {
    let props;
    beforeEach(() => {
        props = {
            id: 1,
            backdropPath: 'someUrl',
            title: 'filmTitle',
            runtime: 100,
            voteAverage: 300
        };
    });

    it('should render correctly', () => {
        const component = shallow(<MovieCard {...props} />);
        expect(component).toMatchSnapshot();
    });

    it ('should render prop filmTitle', () => {
        const component = shallow(<MovieCard {...props} />);
        expect(component.find('span').at(0).text()).toEqual(props.title);
    });

    it(`should set background-color to ${COLORS.badRate} if voteAverage < 7 `, () => {
        const component = mount(<MovieCard {...props}/>);
        expect(component.find('.movie-rate').at(0).getElement().props.isGoodRate).toBeTruthy();
    });

    it(`should set background-color to ${COLORS.goodRate} if voteAverage >= 7`, () => {
        const component = shallow(<MovieCard {...props} voteAverage={2} />);
        expect(component.find('.movie-rate').at(0).getElement().props.isGoodRate).toBeFalsy();
    });
});
