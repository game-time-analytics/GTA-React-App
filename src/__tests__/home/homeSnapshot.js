import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Home from '../../components/home/home';

describe('Home snapshot test', () => {
  it('renders to DOM correctly', () => {
    const component = renderer.create(<BrowserRouter><Home /></BrowserRouter>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
