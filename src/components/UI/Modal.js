import classes from "./Modal.module.css";
import {Fragment} from 'react';
import ReactDOM from 'react-dom';
import reactDom from "react-dom";
const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.Hide}></div>;
};
const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children} </div>
    </div>
  );
};

const portalElement = document.getElementById('overlays');
const Modal = (props) => {
  return <Fragment>
     {reactDom.createPortal(<Backdrop Hide={props.onHide}/>,portalElement)}
     {reactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalElement)}
  </Fragment>
};

export default Modal;
