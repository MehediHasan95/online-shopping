import React from "react";
import "./Product.css";
import { BsCart3 } from "react-icons/bs";

const Product = (props) => {
  // console.log(props.products);
  const { key, name, img, price, rating, stock } = props.products;
  return (
    <div className="Product">
      <div className="cardGroup d-flex justify-content-center">
        <div className="cards">
          <div className="image">
            <img src={img} alt={name} id="cardImage" />
          </div>
          <div className="title">
            <h5>{name}</h5>
          </div>
          <p>Price: {price} $</p>
          <button
            className="cartBtn"
            onClick={() => props.handleAddProduct(props.products)}
          >
            Buy <BsCart3 />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
