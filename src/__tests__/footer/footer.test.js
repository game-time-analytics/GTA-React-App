import React from 'react';
import '../../components/footer/footer';
import { shallow } from 'enzyme';

describe('footer component', () => {
  it('should render as expected', () => {
    const app = shallow(<footer></footer>);
    expect(app.find('footer').exists()).toBeTruthy();
  });
});
