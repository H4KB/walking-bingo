import SquareModel from "../models/SquareModel";
import Modal from "../UI/Modal";

import classes from "./ConfirmModal.module.css";

const ConfirmModal: React.FC<{ square: SquareModel }> = (props) => {
  return (
    <Modal>
      <div className={classes.confirmModal}>
        <img src={props.square.imageUrl} alt={props.square.title} />
        <div className={classes.title}>{props.square.title}</div>
        <button className={classes.foundButton}>found</button>
        <button className={classes.notFoundButton}>not found</button>
      </div>
    </Modal>
  );
};

export default ConfirmModal;
