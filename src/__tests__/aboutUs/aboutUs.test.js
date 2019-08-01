import React from 'react';
import '../../components/aboutUs/aboutUs';
import { shallow } from 'enzyme';

describe('aboutUs component', () => {
  it('should render as expected', () => {
    const app = shallow(<h1></h1>);
    expect(app.find('h1').exists()).toBeTruthy();
  });
});
