import React from 'react';
import App from './App.jsx';
import {shallow, mount} from 'enzyme';

describe ( 'App component', () => {
    // it('should render 2', () => {
    //     const wrapper = shallow(<App />)
    //     const valueState = wrapper.state().value
    //     expect(valueState).toEqual('')
    // })
    it('renders correctly', () => {
        const wrapper = shallow (
            <App/>
        );
        expect(wrapper).toMatchSnapshot();
    })
    // it ('contains div', () => {
    //     const wrapper = mount(<App  />)
    //     const value = wrapper.find('div').text()
    //     expect(value).toEqual('hello world')
    //   })
})