import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const cart = props.cart;
  // const total = cart.reduce((total, element) => total + element.price, 0);
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    const elements = cart[i];
    total = total + elements.price;
  }

  let delivery = 0;
  if (total > 5000) {
    delivery = 0;
  } else if (total > 0) {
    delivery = 35;
  }

  return (
    <div>
      <h4>Order Summary</h4>
      <p>Items Selected: {cart.length}</p>
      <p>Product Price: {total}</p>
      <p>Delivery Charge: {delivery}</p>
      <p>Total Price: {total + delivery} Tk</p>
    </div>
  );
};

export default Cart;
