import React from "react";
import "./Details.css";

const Details = (props) => {
  const { category, key, title, image, price } = props.details;
  return (
    <div>
      <div className="details-cards">
        <div className="details-image">
          <img src={image} alt={title} id="imageDetails" />
        </div>
        <div className="details-info">
          <p>Category: {category}</p>
          <small>CODE: {key}</small>
          <h5>{title}</h5>
          <h6>Price: {price}</h6>
          <button>Buy now</button>
        </div>
      </div>
      <div className="comments">
        <h4>Customer Reviews</h4>
      </div>
    </div>
  );
};

export default Details;
