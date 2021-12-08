import "./Review.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt, faStoreAlt } from "@fortawesome/free-solid-svg-icons";
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
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

const Review = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [review, setReview] = useState([]);
  const [clean, setClean] = useState(false);
  const [confirm, setConfirm] = useState(false);

  const history = useHistory();

  const handleProcessOrder = () => {
    setReview([]);
    setConfirm(true);
    clearTheCart();
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
    cleanOrder = (
      <div className="cleanCard d-flex justify-content-center align-items-center">
        <h2 className="cleanMessage">There are no items in this cart...</h2>
      </div>
    );
  }

  let confirmOrder;
  if (confirm) {
    confirmOrder = (
      <div>
        <img src={thankYou} alt="" id="congratulations" />
        <h5>
          <Link to="/shop" className="continueShopping">
            CONTINUE SHOPPING
          </Link>
        </h5>
      </div>
    );
  }

  return (
    <div className="row container-fluid">
      <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <div class="container-fluid">
          <Link className="navbar-brand" to="/shop">
            <FontAwesomeIcon icon={faStoreAlt} className="easy65Icon" />
            <span className="shop-easy65">Easy65</span>
          </Link>
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
            <ul class="navbar-nav me-auto"></ul>
            <span class="navbar-text">
              <button
                className="btn btn-outline-dark"
                onClick={() => setLoggedInUser({})}
              >
                <FontAwesomeIcon icon={faSignOutAlt} />
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
