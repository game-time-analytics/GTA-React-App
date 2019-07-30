import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Home class that contains a hello world for when the home route is hit
 */
const Home = () => {
  /**
   * render function that returns a simple hello world
   */

  return (
      <React.Fragment>
        <h1>Home!</h1>
        <span>
            <Link to="/signin">Sign In!</Link>
          </span>
          <span>
            <Link to="/signup">Sign Up!</Link>
          </span>
        <img src={ require('../../assets/Football-Analytics-Limitations.jpg') } alt="GTA logo" />
      </React.Fragment>
  );
};

export default Home;
