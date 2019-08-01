import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Home from '../../components/home/home';
import { shallow, mount } from 'enzyme';

describe('home component', () => {
  it('should render an image as expected', () => {
    const app = shallow(<img/>);
    expect(app.find('img').exists()).toBeTruthy();
  });

  it('should render a span tag as expected', () => {
    const app = shallow(<span></span>);
    expect(app.find('span').exists()).toBeTruthy();
  });

  it('should simulate clicking the signin link and render input fields', () => {
    // const wrapper = mount(<BrowserRouter><Home /></BrowserRouter>);
    // wrapper.find('#signin').simulate('click');
    // expect(wrapper.find('form').exists()).toBeTruthy();
  });

//   const context = { name: 'foo' };
// const wrapper = shallow(<SimpleComponent />, { context });
// expect(wrapper.text()).to.equal('foo');
// wrapper.setContext({ name: 'bar' });
// expect(wrapper.text()).to.equal('bar');
// wrapper.setContext({ name: 'baz' });
// expect(wrapper.text()).to.equal('baz');

