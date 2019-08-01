import React from 'react';
import { Route } from 'react-router-dom';
import Auth from '../auth/auth';
import Header from '../header/header';
import Footer from '../footer/footer';
import Admin from '../admin/admin';
import Home from '../home/home';
import PlayerStats from '../playerStats/playerStats';
import AboutUs from '../aboutUs/aboutUs';
import Signin from '../signin/signin';
import Signup from '../signup/signup';

/**
 * App class that brings in the header component and has the two routes for this assignment
 */
class App extends React.Component {
  /**
   * render function that renders the header and attaches the two routes to the header
   */
  render() {
    return (
      <div>
        <Header />
        <Route exact path="/" component={Home} />
        <Auth capability="read">
          <Route path="/playerStats" component={PlayerStats} />
        </Auth>
        <Auth capability="superuser">
          <Route path="/admin" component={Admin} />
        </Auth>
        <Route path="/aboutUs" component={AboutUs} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
        <Footer />
      </div>
    );
  }
}

export default App;
