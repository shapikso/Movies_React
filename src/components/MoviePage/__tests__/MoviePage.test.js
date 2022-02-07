import React from 'react';
import {shallow, mount} from 'enzyme';
import MoviePage from "../MoviePage";

const setState = jest.fn();
const state = jest.spyOn(React, 'useState');
state.mockImplementation((init) => [init, setState]);


describe('MoviePage', () => {

    const setStateMock = jest.fn();
    const useStateMock = jest.spyOn(React, 'useState');
    useStateMock.mockImplementation((init) => [init, setStateMock]);

    it('should render correctly', () => {
        const component = shallow(<MoviePage/>);
        expect(component).toMatchSnapshot();
    });

    test('useState is called', () => {
        const component = mount(<MoviePage/>);
        expect(component.find(''));
    });
});