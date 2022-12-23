import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import { useContext, useEffect } from "react";
import CartContext from "../store/cart-Context";
import Button from "../UI/Button";
import CartModal from "../UI/CartModal";

const Cart =  () => {
  const cartCtx = useContext(CartContext);




  return (
    <CartModal className={classes.cart}>
      <h1>Cart</h1>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        {cartCtx.items.map((item) => {
          return (
            <CartItem
              id={item.id}
              key={item.id}
              cartItemName={item.item}
              src={item.src}
              cartItemPrice={item.price}
              cartItemAmount={item.amount}
            />
          );
        })}
        <tfoot>
          <tr>
            <td colSpan={3}>
              Total ${cartCtx.totalamount}
              <br />
              <Button>PURCHASE</Button>
            </td>
          </tr>
        </tfoot>
      </table>
    </CartModal>
  );
};

export default Cart;
