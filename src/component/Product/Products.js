import React from "react";
import classes from "./Products.module.css";
import ProductItem from "./ProductItem";



const Products = (props) => {
  return (
    <div className={classes.product}>
      <div className={classes.Category}>
        <h1>{props.category}</h1>
      </div>
      <div className={classes.products}>
        {props.items.map((item) => {
          return (
            <ProductItem
              id={item.id}
              key={item.id}
              item={item.title}
              src={item.imageUrl}
              price={item.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default React.memo(Products);
