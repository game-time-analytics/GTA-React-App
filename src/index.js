import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/footer/footer';

import './styles.scss';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Game Time Analytics</h1>
        <header>
          <nav>
            <ul>
              <li>Player Stats</li>
              <li>Admin</li>
              <li>About Us</li>
            </ul>
          </nav>
        </header>
        <img src={ require('./assets/Football-Analytics-Limitations.jpg') } alt="GTA logo" />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
