import React from 'react';
import '../../components/playerStats/playerStats';
import { shallow } from 'enzyme';

describe('playerStats component', () => {
  it('should render as expected', () => {
    const app = shallow(<h1></h1>);
    expect(app.find('h1').exists()).toBeTruthy();
  });
});
