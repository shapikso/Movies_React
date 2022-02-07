import React from 'react';
import {shallow, mount} from 'enzyme';
import FiltersButtons from "../FiltersButtons";

describe('FiltersButtons', ()=> {
    const props = {
        formSubmitHandler: jest.fn(),
        formResetHandler: jest.fn(),
        isResetDisabled: true,
    };
    it('should render correctly', () => {
        const component = shallow(<FiltersButtons {...props} />);
        expect(component).toMatchSnapshot();
    });
    it('should checked render isResetDisabled', () => {
        const component = mount(<FiltersButtons {...props} />);
        expect(component.find('button').at(0).getElement().props.disabled).toEqual(props.isResetDisabled);
    });
    it('should reset form on click', () => {
        const component = mount(<FiltersButtons {...props} />);
        component.find('button').at(0).getElement().props.onClick();
        expect(props.formResetHandler).toHaveBeenCalled();
    });
    it('should submit form on click', () => {
        const component = mount(<FiltersButtons {...props} />);
        component.find('button').at(1).getElement().props.onClick();
        expect(props.formSubmitHandler).toHaveBeenCalled();
    });
});