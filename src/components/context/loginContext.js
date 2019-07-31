import React from 'react';
import cookie from 'react-cookies';
import jwt from 'jsonwebtoken';

export const LoginContext = React.createContext();

const SECRET = process.env.REACT_APP_SECRET || 'changeit';

const setLoginState = (token) => {
  let loggedIn = false;
  let user = {};
  try {
    // check token provided is good
    user = jwt.verify(token, SECRET);
    // if so, flag user to loggedin
    loggedIn = true;
  } catch (e) {
    // if bad token, flag to logged off and delete token
    loggedIn = false;
  }
  // return new state
  return { user, loggedIn, token };
};

/**
 * loginProvider class component
 * @description class that handles login and logout functionality
 */

class LoginProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: this.login,
      logout: this.logout,
    };
  }

  /**
   * login function
   * @param {string} loginToken
   * @description if user logged in saves name and their token
   */

  login = (loginToken) => {
    cookie.save('auth', loginToken);
    const { user, loggedIn, token } = setLoginState(loginToken);
    this.setState({ user, loggedIn, token });
  };

  /**
   * logout function
   * @description logs a user out
   */

  logout = () => {
    cookie.remove('auth');
    this.setState({ user: {}, loggedIn: false, token: null });
  };

  /**
   * getDerivedStateFromProps function
   * @param {object} props
   * @param {object} state
   * @description is user logged in or not and has token
   */
  static getDerivedStateFromProps(props, state) {
    const qs = new URLSearchParams(document.location.search);
    const cookieToken = cookie.load('auth');
    const loginToken = qs.get('token') || cookieToken || null;
    const { user, loggedIn, token } = setLoginState(loginToken);
    return {
      ...state, user, loggedIn, token,
    };
  }

  render() {
    return (
      <LoginContext.Provider value={this.state}>
        {this.props.children}
      </LoginContext.Provider>
    );
  }
}

export default LoginProvider;
