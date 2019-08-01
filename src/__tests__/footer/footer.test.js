/* eslint-disable quote-props */
import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../../components/footer/footer';

describe('footer component', () => {
  it('should render a footer tag as expected', () => {
    const app = shallow(<Footer />);
    expect(app.find('footer').exists()).toBeTruthy();
  });

  it('should render the correct link', () => {
    const app = shallow(<Footer />);
    expect(app.find('a').props('href')).toEqual({ 'children': 'GTA Online', 'href': 'https://github.com/game-time-analytics' });
  });
});
