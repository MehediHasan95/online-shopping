import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import fakeData from "../../fakeData/localDatabase.json";
import Product from "../Product/Product";
import "./Shop.css";
import { addToDb } from "../../utilities/fakedb";
import { useHistory } from "react-router";

const Shop = () => {
  const data = fakeData;
  const [filter, setFilter] = useState(data);
  //console.log(filter);
  const [cart, setCart] = useState([]);
  const history = useHistory();

  const handleAddProduct = (product) => {
    //console.log("added...", product);
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.key);
    history.push("/review");
  };

  const filterProduct = (product) => {
    const updateList = data.filter((e) => e.category === product);
    setFilter(updateList);
  };

  const ShowProduct = () => {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-0 shadow-sm">
          <div className="container">
            <a className="navbar-brand fw-bold fs-4" href="/">
              EASY65
            </a>
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
                  <a
                    className="nav-link"
                    href="#/"
                    onClick={() => setFilter(data)}
                  >
                    All
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#/"
                    onClick={() => filterProduct("men")}
                  >
                    MEN
                  </a>
                </li>
                <li className="nav-item ">
                  <a
                    className="nav-link"
                    href="#/"
                    onClick={() => filterProduct("women")}
                  >
                    WOMEN
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#/"
                    onClick={() => filterProduct("girlsBaby")}
                  >
                    GIRLS KIDS
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#/"
                    onClick={() => filterProduct("boysBaby")}
                  >
                    BOYS KIDS
                  </a>
                </li>
              </ul>
              <div className="buttons">
                <a href="/review" className="btn btn-outline-dark">
                  <FontAwesomeIcon icon={faShoppingCart} /> Cart{" "}
                  {cart.length === 0 ? "" : cart.length}
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* <div className="cart">
          <OrderSummery cart={cart} />
        </div> */}

        <div className="productCart d-flex justify-content-center">
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
