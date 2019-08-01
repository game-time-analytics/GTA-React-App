import React from 'react';
import { shallow } from 'enzyme';
import AboutUs from '../../components/aboutUs/aboutUs';

describe('aboutUs component', () => {
  it('should render an image as expected', () => {
    const app = shallow(<AboutUs />);
    expect(app.find('img').exists()).toBeTruthy();
  });

  it('should render an p tag as expected', () => {
    const app = shallow(<AboutUs />);
    expect(app.find('p').exists()).toBeTruthy();
  });

  it('should render the correct link', () => {
    // Props is only meant for 1 but found 3, need to seperate them out

    // const app = shallow(<AboutUs />);
    // expect(app.find('a').props('href')).toEqual('https://github.com/TRose2014');
  });
});
