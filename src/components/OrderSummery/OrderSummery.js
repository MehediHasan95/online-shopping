import React from "react";
import "./OrderSummery.css";

const OrderSummery = (props) => {
  const cart = props.cart;

  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    const product = cart[i];
    total = total + product.price;
  }

  let shipping = 0;
  if (total > 5000) {
    shipping = 0;
  } else if (total > 0) {
    shipping = 35;
  }

  let discount = 0;
  if (total > 3000) {
    discount = -total / 10;
  } else if (total > 0) {
    discount = 0;
  }

  return (
    <>
      <h4 className="text-center">Order Summary</h4>
      <hr />
      <h6>My Shopping Cart ({cart.length} items)</h6>
      <br />
      <div className="OrderSummery d-flex justify-content-between">
        <div>
          <p>Subtotal ({cart.length} Items)</p>
          <p>Shipping Fee:</p>
          <p>Discount (10%):</p>
          <hr />
          <p>
            <b>Total:</b>
          </p>
        </div>
        <div>
          <p>
            {total} <small>Tk</small>
          </p>
          <p>
            {shipping} <small>Tk</small>
          </p>
          <p>
            {discount} <small>Tk</small>
          </p>
          <hr />
          <p className="total">
            <b>
              {total + shipping} <small>Tk</small>
            </b>
          </p>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <button className="processPay" onClick={props.handleProcessOrder}>
          PROCEED TO CHECKOUT
        </button>
      </div>
    </>
  );
};

export default OrderSummery;
