import React, { useState } from "react";
import "./Women.css";
import data from "../../fakeData/womenData.json";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import { BsCart3 } from "react-icons/bs";

const Women = () => {
  const womenData = data;
  const [product, setProduct] = useState(womenData);
  const [cart, setCart] = useState([]);

  const handleAddProduct = (products) => {
    // console.log("addd", products);
    const newCart = [...cart, products];
    setCart(newCart);
  };

  return (
    <div className="Women">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            EASY65
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link" href="/men">
                MEN
              </a>
              <a class="nav-link" href="/order">
                ORDER
              </a>
            </div>
          </div>
          <a class="nav-link" href="/review">
            <BsCart3 /> {cart.length === 0 ? "" : cart.length}
          </a>
        </div>
      </nav>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-10 box1 cardItem justify-content-center">
            {product.map((item) => (
              <Product
                products={item}
                handleAddProduct={handleAddProduct}
              ></Product>
            ))}
          </div>
          <div className="col-md-2 box2">
            <Cart cart={cart}></Cart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Women;
