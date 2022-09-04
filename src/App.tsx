import React from "react";

import Bingo from "./components/Bingo";

import logo from "./images/walking.png";
import "./App.css";
import ConfirmModal from "./components/ConfirmModal";
import SquareModel from "./models/SquareModel";

function App() {
  return (
    <React.Fragment>
      <ConfirmModal
        square={new SquareModel("1", "/images/walking.png", "test")}
      />
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
