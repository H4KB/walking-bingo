import "./Square.css";

import SquareModel from "../models/SquareModel";

const Square: React.FC<{
  square: SquareModel;
  onClick: (id: string) => void;
}> = (props) => {
  const clickHandler = () => {
    props.onClick(props.square.id);
  };

  return (
    <div className="grid-item">
      <button key={props.square.id} className="square" onClick={clickHandler}>
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
