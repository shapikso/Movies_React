import React from 'react';
import {shallow, mount} from 'enzyme';
import FilterHeaders from "../FilterHeaders";

describe('FilterHeaders', ()=> {
    const props = {
        title: 'Search title',
        language: 'jp',
        status: 'Released',
        setFilter: jest.fn(),
    };
    it('should render correctly', () => {
        const component = shallow(<FilterHeaders {...props} />);
        expect(component).toMatchSnapshot();
    });
    it('should checked render title', () => {
        const component = mount(<FilterHeaders {...props} />);
        expect(component.find('InputField').getElement().props.value).toEqual(props.title);
    });
    it('should changed title', () => {
        const component = mount(<FilterHeaders {...props} />);
        component.find('input').getElement().props.onChange({target: { value : props.title}});
        expect(props.setFilter).toHaveBeenCalledWith('title',props.title);
    });
    it('should changed language', () => {
        const component = mount(<FilterHeaders {...props} />);
        component.find('select').find('select').at(1).getElement().props.onChange({target: { value :  props.language}});
        expect(props.setFilter).toHaveBeenCalledWith('language', props.language);
    });
    it('should changed status', () => {
        const component = mount(<FilterHeaders {...props} />);
        component.find('select').find('select').at(0).simulate('change', {target: { value : props.status}});
        expect(props.setFilter).toHaveBeenCalledWith('status', props.status);
    });

});