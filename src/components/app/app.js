import React from 'react';
import { Route } from 'react-router-dom';
import Header from '../header/header';
import Footer from '../footer/footer';
// import Story from "../Story/Story";
import Home from '../home/home';
import PlayerStats from '../playerStats/playerStats';

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
        <Route path="/playerStats" component={PlayerStats} />
        <img src={ require('../../assets/Football-Analytics-Limitations.jpg') } alt="GTA logo" />
        <Footer />
      </div>
    );
  }
}

export default App;