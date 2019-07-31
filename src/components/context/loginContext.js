/* eslint-disable max-len */
import React from 'react';
import cookie from 'react-cookies';
import jwt from 'jsonwebtoken';

export const LoginContext = React.createContext();

const SECRET = process.env.REACT_APP_SECRET || 'changeit';

/**
 * @method setLoginState
 * @param {String} token
 * @description checks if provided token is valid, if so will set loggedIn to true if not it will set loggIn to false and returns a new state
 */

const setLoginState = (token) => {
  let loggedIn = false;
  let user = {};
  try {
    user = jwt.verify(token, SECRET);
    loggedIn = true;
  } catch (e) {
    loggedIn = false;
    // eslint-disable-next-line no-param-reassign
    token = null;
  }
  return { user, loggedIn, token };
};

/**
 * LoginProvider class component
 * @description handles the state of login and loutout
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
   * @method login
   * @param {string} loginToken
   * @description saves the login information and token in cookies and sets the user info and token inside state
   */

  login = (loginToken) => {
    cookie.save('auth', loginToken);
    const { user, loggedIn, token } = setLoginState(loginToken);
    this.setState({ user, loggedIn, token });
  };

  /**
   * @method logout
   * @description removes the user info from cookies and set the user state to an empty object and flags loggedIn to false
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
        {/* eslint-disable-next-line react/prop-types */}
        {this.props.children}
      </LoginContext.Provider>
    );
  }
}

export default LoginProvider;
