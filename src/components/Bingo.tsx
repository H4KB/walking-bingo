import Square from "./Square";

import "./Bingo.css";

import logo from "../images/walking.png";

const Bingo = () => {
  return (
    <div id="bingo">
      <div className="grid-container">
        {Array(9)
          .fill(0)
          .map((_, i) => (
            <Square id={i} image={logo} text="hello" />
          ))}
      </div>
    </div>
  );
};

export default Bingo;
