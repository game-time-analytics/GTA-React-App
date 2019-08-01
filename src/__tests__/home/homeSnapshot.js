import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../../components/home/home';

describe('Home snapshot test', () => {
  it('renders to DOM correctly', () => {
    const component = renderer.create(<Home />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
