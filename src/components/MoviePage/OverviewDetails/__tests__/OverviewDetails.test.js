import React from 'react';
import {shallow, mount} from 'enzyme';
import OverviewDetails from "../OverviewDetails";

describe('OverviewDetails', () => {
    const props = {
        overview: 'Some text, that came from film',
    };
    it('should render correctly', () => {
        const component = shallow(<OverviewDetails {...props} />);
        expect(component).toMatchSnapshot();
    });
    it('should render overview props', () => {
        const component = mount(<OverviewDetails {...props} />);
        expect(component.find('p').text()).toEqual(props.overview);
    });
});