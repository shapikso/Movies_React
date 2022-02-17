import React from 'react';
import {shallow, mount} from 'enzyme';
import MovieMainWrapper from "../MoviesMainWrapper";

jest.mock('react-router-dom', () => ({
    useLocation: () => ({ pathname: '/' }),
    Link: "a",
}));

describe('MovieMainWrapper', ()=> {
    const props = {
        movies: [
            {
                id: 6,
                adult: false,
                backdrop_path: '/5aXp2s4l6g5PcMMesIj63mx8hmJ.jpg',
                budget: 21000000,
                homepage: '',
                imdb_id: 'tt0107286',
                original_language: 'en',
                original_title: 'Judgment Night',
                overview:
                    'While racing to a boxing match, Frank, Mike, John and Rey get more than they bargained for. A wrong turn lands them directly in the path of Fallon, a vicious, wise-cracking drug lord. After accidentally witnessing Fallon murder a disloyal henchman, the four become his unwilling prey in a savage game of cat and mouse as they are mercilessly stalked through the urban jungle in this taut suspense drama.',
                popularity: 10.516,
                poster_path: '/rYFAvSPlQUCebayLcxyK79yvtvV.jpg',
                release_date: '1993-10-15',
                status: 'Released',
                title: 'Judgment Night',
                vote_average: 6.5,
                vote_count: 220,
                runtime: 110,
            },
            {
                id: 12,
                adult: false,
                backdrop_path: '/yzqaKAhglTrkeOfuIXYYArf0WnA.jpg',
                budget: 94000000,
                homepage: 'http://movies.disney.com/finding-nemo',
                imdb_id: 'tt0266543',
                original_language: 'en',
                original_title: 'Finding Nemo',
                overview:
                    "Nemo, an adventurous young clownfish, is unexpectedly taken from his Great Barrier Reef home to a dentist's office aquarium. It's up to his worrisome father Marlin and a friendly but forgetful fish Dory to bring Nemo home -- meeting vegetarian sharks, surfer dude turtles, hypnotic jellyfish, hungry seagulls, and more along the way.",
                popularity: 96.414,
                poster_path: '/adMZmqi7LlZB3I8BIE6MpPdzOlG.jpg',
                release_date: '2003-05-30',
                status: 'Released',
                title: 'Finding Nemo',
                vote_average: 7.8,
                vote_count: 15916,
                runtime: 100,
            }],
        loadMore: jest.fn(),
        isLoading: true,
    };
    it('should render correctly', () => {
        const component = shallow(<MovieMainWrapper {...props} />);
        expect(component).toMatchSnapshot();
    });
    it('should checked render isResetDisabled', () => {
        const component = mount(<MovieMainWrapper {...props} />);
        expect(component.find('div').at(0).getElement().props.children).toHaveLength(props.movies.length);
    });
    it('should call load more', () => {
        const component = mount(<MovieMainWrapper {...props} />);
        component.find('button').getElement().props.onClick();
        expect(props.loadMore).toHaveBeenCalled();
    });
    it('should show no data', () => {
        const component = mount(<MovieMainWrapper {...props} isLoading={false} movies={[]} />);
        expect(component.find('p').text()).toEqual('Films not found. Check filter options.');
    });
});
