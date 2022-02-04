import React from 'react';
import {shallow, mount} from 'enzyme';
import Form from "../Form";

describe ("Form", () => {
    const props = {
      onSubmit : '',
      children : ''
    };
    it('should render correctly', () => {
        const component = shallow(<Form {...props} />);
        expect(component).toMatchSnapshot();
    });
    it('should render checked prop', () => {
        const component = mount(<Form {...props} />);
        console.log(component.debug());
        expect(component.props().overview).toEqual(props.overview);
    });
});
