import React from "react";

import Bingo from "./components/Bingo";

import logo from "./images/walking.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="walking" />
        <div>Walking BINGO</div>
      </header>
      <body>
        <Bingo />
      </body>
    </div>
  );
}

export default App;
