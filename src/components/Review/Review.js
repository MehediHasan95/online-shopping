import "./Review.css";
import React, { useEffect, useState } from "react";
import {
  clearTheCart,
  deleteFromDb,
  getStoredCart,
} from "../../utilities/fakedb";
import fakeData from "../../fakeData/localDatabase.json";
import Order from "../Order/Order";
import OrderSummery from "../OrderSummery/OrderSummery";
import congratulations from "../../images/congratulations.png";
import { useHistory } from "react-router";

const Review = () => {
  const [review, setReview] = useState([]);
  const [clean, setClean] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const history = useHistory();

  const handleProcessOrder = () => {
    // setReview([]);
    // setConfirm(true);
    // clearTheCart();
    history.push("/shipment");
  };

  const removeProduct = (productKey) => {
    //console.log("remove clicked", productKey);
    const newCart = review.filter((e) => e.key !== productKey);
    setReview(newCart);
    setClean(true);
    deleteFromDb(productKey);
  };

  useEffect(() => {
    const saveReview = getStoredCart();
    const productkeys = Object.keys(saveReview);
    const cartProducts = productkeys.map((key) => {
      const products = fakeData.find((e) => e.key === key);
      products.quantity = saveReview[key];
      return products;
    });
    setReview(cartProducts);
  }, []);

  let cleanOrder;
  if (clean) {
    cleanOrder = <h2>clean card</h2>;
  }

  let confirmOrder;
  if (confirm) {
    confirmOrder = (
      <div>
        <img src={congratulations} alt="" id="congratulations" />
        <p>Continue Shopping</p>
      </div>
    );
  }

  return (
    <div className="row container-fluid">
      <h2 className="text-center">EASY65</h2>

      <hr />

      <div className="col-md-9 box1">
        {review.map((e) => (
          <Order key={e.key} removeProduct={removeProduct} order={e}></Order>
        ))}
        {cleanOrder}

        <div className="confirmOrder ">{confirmOrder}</div>
      </div>
      <div className="col-md-3 box2">
        <OrderSummery
          cart={review}
          handleProcessOrder={handleProcessOrder}
        ></OrderSummery>
      </div>
    </div>
  );
};

export default Review;
