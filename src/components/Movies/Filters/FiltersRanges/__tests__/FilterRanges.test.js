import React from 'react';
import {shallow, mount} from 'enzyme';
import FiltersRanges from "../FiltersRanges";

describe('FiltersRanges', ()=> {
    const props = {
        setFilter: jest.fn(),
        budgetMax: 50000,
        budgetMin: 0,
        popularityMax:2000,
        popularityMin: 0,
        revenueMax: 200,
        revenueMin: 0,
    };
    it('should render correctly', () => {
        const component = shallow(<FiltersRanges {...props} />);
        expect(component).toMatchSnapshot();
    });
    it('should checked render max budget double range', () => {
        const component = mount(<FiltersRanges {...props} />);
        expect(component.find('DoubleRange').at(0).getElement().props.maxInputValue).toEqual(props.budgetMax);
    });
    it('should checked render min budget double range', () => {
        const component = mount(<FiltersRanges {...props} />);
        expect(component.find('DoubleRange').at(0).getElement().props.minInputValue).toEqual(props.budgetMin);
    });
    it('should checked render max popularity double range', () => {
        const component = mount(<FiltersRanges {...props} />);
        expect(component.find('DoubleRange').at(1).getElement().props.maxInputValue).toEqual(props.popularityMax);
    });
    it('should checked render min popularity double range', () => {
        const component = mount(<FiltersRanges {...props} />);
        expect(component.find('DoubleRange').at(1).getElement().props.minInputValue).toEqual(props.popularityMin);
    });
    it('should checked render max vote count double range', () => {
        const component = mount(<FiltersRanges {...props} />);
        expect(component.find('DoubleRange').at(2).getElement().props.maxInputValue).toEqual(props.revenueMax);
    });
    it('should checked render min vote count double range', () => {
        const component = mount(<FiltersRanges {...props} />);
        expect(component.find('DoubleRange').at(2).getElement().props.minInputValue).toEqual(props.revenueMin);
    });
    it('should changed Budget ', () => {
        const component = mount(<FiltersRanges {...props} />);
        component.find('DoubleRange').at(0).getElement().props.setRange(0,30000);
        expect(props.setFilter).toHaveBeenCalledWith('budget_min',0);
        expect(props.setFilter).toHaveBeenCalledWith('budget_max',30000);
    });
    it('should changed Popularity ', () => {
        const component = mount(<FiltersRanges {...props} />);
        component.find('DoubleRange').at(1).getElement().props.setRange(0,200);
        expect(props.setFilter).toHaveBeenCalledWith('popularity_min',0);
        expect(props.setFilter).toHaveBeenCalledWith('popularity_max',200);
    });
    it('should changed Vote ', () => {
        const component = mount(<FiltersRanges {...props} />);
        component.find('DoubleRange').at(2).getElement().props.setRange(0,300);
        expect(props.setFilter).toHaveBeenCalledWith('revenue_min',0);
        expect(props.setFilter).toHaveBeenCalledWith('revenue_max',300);
    });
});