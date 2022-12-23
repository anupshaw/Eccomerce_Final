import { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from './CartModal.module.css'

const CartOverlay = (props) => {
  return <div className={`${classes.cartModal}  ${props.className}`}>{props.children}</div>;
};

const CartModal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <CartOverlay  className={`${props.className}`}>{props.children}</CartOverlay>,
        document.getElementById("cart-root")
      )}
    </Fragment>
  );
};

export default CartModal;
