import "./Review.css";
import React, { useContext, useEffect, useState } from "react";
import {
  clearTheCart,
  deleteFromDb,
  getStoredCart,
} from "../../utilities/fakedb";
import fakeData from "../../fakeData/localDatabase.json";
import Order from "../Order/Order";
import OrderSummery from "../OrderSummery/OrderSummery";
import thankYou from "../../images/thank-you.gif";
import { UserContext } from "../../App";

const Review = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [review, setReview] = useState([]);
  const [clean, setClean] = useState(false);
  const [confirm, setConfirm] = useState(false);

  const handleProcessOrder = () => {
    setReview([]);
    setConfirm(true);
    clearTheCart();
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
        <img src={thankYou} alt="" id="congratulations" />
        <p>Continue Shopping</p>
      </div>
    );
  }

  return (
    <div className="row container-fluid">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="/shop">
            EASY65
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <span class="navbar-text">
              <button
                className="btn btn-outline-dark"
                onClick={() => setLoggedInUser({})}
              >
                Sign Out
              </button>
            </span>
          </div>
        </div>
      </nav>
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
