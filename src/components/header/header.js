import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Header/nav bar links for home and code
 * @description header/nav bar
 */
const Header = () => {
  return (
    <header>
      <h1>Game Time Analytics</h1>
      <nav>
          <span>
            <Link to="/">Home</Link>
          </span>
          <span>
            <Link to="/playerStats">Player Stats</Link>
          </span>
          <span>
            <Link to="/admin">Admin</Link>
          </span>
          <span>
            <Link to="/aboutUs">About Us</Link>
          </span>
      </nav>
    </header>
  );
};

export default Header;
