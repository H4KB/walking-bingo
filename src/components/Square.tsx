import "./Square.css";

type SquareProps = {
  id: number;
  image: string;
  text: string;
};

const Square = (props: SquareProps) => {
  return (
    <div className="grid-item">
      <button key={props.id} className="square">
        <img className="suare-image" src={props.image} alt={props.text} />
        <p>{props.text}</p>
      </button>
    </div>
  );
};

export default Square;
