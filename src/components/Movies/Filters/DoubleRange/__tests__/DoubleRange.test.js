import React from 'react';
import {shallow, mount} from 'enzyme';
import DoubleRange from "../DoubleRange";

describe('DoubleRange', ()=> {
    const props = {
        title: 'Base title',
        minValue: '0',
        maxValue: '400',
        step: '2',
        setRange: jest.fn(),
        minInputValue: 0,
        maxInputValue: 400
    };
    it('should render correctly', () => {
        const component = shallow(<DoubleRange {...props} />);
        expect(component).toMatchSnapshot();
    });
    it('should checked render title', () => {
        const component = mount(<DoubleRange {...props} />);
        expect(component.find('div div').at(0).text()).toEqual(props.title);
    });
    it('should checked render min value', () => {
        const component = shallow(<DoubleRange {...props} />);
        expect(component.find('InputField').at(0).getElement().props.value).toEqual(props.minInputValue);
    });
    it('should checked render max value', () => {
        const component = shallow(<DoubleRange {...props} />);
        expect(component.find('InputField').at(1).getElement().props.value).toEqual(props.maxInputValue);
    });
    it('should checked render min value range', () => {
        const component = shallow(<DoubleRange {...props} />);
        expect(component.find('ComponentWrapper').getElement().props.min).toEqual(+props.minValue);
    });
    it('should checked render max value range', () => {
        const component = shallow(<DoubleRange {...props} />);
        expect(component.find('ComponentWrapper').getElement().props.max).toEqual(+props.maxValue);
    });
    it('should change range', () => {
        const component = shallow(<DoubleRange {...props} />);
        component.find('ComponentWrapper').getElement().props.onChange('59');
        expect(props.setRange).toHaveBeenCalledWith('5','9');
    });
});