import superagent from 'superagent';
import React, { useState, useContext } from 'react';
import { LoginContext } from '../context/loginContext';

const API = process.env.REACT_APP_API;

const If = (props) => {
  // eslint-disable-next-line no-extra-boolean-cast
  return !!props.condition ? props.children : null;
};

/**
 * @description Login component that gets their username and password and provides them a token
 */

function Login() {
  const context = useContext(LoginContext);
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();


  /**
   * @param {Object} e 
   * @param {Function} loginMethodFromContext 
   * @description makes a call to the API and verifies username and password is correct.
   */
  
  const handleSubmit = (e, loginMethodFromContext) => {
    e.preventDefault();
    superagent
      .get(`${API}/signin`)
      .auth(username, password)
      .then((response) => {
        const token = response.text;
        loginMethodFromContext(token);
      })
      // eslint-disable-next-line no-console
      .catch(console.error);
  };
  return (
    <>
      <If condition={!context.loggedIn}>
        <div>
          <form onSubmit={e => handleSubmit(e, context.login)}>
            <input
              placeholder="username"
              name="username"
              onChange={e => setUsername(e.target.value)}
            />
            <input
              placeholder="password"
              name="password"
              type="password"
              onChange={e => setPassword(e.target.value)}
            />
            <input type="submit" value="login" />
          </form>
        </div>
      </If>
    </>
  );
}

export default Login;
