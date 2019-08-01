import superagent from 'superagent';
import React, { useState, useContext } from 'react';
import { LoginContext } from '../context/loginContext';

const API = process.env.REACT_APP_API;

const If = (props) => {
  return props.condition ? props.children : null;
};

/**
 * @description Signup component allows a user to signup in order to fully utilize the app
 */

function Signup() {
  const context = useContext(LoginContext);
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();

  const handleSubmit = (e, loginMethodFromContext) => {
    const obj = {
      username,
      email,
      password,
    };

    e.preventDefault();
    superagent
      .post(`${API}/signup`)
      .send(obj)
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
            <input
              placeholder="email"
              name="email"
              type="email"
              onChange={e => setEmail(e.target.value)}
            />
            <input type="submit" value="login" />
          </form>
        </div>
      </If>
    </>
  );
}

export default Signup;
