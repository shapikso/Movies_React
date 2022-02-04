import React from 'react';
import {shallow, mount} from 'enzyme';
import GenreDetails from "../GenreDetails";

describe('GenreDetails', () => {
    const props = {
        genres: ['Animation', 'Family'],
    };
    it('should render correctly', () => {
        const component = shallow(<GenreDetails {...props} />);
        expect(component).toMatchSnapshot();
    });
    it('should render 2 props from array', () => {
        const component = mount(<GenreDetails {...props} />);
        // eslint-disable-next-line no-console
        console.log(component.debug());
        expect(component.find('div div')).toHaveLength(props.genres.length);
    });
    it('should`t render anything ', () => {
        const component = mount(<GenreDetails {...props} genres={[]}/>);
        // eslint-disable-next-line no-console
        console.log(component.debug());
        expect(component.find('div div')).toHaveLength(0);
    });
});