import React from 'react';
import {shallow, mount} from 'enzyme';
import FilterDate from "../FilterDate";

describe('FilterDate', ()=> {
    const props = {
        releaseDateFirst: 'Wed Feb 02 2022 00:00:00 GMT+0200 (Восточная Европа, стандартное время)',
        releaseDateLast: 'Wed Feb 02 2021 00:00:00 GMT+0200 (Восточная Европа, стандартное время)',
        setFilter: jest.fn()
    };
    it('should render correctly', () => {
        const component = shallow(<FilterDate {...props} />);
        expect(component).toMatchSnapshot();
    });
    it('should checked render first date', () => {
            const component = shallow(<FilterDate {...props} />);
            expect(component.find('r').at(0).getElement().props.selected).toEqual(props.releaseDateFirst);
        });
    it('should checked render last date', () => {
        const component = shallow(<FilterDate {...props} />);
        expect(component.find('r').at(1).getElement().props.selected).toEqual(props.releaseDateLast);
    });

    it('should checked change first date', () => {
        const component = shallow(<FilterDate {...props} />);
        component.find('r').at(0).getElement().props.onChange('Wed Feb 02 2000 00:00:00 GMT+0200 (Восточная Европа, стандартное время)');
        expect(props.setFilter).toHaveBeenCalledWith("release_date_first",'Wed Feb 02 2000 00:00:00 GMT+0200 (Восточная Европа, стандартное время)');
    });
    it('should checked change last date', () => {
        const component = shallow(<FilterDate {...props} />);
        component.find('r').at(1).getElement().props.onChange('Wed Feb 02 1999 00:00:00 GMT+0200 (Восточная Европа, стандартное время)');
        expect(props.setFilter).toHaveBeenCalledWith("release_date_last",'Wed Feb 02 1999 00:00:00 GMT+0200 (Восточная Европа, стандартное время)');
    });

});