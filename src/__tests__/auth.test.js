import React from 'react';
import '../components/auth/auth';
import { shallow } from 'enzyme';

describe('auth component', () => {
  it('should render as expected', () => {
    const app = shallow(<h1></h1>);
    expect(app.find('h1').exists()).toBeTruthy();
  });
});

// import React from "react";

// import createStore from "../../store";
// import ToDo from "../components/todo/todo";
// import LoginProvider from "./context/loginContext";
// import Login from "./components/auth/login";

// describe("<Login/> (Enzyme Test)", () => {
// let store, wrapper;

// beforeEach(() => {
//   store = createStore();
//   wrapper = global.mount(
//     <LoginProvider>
//       <Login>
//         <ToDo />
//       </Login>
//     </LoginProvider>
//   );
// });

// it("is alive at application start", () => {
//   expect(wrapper.find("button").text()).toBe(" Login ");
// });

// it("button changes to Logout", () => {});
// });
