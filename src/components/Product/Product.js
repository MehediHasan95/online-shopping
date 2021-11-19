import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";
import { Link } from "react-router-dom";

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
              <h5>{title}</h5>
            </Link>
          </div>
          <div className="details">
            <h6 className="price">
              {price} <small>Tk</small>
            </h6>
          </div>
          <button
            className="cardButton"
            onClick={() => props.handleAddProduct(props.product)}
          >
            <FontAwesomeIcon icon={faShoppingCart} /> ADD TO CART
          </button>
        </div>
      </div>
    </>
  );
};

export default Product;
