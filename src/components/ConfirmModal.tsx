import SquareModel from "../models/SquareModel";
import Modal from "../UI/Modal";

import classes from "./ConfirmModal.module.css";

const ConfirmModal: React.FC<{
  square: SquareModel;
  onFoundClick: () => void;
  onNotFoundClick: () => void;
}> = (props) => {
  return (
    <Modal>
      <div className={classes.confirmModal}>
        <img src={props.square.imageUrl} alt={props.square.title} />
        <div className={classes.title}>{props.square.title}</div>
        <button className={classes.foundButton} onClick={props.onFoundClick}>
          found
        </button>
        <button
          className={classes.notFoundButton}
          onClick={props.onNotFoundClick}
        >
          not found
        </button>
      </div>
    </Modal>
  );
};

export default ConfirmModal;
