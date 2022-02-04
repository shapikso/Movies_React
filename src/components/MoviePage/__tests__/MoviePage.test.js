// import React from 'react';
// import {shallow, mount} from 'enzyme';
// import MoviePage from "../MoviePage";
//
// describe('MoviePage', () => {
//     const props = {
//         genres: ['Animation', 'Family'],
//     };
//     it('should render correctly', () => {
//         const component = shallow(<MoviePage {...props} />);
//         expect(component).toMatchSnapshot();
//     });
//     it('should render 2 props from array', () => {
//         const component = mount(<MoviePage {...props} />);
//         expect(component.find('div div')).toHaveLength(props.genres.length);
//     });
//     it('should`t render anything ', () => {
//         const component = mount(<MoviePage {...props} genres={[]}/>);
//         expect(component.find('div div')).toHaveLength(0);
//     });
// });