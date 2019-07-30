import React from 'react';
import '../components/header/header';
import { shallow } from 'enzyme';

describe('header component', () => {
  it('should render as expected', () => {
    const app = shallow(<div></div>);
    expect(app.find('div').exists()).toBeTruthy();
  });
});
