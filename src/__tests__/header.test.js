import React from 'react';
import '../components/footer/footer';
import { shallow } from 'enzyme';

describe('header component', () => {
  it('should render as expected', () => {
    const app = shallow(<header></header>);
    expect(app.find('header').exists()).toBeTruthy();
  });
});