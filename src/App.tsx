import React from "react";

import Bingo from "./components/Bingo";

import logo from "./images/walking.png";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <header className="App-header">
        <img src={logo} alt="walking" />
        <div>Walking BINGO</div>
      </header>
      <body>
        <Bingo />
      </body>
    </React.Fragment>
  );
}

export default App;
