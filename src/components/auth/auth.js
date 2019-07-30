import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { LoginContext } from '../context/loginContext';

const If = (props) => {
  return props.condition ? props.children : null;
};

/**
 * Auth class component
 * @description class that determines whether the user has authorization to render
 */
const Auth = (props) => {
  const context = useContext(LoginContext);

  const okToRender = context.loggedIn 
  && (props.capability ? context.user.capabilities 
    && context.user.capabilities.includes(props.capability) : true);

  return <If condition={okToRender}>{props.children}</If>;
};

Auth.propTypes = {
  capability: PropTypes.string.isRequired,
};

export default Auth;
