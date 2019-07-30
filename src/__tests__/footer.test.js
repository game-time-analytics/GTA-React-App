import React from 'react';
import '../components/footer/footer';

describe('footer component', () => {
  it('should render as expected', () => {
    const app = global.shallow(<footer></footer>);
    expect(app.find('footer').exists()).toBeTruthy();
  });
});
