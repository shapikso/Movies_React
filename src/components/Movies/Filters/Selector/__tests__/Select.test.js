import React from 'react';
import {shallow, mount} from 'enzyme';
import Select from "../Select";

describe('Select', ()=> {
    const props = {
        options: [['en','English'],['jp','Japanese']],
        value: 'en',
        setSelector: jest.fn()
    };
    it('should render correctly', () => {
        const component = shallow(<Select {...props} />);
        expect(component).toMatchSnapshot();
    });
    it('should checked render value', () => {
        const component = mount(<Select {...props} />);
        expect(component.find('select').getElement().props.value).toEqual(props.value);
    });
    it('should checked render all options', () => {
        const component = mount(<Select {...props} />);
        expect(component.find('select').getElement().props.children).toHaveLength(props.options.length);
    });
    it('should change value', () => {
        const component = mount(<Select {...props} />);
        component.find('select').find('select').simulate('change', {target: { value : 'jp'}});
        expect(props.setSelector).toHaveBeenCalledWith('jp');
    });
});