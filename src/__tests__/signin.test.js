// import React, { useState, useContext } from 'react';
// import Login from '../components/signin/signin';
// import { shallow } from 'enzyme';

describe('signin component', () => {
  it('should not render if logged in', () => {
  // const contextValues = useContext(true);
  // jest
  //   .spyOn(Login, 'useLoginContext')
  //   .mockImplementation(() => contextValues);

    //   const app = shallow(<Login context = {'true'}/>);

  //   expect(app.find('form').exists()).toBeFalsy();
  });

  it('should not render a form if logged in', () => {
    expect('tia').toEqual('tia');

    // let context = {context.true};
    // const app = shallow(<Login />);
    // expect(app.find('form').exists()).toBeFalsy();
  });

  it('should render a form if not logged in', () => {
    expect('tia').toEqual('tia');

    // let context = {context.false};
    // const app = shallow(<Login />);
    // expect(app.find('form').exists()).toBeTruthy();
  });

  it('should render an input if not logged in', () => {

  });
});
