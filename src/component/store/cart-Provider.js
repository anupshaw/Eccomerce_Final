import { useReducer, useState } from "react";
import CartContext from "./cart-Context";

const cartReducer = (state, action) => {
  let updatedItems;


  if (action.type === "add") {
    let updatedtotalamount =
      state.totalamount + action.value.price * action.value.amount;
    const existingItem = state.item.find((item) => {
      return item.id === action.value.id;
    });

    if (existingItem) {
      const existingItemIndex = state.item.indexOf(existingItem);
      updatedItems = [...state.item];
      updatedItems[existingItemIndex] = {
        ...existingItem,
        amount: existingItem.amount + action.value.amount,
      };
    } else {
      updatedItems = state.item.concat(action.value);
    }

    return {
      item: updatedItems,
      totalamount: updatedtotalamount,
    };
  } else if (action.type === "remove") {
    const existingItem = state.item.find((item) => {
      return item.id === action.value;
    });

    const existingItemIndex = state.item.indexOf(existingItem);
    const existingItemAmount = existingItem.amount;
    const existingItemAmountNumber = +existingItemAmount;
    if (existingItemAmountNumber <= 1) {
      updatedItems = state.item.filter((item) => {
        return item.id !== action.value;
      });
    } else {
      updatedItems = [...state.item];
      updatedItems[existingItemIndex] = {
        ...existingItem,
        amount: existingItemAmountNumber - 1,
      };
    }

    return {
      item: updatedItems,
      totalamount: state.totalamount - existingItem.price,
    };
  }
};

const CartProvider = (props) => {
  const defaultState = {
    item: [],
    totalamount: 0,
  };

  const [isExecuted,setIsExecuted]=useState(false)

  const [cartState, dispatchItem] = useReducer(cartReducer, defaultState);

  const addIemHandler = (item) => {
    dispatchItem({ type: "add", value: item });
  };

  const removeItemHandler = (id) => {
    dispatchItem({ type: "remove", value: id });
  };

  const ExecuteHandler=()=>{
    setIsExecuted(true);
  }

  const cartContext = {
    items: cartState.item,
    totalamount: cartState.totalamount,
    addItem: addIemHandler,
    removeItem: removeItemHandler,
    isExecuted:isExecuted,
    isExecuteHandler:ExecuteHandler
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
