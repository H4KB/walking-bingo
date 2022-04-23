import React from "react";
import logo from "./img/walking.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="walking" />
        <div>Walking BINGO</div>
      </header>
      <body>
        <div id="bingo">
          <div className="grid-container">
            {Array(9)
              .fill(0)
              .map((_, i) => (
                <div className="grid-item">
                  <button key={i} className="square">
                    hello
                  </button>
                </div>
              ))}
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
