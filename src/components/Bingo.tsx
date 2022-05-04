import Square from "./Square";

import "./Bingo.css";

import logo from "../images/walking.png";

const Bingo = () => {
  return (
    <div className="bingo">
      <div className="bingo-title">
        <h2>Walking BINGO</h2>
      </div>
      <div className="bingo-squares">
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
