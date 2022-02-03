import React from 'react';
import {shallow, mount} from 'enzyme';
import GenreDetails from "../GenreDetails";
// eslint-disable-next-line no-undef
describe('GenreDetails', () => {
    const props = {
        genres: ['Animation', 'Family'],
    };
    // eslint-disable-next-line no-undef
    it('should render correctly', () => {
        const component = shallow(<GenreDetails {...props} />);
        // eslint-disable-next-line no-undef
        expect(component).toMatchSnapshot();
    });
    // eslint-disable-next-line no-undef
    it('should render checked prop', () => {
        const component = mount(<GenreDetails {...props} />);
        // eslint-disable-next-line no-console
        console.log(component.debug());
        // eslint-disable-next-line no-undef
        expect(component.props().genres).toEqual(props.genres);
    });
});