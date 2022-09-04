import "./Square.css";

import SquareModel from "../models/SquareModel";

const Square: React.FC<{ square: SquareModel }> = (props) => {
  return (
    <div className="grid-item">
      <button key={props.square.id} className="square">
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
