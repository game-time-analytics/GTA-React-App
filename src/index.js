import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header/header';
import Footer from './components/footer/footer';

import './styles.scss';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        
        <img src={ require('./assets/Football-Analytics-Limitations.jpg') } alt="GTA logo" />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
