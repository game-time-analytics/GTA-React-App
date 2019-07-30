import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/app/app';
import LoginProvider from './components/context/loginContext';
import PlayerProvider from './components/context/playerContext';

import './reset.scss';
import './styles.scss';

function Main() {
  return (
    <BrowserRouter>
      <LoginProvider>
        <PlayerProvider>
          <div className="container">
            <App />
          </div>
        </PlayerProvider>
      </LoginProvider>
    </BrowserRouter>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);
