import React, { useContext, useState } from "react";

import fakeData from "../../fakeData/localDatabase.json";
import Product from "../Product/Product";
import "./Shop.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingBag,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { addToDb } from "../../utilities/fakedb";
//import { useHistory } from "react-router";
//import { UserContext } from "../../App";
import { Link } from "react-router-dom";

const Shop = () => {
  // const [loggInUser, setLoggInInUser] = useContext(UserContext);
  const data = fakeData;
  const [filter, setFilter] = useState(data);
  //console.log(filter);
  const [cart, setCart] = useState([]);
  //const history = useHistory();

  const handleAddProduct = (product) => {
    //console.log("added...", product);
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.key);
    //history.push("/review");
  };

  const filterProduct = (product) => {
    const updateList = data.filter((e) => e.category === product);
    setFilter(updateList);
  };

  const ShowProduct = () => {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-0 shadow-sm sticky-top">
          <div className="container">
            <Link className="navbar-brand fs-4 EASY65" to="/">
              <FontAwesomeIcon icon={faShoppingBag} /> EASY65
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0 h6">
                <li className="nav-item">
                  <Link
                    className="nav-link allLink"
                    to="#"
                    onClick={() => setFilter(data)}
                  >
                    All
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link allLink"
                    to="#"
                    onClick={() => filterProduct("men")}
                  >
                    MEN
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link
                    className="nav-link allLink"
                    to="#"
                    onClick={() => filterProduct("women")}
                  >
                    WOMEN
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link allLink"
                    to="#"
                    onClick={() => filterProduct("girlsBaby")}
                  >
                    GIRLS KIDS
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link allLink"
                    to="#"
                    onClick={() => filterProduct("boysBaby")}
                  >
                    BOYS KIDS
                  </Link>
                </li>
              </ul>

              <Link
                to="/review"
                className="d-flex align-center-center addToCartBtn"
              >
                <FontAwesomeIcon icon={faShoppingCart} />
                <span>
                  <sup className="addCart">
                    {cart.length === 0 ? "" : cart.length}
                  </sup>
                </span>
              </Link>
            </div>
          </div>
        </nav>

        {/* <div className="cart">
          <OrderSummery cart={cart} />
        </div> */}

        <div className="productCart d-flex justify-content-center">
          {filter.length === 0 && (
            <div class="spinner-grow" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          )}
          {filter.map((e) => (
            <Product
              key={e.key}
              handleAddProduct={handleAddProduct}
              product={e}
            ></Product>
          ))}
        </div>
      </>
    );
  };

  return <>{<ShowProduct />}</>;
};

export default Shop;
