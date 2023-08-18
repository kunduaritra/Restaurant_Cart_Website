import { Fragment } from "react";
import classes from "./Modal.module.css";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className={classes.backdrop} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const targetElement = document.getElementById("overlays");
const Modal = (props) => {
  return (
    <Fragment>
      {/* <Backdrop />
      <ModalOverlay>{props.children}</ModalOverlay> */}
      {/* // without createPortal() */}
      {ReactDOM.createPortal(<Backdrop />, targetElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        targetElement
      )}
    </Fragment>
  );
};

export default Modal;
