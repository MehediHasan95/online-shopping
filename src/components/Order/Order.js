import React from "react";
import "./Order.css";

const Order = (props) => {
  //   console.log(props);
  const { name, img, price, rating, stock, key, quantity } = props.product;
  return (
    <div className="Order">
      <div className="orderCard">
        <div className="orderImage">
          <img src={img} alt={name} id="orderImg" />
        </div>
        <div className="orderDetails">
          <h4>{name}</h4>
          <h6>CODE: {key}</h6>
          <h6>Price:{price}</h6>
          <h6>Stock: {stock} items left</h6>
          <h6>Rating: {rating}</h6>
          <p>Quantity: {quantity}</p>
        </div>
      </div>
    </div>
  );
};

export default Order;
