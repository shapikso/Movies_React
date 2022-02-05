import React from 'react';
import {shallow, mount} from 'enzyme';
import SelectItem from "../SelectItem";

describe('SelectItem', ()=> {
    const props = {
        value: 'value',
        title: 'title'
    };
    it('should render correctly', () => {
        const component = shallow(<SelectItem {...props} />);
        expect(component).toMatchSnapshot();
    });
    it('should checked render value', () => {
        const component = mount(<SelectItem {...props} />);
        expect(component.find('option').getElement().props.value).toEqual(props.value);
    });
    it('should checked render title', () => {
        const component = mount(<SelectItem {...props} />);
        expect(component.find('option').getElement().props.children).toEqual(props.title);
    });
});