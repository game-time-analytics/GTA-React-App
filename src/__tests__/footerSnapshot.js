import React from 'react';
import renderer from 'react-test-renderer';
import Footer from '../components/footer/footer';

describe('Footer snapshot test', () => {
  it('renders to DOM correctly', () => {
    const component = renderer.create(<Footer />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
