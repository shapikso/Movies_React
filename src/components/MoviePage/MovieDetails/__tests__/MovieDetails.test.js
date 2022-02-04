import React from 'react';
import {shallow, mount} from 'enzyme';
import MovieDetails from "../MovieDetails";

describe('MovieDetails', ()=> {
    const props = {
        adult:true,
        hours: 1,
        minutes: 59,
        voteAverage: 1,
    };
    it('should render correctly', () => {
        const component = shallow(<MovieDetails {...props} />);
        expect(component).toMatchSnapshot();
    });
    it('should checked render adult', () => {
        const component = mount(<MovieDetails {...props} />);
        expect(component.props().adult).toEqual(props.adult);
    });
    it('should checked render hour', () => {
        const component = mount(<MovieDetails {...props} />);
        expect(component.props().hours).toEqual(props.hours);
    });
    it('should checked render minutes', () => {
        const component = mount(<MovieDetails {...props} />);
        expect(component.props().minutes).toEqual(props.minutes);
    });
    it('should checked prop rate', () => {
        const component = mount(<MovieDetails {...props} />);
        expect(component.props().voteAverage).toEqual(props.voteAverage);
    });
});