import React from 'react';
import renderer from 'react-test-renderer';
import AboutUs from '../components/aboutUs/aboutUs';

describe('About Us snapshot test', () => {
  it('renders to DOM correctly', () => {
    const component = renderer.create(<AboutUs />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
