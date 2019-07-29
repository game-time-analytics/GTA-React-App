import React from "react";
import ReactDOM from "react-dom";

import "./styles.scss";

function App() {
  return (
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
      <footer>2019 GTA Online &#169;</footer>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
