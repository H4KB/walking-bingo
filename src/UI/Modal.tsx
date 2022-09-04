import React, { Fragment, ReactNode } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = () => {
  return <div className={classes.backdrop} />;
};

const ModalOverlay: React.FC<{ modalChildren: ReactNode }> = ({
  modalChildren,
}) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{modalChildren}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays") as HTMLElement;

const Modal: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay modalChildren={children}>{children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
