import { useContext } from 'react';
import CartContext from '../store/cart-Context';
import Button from '../UI/Button';
import classes from './HeaderButton.module.css';

const HeaderButton = (props) => {

const cartCtx=useContext(CartContext);

const {items}=cartCtx;

const numberOfCartItems=items.reduce((currValue,item)=>{
  return currValue+item.amount
},0)




  return (
    <Button className={classes.HeaderButton} onClick={props.onConfirmation}>
      <h1>Cart</h1>
      <span>{numberOfCartItems}</span>
    </Button>
  );
};

export default HeaderButton;
