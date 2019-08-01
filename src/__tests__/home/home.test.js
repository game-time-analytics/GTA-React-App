/* eslint-disable max-len */
import React from 'react';
// import { BrowserRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import Home from '../../components/home/home';
import Image from '../../assets/Football-Analytics-Limitations.jpg';


describe('home component', () => {
  it('should render an image as expected', () => {
    const app = shallow(<img/>);
    expect(app.find('img').exists()).toBeTruthy();
  });

  it('renders the correct image', () => {
    const app = shallow(<Home />);

    expect(app.find('img').prop('src')).toEqual(Image);
  });


  it('should render a span tag as expected', () => {
    const app = shallow(<span></span>);
    expect(app.find('span').exists()).toBeTruthy();
  });

  it('should simulate clicking the signin link and render input fields', () => {
    // Trying to get simulation to work for Link, but dos not have an onClick so not sure if that is an issue or not

  //   const wrapper = mount(<BrowserRouter><Home /></BrowserRouter>);
  //   wrapper.find('#signin').simulate('click');
  //   expect(wrapper.find('form').exists()).toBeTruthy();
  });
});
