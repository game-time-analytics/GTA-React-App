import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';

/**
 * @description Home component that renders home and links to signin, signup and logo image
 */
const Home = () => {
  return (
      <React.Fragment>      
        <BrowserRouter>
          <span id="signin">
            <Link to="/signin">Sign In!</Link>
          </span>
          <span id="signup">
            <Link to="/signup">Sign Up!</Link>
          </span>
          <img src={ require('../../assets/Football-Analytics-Limitations.jpg') } alt="GTA logo" />
        </BrowserRouter>
      </React.Fragment>
  );
};



export default Home;
