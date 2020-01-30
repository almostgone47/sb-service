import React from 'react';
import App from './App.jsx';
import {mount, shallow, render } from 'enzyme';

describe ( 'App component', () => {
    it('renders correctly', () => {
        const wrapper = shallow (
            <App/>
        );
        expect(wrapper).toMatchSnapshot();
    })
    // it ('contains div', () => {
    //     const wrapper = mount(<App number = {0} />) 
    //     wrapper.setProps ({ number: '3456'})
    //     expect(wrapper.find('div').text()).toEqual(`Neighborhood: 3456`)
    //   })
  })
