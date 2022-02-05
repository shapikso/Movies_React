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
            release_date_first: '02 October 2022 14:48 UTC',
            release_date_last: '02 October 2021 14:48 UTC',
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
        const component = shallow(<Filters {...props} />);
        component.find('FiltersButtons').getElement().props.formResetHandler();
        expect(props.clearFilters).toHaveBeenCalled();
    });
    it('should clear filters', () => {
        const component = shallow(<Filters {...props} />);
        component.find('FiltersButtons').getElement().props.formSubmitHandler();
        expect(props.closeModal).toHaveBeenCalled();
        expect(props.onSubmite).toHaveBeenCalled();
    });
});