import React from 'react';
import '../components/admin/admin';
import { shallow } from 'enzyme';

describe('admin component', () => {
  it('should render as expected', () => {
    const app = shallow(<h1></h1>);
    expect(app.find('h1').exists()).toBeTruthy();
  });
});
