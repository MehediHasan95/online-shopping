import React from "react";

import "./Product.css";
import { Link } from "react-router-dom";
import { MdShoppingCart } from "react-icons/md";

const Product = (props) => {
  const { key, title, image, price } = props.product;
  return (
    <>
      <div className="CardGroup">
        <div className="cards">
          <div className="cardImage ">
            <img src={image} alt={title} id="productImage" />
          </div>
          <div className="title">
            <Link to={"/product-details/" + key} className="productDetails">
              <h6 className="productName">{title}</h6>
            </Link>
          </div>
          <div className="details">
            <h6 className="price">
              {price}
              <small>
                <span className="bdTk">৳</span>
              </small>
            </h6>
          </div>
          <button
            className="cardButton"
            onClick={() => props.handleAddProduct(props.product)}
          >
            <MdShoppingCart />
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Product;
