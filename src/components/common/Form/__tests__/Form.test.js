import React from 'react';
import {shallow, mount} from 'enzyme';
import Form from "../Form";

describe ("Form", () => {
    const props = {
        onSubmit : jest.fn(),
        children : <input />,
    };
    it('should render correctly', () => {
        const component = shallow(<Form {...props} />);
        expect(component).toMatchSnapshot();
    });
    it('should render checked prop', () => {
        const component = mount(<Form {...props} />);
        expect(component.find('input')).toHaveLength(1);
    });
    it('should checked on Submit state', () => {
        const component = mount(<Form {...props} />);
        component.find('form').getElement().props.onSubmit();
        expect(props.onSubmit).toHaveBeenCalled();
    });
});
