import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import "./Order.css";

const Order = (props) => {
  const {
    key,
    title,
    image,
    price,
    quantity,
    category,
    stock,
    star,
    starCount,
  } = props.order;

  return (
    <>
      <div className="Order">
        <div className="orderImage">
          <img src={image} alt={title} width="300px" height="300px" />
        </div>
        <div className="orderDetails">
          <h5>{title}</h5>
          <p>Cost: {price}TK</p>
          <p>Catagory: {category}</p>
          <p>
            Rating: {star} ({starCount}⭐)
          </p>
          <p>Only {stock} left in stock - order soon</p>
          <h6>Quantity: {quantity}</h6>
          <button
            className="removeButton"
            onClick={() => props.removeProduct(key)}
          >
            <FontAwesomeIcon icon={faTrashAlt} /> Remove
          </button>
        </div>
      </div>
    </>
  );
};

export default Order;
