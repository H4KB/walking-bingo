import "./Square.css";

import SquareModel from "../models/SquareModel";

const Square: React.FC<{ square: SquareModel; onClick: () => void }> = (
  props
) => {
  return (
    <div className="grid-item">
      <button key={props.square.id} className="square" onClick={props.onClick}>
        <img
          className="suare-image"
          src={props.square.imageUrl}
          alt={props.square.title}
        />
        <h2>{props.square.title}</h2>
      </button>
    </div>
  );
};

export default Square;
