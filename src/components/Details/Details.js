import React, { useEffect, useState } from "react";
import {
  MdOutlineAddShoppingCart,
  MdOutlineShoppingCart,
} from "react-icons/md";
import { BiSend, BiStar } from "react-icons/bi";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import "./Details.css";
import { db } from "../LogIn/firebase.config";
import { Link } from "react-router-dom";

const Details = (props) => {
  const { category, key, title, image, price, stock, star } = props.details;

  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [feed, setFeed] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("Comment").add({
      feedBack: feed,
    });
    setFeed("");
  };

  useEffect(() => {
    const getPostsFromFirebase = [];
    const subscriber = db.collection("Comment").onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        getPostsFromFirebase.push({
          ...doc.data(),
          key: doc.id,
        });
      });
      setPosts(getPostsFromFirebase);
      setLoading(false);
    });

    return () => subscriber();
  }, [loading]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="sr-only"></span>
        </div>
      </div>
    );
  }

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
            <b> Rating:</b> {star} (⭐⭐⭐)
          </p>
          <p>
            <b>Stock:</b> Only {stock} left in stock - order soon
          </p>
          <h6>
            <b>COST:</b> {price} <span className="taka">&#2547;</span>
          </h6>
          <div>
            <Link to="/review">
              <button className="buyNowButton1">
                BUY NOW <MdOutlineShoppingCart className="iconSize" />
              </button>
            </Link>
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

        <div>
          <form onSubmit={handleSubmit}>
            <textarea
              className="review-area"
              placeholder="Please share your feedback about the product: was the product as described? What is the quality like?"
              value={feed}
              onChange={(e) => setFeed(e.target.value)}
            ></textarea>
            <button type="submit" className="review-button" value="Submit">
              Submit <BiSend />
            </button>
          </form>
        </div>
      </div>
      <div className="container">
        <hr />

        {posts.map((e) => (
          <div className="review-cart">
            <p>{e.feedBack}</p>
            <AiFillLike className="likeButton" />
            <AiFillDislike className="likeButton" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Details;
