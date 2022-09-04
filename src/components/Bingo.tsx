import Square from "./Square";
import SquareModel from "../models/SquareModel";

import "./Bingo.css";

const Bingo = () => {
  const squares = [
    new SquareModel("1", "/images/walking.png", "walking"),
    new SquareModel("2", "/images/walking.png", "walking"),
    new SquareModel("3", "/images/walking.png", "walking"),
    new SquareModel("4", "/images/walking.png", "walking"),
    new SquareModel("5", "/images/walking.png", "walking"),
    new SquareModel("6", "/images/walking.png", "walking"),
    new SquareModel("7", "/images/walking.png", "walking"),
    new SquareModel("8", "/images/walking.png", "walking"),
    new SquareModel("9", "/images/walking.png", "walking"),
  ];

  return (
    <div className="bingo">
      <div className="bingo-title">
        <h2>Walking BINGO</h2>
      </div>
      <div className="bingo-squares">
        {squares.map((square) => (
          <Square key={square.id} square={square} />
        ))}
      </div>
    </div>
  );
};

export default Bingo;
