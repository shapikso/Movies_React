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
        // eslint-disable-next-line no-console
        console.log(component.debug());
        expect(component.props().overview).toEqual(props.overview);
    });
});