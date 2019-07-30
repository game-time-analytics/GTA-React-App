import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/app/app';
import LoginProvider from './components/context/loginContext';

import './reset.scss';
import './styles.scss';

function Main() {
  return (
    <BrowserRouter>
      <LoginProvider>
      <div className="container">
        <App />
      </div>
      </LoginProvider>
    </BrowserRouter>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);
