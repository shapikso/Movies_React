import React from 'react';
import {shallow, mount} from 'enzyme';
import Filters from "../Filters";

describe('Filters', ()=> {
    const props = {
        setFilter: jest.fn(),
        closeModal: jest.fn(),
        onSubmite: jest.fn(),
        clearFilters: jest.fn(),
        filters: {
            title: 'aaaaa',
            language: 'en',
            status: 'Released',
            release_date_first: '',
            release_date_last: '',
            budget_min: 0,
            budget_max: 5000000,
            popularity_min: 0,
            popularity_max: 5,
            revenue_min: 0,
            revenue_max: 300,
        }
    };
    it('should render correctly', () => {
        const component = shallow(<Filters {...props} />);
        expect(component).toMatchSnapshot();
    });
    it('should clear filters', () => {
        const component = mount(<Filters {...props} />);
        component.find('button').at(0).getElement().props.onClick();
        expect(props.clearFilters).toHaveBeenCalled();
    });
    it('should check on submit button', () => {
        const component = mount(<Filters {...props} />);
        component.find('button').at(1).getElement().props.onClick();
        expect(props.closeModal).toHaveBeenCalled();
        expect(props.onSubmite).toHaveBeenCalled();
    });
    it('should render prop setFilter correctly', () => {
        const component = shallow(<Filters {...props} />);
        expect(component.find('FilterHeaders').getElement().props.setFilter).toEqual(props.setFilter);
    });
});