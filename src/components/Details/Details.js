import React from "react";
import {
  MdOutlineAddShoppingCart,
  MdOutlineShoppingCart,
} from "react-icons/md";
import { BiSend, BiStar } from "react-icons/bi";
import { BsStarFill, BsStarHalf } from "react-icons/bs";

import "./Details.css";

const Details = (props) => {
  const { category, key, title, image, price, stock, star, starCount } =
    props.details;
  return (
    <div>
      <div className="details-cards">
        <div className="details-image">
          <img src={image} alt={title} id="imageDetails" />
        </div>
        <div className="details-info">
          <h1>{title}</h1>
          <p>
            <b>CODE:</b> {key}
          </p>
          <p>
            <b>CATAGORY:</b> {category}
          </p>
          <p>
            <b> Rating:</b> {star} ({starCount})
          </p>
          <p>
            <b>Stock:</b> Only {stock} left in stock - order soon
          </p>
          <h6>
            <b>COST:</b> {price} <span className="taka">&#2547;</span>
          </h6>
          <div className="">
            <button className="buyNowButton1">
              BUY NOW <MdOutlineShoppingCart className="iconSize" />
            </button>
            <button className="buyNowButton1">
              ADD TO CART <MdOutlineAddShoppingCart className="iconSize" />
            </button>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="container comments">
        <h4 className="text-center">Ratings & Reviews</h4>
        <hr />
        {/* <h2>Star Rating (3.7)</h2> */}

        <div className="d-flex justify-content-center">
          <div className="ratingBox">
            <h1>4.3/5</h1>
            <p>
              <BiStar className="ratingSize" />
              <BiStar className="ratingSize" />
              <BiStar className="ratingSize" />
              <BiStar className="ratingSize" />
              <BiStar className="ratingSize" />
            </p>
            <p>27 Ratings</p>
          </div>

          <div className="ratingBox">
            <p>
              <BiStar />
              <BiStar />
              <BiStar />
              <BiStar />
              <BiStar />
            </p>
            <p>
              <BsStarHalf className="ratingIcon" />
              <BsStarHalf className="ratingIcon" />
              <BiStar />
              <BiStar />
            </p>
            <p>
              <BsStarFill className="ratingIcon" />
              <BsStarFill className="ratingIcon" />
              <BsStarFill className="ratingIcon" />
            </p>
            <p>
              <BsStarFill className="ratingIcon" />
              <BsStarFill className="ratingIcon" />
            </p>
            <p>
              <BsStarFill className="ratingIcon" />
            </p>
          </div>
        </div>
        <hr />
        <h4>Questions about this product</h4>
        <textarea
          name=""
          id="review-area"
          placeholder="Enter your question here"
        ></textarea>
        <button className="submit-area">
          ASK QUESTIONS <BiSend />
        </button>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default Details;
