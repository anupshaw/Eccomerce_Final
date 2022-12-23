import React, { useContext, useEffect } from "react";
// import ProductSummary from "../component/Product/ProductSummary";
import Products from "../component/Product/Products";
import CartContext from "../component/store/cart-Context";
import productsArr from "../Data/DummyData";

const Store = () => {
  const cartCtx = useContext(CartContext);

  useEffect(() => {
    console.log('cartCtx',cartCtx)
    if(!cartCtx.isExecuted){
    fetch("https://react-http-92751-default-rtdb.firebaseio.com/cart.json")
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        console.log("store", data);
        for (let key in data) {
          cartCtx.addItem({ ...data[key], firebasekey: key });
          cartCtx.isExecuteHandler();
        }
      });
    }
  }, []);
  return (
    <>
      <Products category={"Music"} items={productsArr} />
      <Products category={"Merch"} items={productsArr} />
    </>
  );
};

export default Store;
