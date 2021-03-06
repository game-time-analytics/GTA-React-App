import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Auth from '../auth/auth';
import { LoginContext } from '../context/loginContext';
import { PlayerContext } from '../context/playerContext';

const If = (props) => {
  return props.condition ? props.children : null;
};

/**
* @description Header that renders a basic header with navigation links and title of the app
*/

const Header = () => {
  const context = useContext(LoginContext);
  const playerContext = useContext(PlayerContext);
  return (
    <header>
      <h1>Game Time Analytics</h1>
      <nav>
          <span>
            <Link to="/">Home</Link>
          </span>
          <Auth capability="read">
            <span>
              <Link to="/playerStats">Player Stats</Link>
            </span>
          </Auth>
          <Auth capability="superuser">
            <span>
              <Link to="/admin">Admin</Link>
            </span>
          </Auth>
          <span>
            <Link to="/aboutUs">About</Link>
          </span>
          <span>
          <If condition={context.loggedIn}>
            <Link to="/" onClick={() => { context.logout(); playerContext.resetSelected(); } }>Logout</Link>
          </If>
          </span>
      </nav>
    </header>
  );
};

export default Header;
