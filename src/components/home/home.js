import React from 'react';
import { Link } from 'react-router-dom';

/**
 * @description Home component that renders home and links to signin, signup and logo image
 */
const Home = () => {
  return (
      <React.Fragment>
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
