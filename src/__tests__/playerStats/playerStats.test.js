import React from 'react';
import '../../components/playerStats/playerStats';
import { shallow } from 'enzyme';

describe('playerStats component', () => {
  it('should render as expected', () => {
    const app = shallow(<h1></h1>);
    expect(app.find('h1').exists()).toBeTruthy();
  });
});

{/* <Provider store={store}>
<TextField name="text-input" />
</Provider> */}

//   const context = { name: 'foo' };
// const wrapper = shallow(<SimpleComponent />, { context });
// expect(wrapper.text()).to.equal('foo');
// wrapper.setContext({ name: 'bar' });
// expect(wrapper.text()).to.equal('bar');
// wrapper.setContext({ name: 'baz' });
// expect(wrapper.text()).to.equal('baz');

// let BaseFieldHOCComponent;
// beforeEach(() => {  
//     const TextInput = () => { return 'text input'; },
//         BaseFieldHOCWrapper = BaseFieldHOC(TextInput),
//         TextField = reduxForm({ form: 'testForm' })(BaseFieldHOCWrapper);
//     BaseFieldHOCComponent = renderer.create(
//         <Provider store={store}>
//             <TextField name="text-input" />
//         </Provider>
//     ).toJSON();
// });

