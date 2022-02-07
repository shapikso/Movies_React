import React from 'react';
import {mount, shallow} from 'enzyme';
import MainLayout from "../MainLayout";

jest.mock('react-router-dom', () => ({
    useLocation: () => ({ pathname: '/' }),
    Link: "a",
}));

describe('MainLayout', () => {

    const props={
        children: <div id="main-component"/>,
    };

    it('should render correctly', () => {
        const component = shallow(<MainLayout {...props}/>);
        expect(component).toMatchSnapshot();
    });
    it('should render children', () => {
        const component = mount(<MainLayout {...props}/>);
        expect(component.find('#main-component')).toHaveLength(1);
    });
    it('should render 2 links', () => {
        const component = mount(<MainLayout {...props}/>);
        expect(component.find('a')).toHaveLength(2);
        expect(component.find('a').at(1).getElement().props.to).toEqual('/sing-up');
        expect(component.find('button').text()).toEqual('Sing Up');
    });

});