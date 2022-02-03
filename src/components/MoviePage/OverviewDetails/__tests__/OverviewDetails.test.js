import React from 'react';
import {shallow, mount} from 'enzyme';
import OverviewDetails from "../OverviewDetails";
// eslint-disable-next-line no-undef
describe('OverviewDetails', () => {
    const props = {
        overview: '',
    };
    // eslint-disable-next-line no-undef
    it('should render correctly', () => {
        const component = shallow(<OverviewDetails {...props} />);
        // eslint-disable-next-line no-undef
        expect(component).toMatchSnapshot();
    });
    // eslint-disable-next-line no-undef
    it('should render checked prop', () => {
        const component = mount(<OverviewDetails {...props} />);
        // eslint-disable-next-line no-console
        console.log(component.debug());
        // eslint-disable-next-line no-undef
        expect(component.props().overview).toEqual(props.overview);
    });
});