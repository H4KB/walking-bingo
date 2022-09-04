import Square from "./Square";
import SquareModel from "../models/SquareModel";

import "./Bingo.css";
import { Fragment, useState } from "react";
import ConfirmModal from "./ConfirmModal";

const Bingo = () => {
  const squares = [
    new SquareModel("1", "/images/walking.png", "walking"),
    new SquareModel("2", "/images/road_curve_mirror.png", "walking"),
    new SquareModel("3", "/images/walking.png", "walking"),
    new SquareModel("4", "/images/walking.png", "walking"),
    new SquareModel("5", "/images/walking.png", "walking"),
    new SquareModel("6", "/images/walking.png", "walking"),
    new SquareModel("7", "/images/walking.png", "walking"),
    new SquareModel("8", "/images/walking.png", "walking"),
    new SquareModel("9", "/images/walking.png", "walking"),
  ];

  const [confirmModalVisible, setConfirmModalVisible] = useState(false);
  const [selectedSquare, setSelectedSquare] = useState(squares[0]);

  const showModalHandler = (id: string) => {
    const selected = squares.find((square) => square.id === id);
    setSelectedSquare(selected!);
    setConfirmModalVisible(true);
  };

  const hideModalHandler = () => {
    setConfirmModalVisible(false);
  };

  return (
    <Fragment>
      {confirmModalVisible && (
        <ConfirmModal
          square={selectedSquare}
          onFoundClick={hideModalHandler}
          onNotFoundClick={hideModalHandler}
        />
      )}
      <div className="bingo">
        <div className="bingo-title">
          <h2>Walking BINGO</h2>
        </div>
        <div className="bingo-squares">
          {squares.map((square) => (
            <Square
              key={square.id}
              square={square}
              onClick={showModalHandler}
            />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Bingo;
