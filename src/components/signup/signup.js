import superagent from 'superagent';
import React, { useState, useContext } from 'react';
import { LoginContext } from '../context/loginContext';

const API = process.env.REACT_APP_API;

const If = (props) => {
  return !!props.condition ? props.children : null;
};

/**
 * login function
 * @description logs a user in by contacting context to add their infor and get a token
 */

function Signup() {
  const context = useContext(LoginContext);
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();

  // const handleUsername = e => {
  //   setUsername(e.target.value);
  // };

  // const handlePassword = e => {
  //   setPassword(e.target.value);
  // };

  // const handleChange = e => {
  //   if(e.target.name === 'username'){
  //     setUsername(e.target.value);
  //   }else{
  //     setPassword(e.target.value);
  //   }
  // }

  const handleSubmit = (e, loginMethodFromContext) => {
    e.preventDefault();
    superagent
      .get(`${API}/signup`)
      .auth(username, password, email)
      .then((response) => {
        let token = response.text;
        loginMethodFromContext(token);
      })
      .catch(console.error);
  };
  return (
    <>
      <If condition={context.loggedIn}>
        <button onClick={context.logout}>Log Out</button>
      </If>
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
