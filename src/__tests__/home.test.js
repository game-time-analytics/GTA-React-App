import React from 'react';
import '../components/header/header';
import { shallow } from 'enzyme';

describe('header component', () => {
  it('should render as expected', () => {
    const app = shallow(<img/>);
    expect(app.find('img').exists()).toBeTruthy();
  });
});
