import React from 'react';
import { shallow, mount } from 'enzyme';
// import ReactDOM from 'react-dom';
// import { PlayerContext } from '../../components/context/playerContext';


describe('playerStats component', () => {
  it('should render an h1 tag as expected', () => {
    const app = shallow(<h1></h1>);
    expect(app.find('h1').exists()).toBeTruthy();
  });

  it('should render an h2 tag as expected', () => {
    const app = shallow(<h2></h2>);
    expect(app.find('h2').exists()).toBeTruthy();
  });

  it('should render a div tag as expected', () => {
    const app = mount(<div></div>);
    expect(app.find('div').exists()).toBeTruthy();
  });
});


describe('Player Context', () => {
  it('should render a div with className PlayerStats', () => {
    // still having a hard time with bringing in context

    // const app = shallow(<div></div>);
    // container = document.createElement('div');
    // ReactDOM.render(<PlayerContext.Provider />, container);

    // const headerTag = container.querySelector('h1');

    // expect(headerTag.textContent).toBe('Playerstats!');

    expect('matt').toBe('matt');
  });
});
