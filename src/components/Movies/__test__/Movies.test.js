import React from 'react';
import { mount } from 'enzyme';
import Movies from '../Movies';
import axios from 'axios';
import mockMovies from './__movies-mock__';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import { FILTERS_INIT } from '../../../constants/filters';

const newFilterKey = 'budget_min';
const newFilterValue = 21000000;

function Filters({ filters }) {
    return Object.keys(filters).map((item) => <p key={item}>{item}</p>);
}

function MockedFilters({ filters, setFilter, clearFilters, closeModal, onSubmite }) {
    return (
        <>
            <Filters filters={filters} />
            <button data-testid="submit-reset-filters" onClick={onSubmite}>
                Submit reset filters
            </button>
            <button data-testid="close-modal" onClick={closeModal}>
                Set new Filters
            </button>
            <button data-testid="set-filters" onClick={() => setFilter(newFilterKey, newFilterValue)}>
                Set new Filters
            </button>
            <button data-testid="clear-filters" onClick={clearFilters}>
                Clear filters
            </button>
        </>
    );
}

jest.mock('../Filters/Filters.js', () => {
    return MockedFilters;
});
jest.mock('axios');

describe('Movies', () => {
    beforeEach(() => {
        window.scrollTo = jest.fn();
        axios.get.mockReturnValue(Promise.resolve({ data: mockMovies }));
    });
    it('should render all movies after success get request', async () => {
        let component;
        await act(async () => {
            component = await mount(
                <BrowserRouter>
                    <Movies />
                </BrowserRouter>
            );
        });
        component.update();
        expect(component.find('MovieCard').length).toBe(mockMovies.length);
    });

    it(`should set filters to passed key=${newFilterKey} value=${newFilterValue}`, async () => {
        let component;
        await act(async () => {
            component = await mount(
                <BrowserRouter>
                    <Movies />
                </BrowserRouter>
            );
        });
        component.find("[data-testid='set-filters']").simulate('click');
        expect(component.find('Filters').props().filters[newFilterKey]).toBe(newFilterValue);
    });

    it('should reset filters to initial state', async () => {
        let component;
        await act(async () => {
            component = await mount(
                <BrowserRouter>
                    <Movies />
                </BrowserRouter>
            );
        });
        component.find("[data-testid='set-filters']").simulate('click');
        expect(component.find('Filters').props().filters[newFilterKey]).toBe(newFilterValue);
        component.find("[data-testid='clear-filters']").simulate('click');
        expect(component.find('Filters').props().filters[newFilterKey]).toBe(FILTERS_INIT[newFilterKey]);
    });

    it('should get new filtered movies', async () => {
        let component;
        await act(async () => {
            component = await mount(
                <BrowserRouter>
                    <Movies />
                </BrowserRouter>
            );
        });
        let filteredMovies = mockMovies.filter((item) => item.budget <= newFilterValue);
        await act(async () => {
            axios.get.mockReturnValue(Promise.resolve({ data: filteredMovies }));
            await component.find("[data-testid='set-filters']").simulate('click');
            await component.find("[data-testid='submit-reset-filters']").simulate('click');
        });
        component.update();
        expect(component.find('MovieCard').length).toBe(filteredMovies.length);
    });

    it('should render NoData Component if movies are empty', async () => {
        let component;
        await act(async () => {
            component = await mount(
                <BrowserRouter>
                    <Movies />
                </BrowserRouter>
            );
        });
        let filteredMovies = mockMovies.filter((item) => item.budget > 999999999999999);
        await act(async () => {
            axios.get.mockReturnValue(Promise.resolve({ data: filteredMovies }));
            await component.find("[data-testid='set-filters']").simulate('click');
            await component.find("[data-testid='submit-reset-filters']").simulate('click');
        });
        component.update();
        expect(component.find('MovieCard').exists()).toBeFalsy();
        expect(component.find('NoData').exists()).toBeTruthy();
    });

    it('should toggle isFiltersHidden', async () => {
        let component;
        await act(async () => {
            component = await mount(
                <BrowserRouter>
                    <Movies />
                </BrowserRouter>
            );
        });
        component.update();
        expect(component.find("[data-testid='filter-modal']").at(0).props().hidden).toBeTruthy();
        component.find("[data-testid='filters-toggler']").simulate('click');
        component.update();
        expect(component.find("[data-testid='filter-modal']").at(0).props().hidden).toBeFalsy();
    });
});
