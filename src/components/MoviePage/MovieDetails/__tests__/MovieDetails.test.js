import React from 'react';
import {shallow, mount} from 'enzyme';
import MovieDetails from "../MovieDetails";
// eslint-disable-next-line no-undef
describe('MovieDetails', ()=> {

    const props = {
        film: {
            rate: 8,
        } ,
        hours: 1,
        minutes: 59,
    };

    // eslint-disable-next-line no-undef
    it('should render correctly', () => {
        const component = shallow(<MovieDetails {...props} />);
        // eslint-disable-next-line no-undef
        expect(component).toMatchSnapshot();
    });
    // eslint-disable-next-line no-undef
    it('should checked prop film', () => {
        const component = mount(<MovieDetails {...props} />);
        // eslint-disable-next-line no-console
        console.log(component.debug());
        // eslint-disable-next-line no-undef
        expect(component.props().film).toEqual(props.film);
    });
    // eslint-disable-next-line no-undef
    it('should checked prop hours', () => {
        const component = mount(<MovieDetails {...props} />);
        // eslint-disable-next-line no-console
        console.log(component.debug());
        // eslint-disable-next-line no-undef
        expect(component.props().hours).toEqual(props.hours);
    });
    // eslint-disable-next-line no-undef
    it('should checked prop minutes', () => {
        const component = mount(<MovieDetails {...props} />);
        // eslint-disable-next-line no-console
        console.log(component.debug());
        // eslint-disable-next-line no-undef
        expect(component.props().minutes).toEqual(props.minutes);
    });
    // eslint-disable-next-line no-undef
    it('should checked prop rate', () => {
        const component = mount(<MovieDetails {...props} />);
        // eslint-disable-next-line no-console
        console.log(component.debug());
        // eslint-disable-next-line no-undef
        expect(component.props().film.rate).toEqual(props.film.rate);
    });
});