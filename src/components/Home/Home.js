import React from "react";
import "./Home.css";
import { BsFacebook } from "react-icons/bs";
import {
  MdOutlineAccountCircle,
  MdOutlineSearch,
  MdShoppingCart,
} from "react-icons/md";
import { GrDeliver } from "react-icons/gr";

import { RiSecurePaymentLine } from "react-icons/ri";
import { FaMoneyBillAlt } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { BsTwitter } from "react-icons/bs";
import { AiFillHeart, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStoreAlt } from "@fortawesome/free-solid-svg-icons";

import slider1 from "../../images/backgruond1.webp";
import slider2 from "../../images/backgruond2.webp";
import slider3 from "../../images/background3.png";

import men from "../../images/men.webp";
import women from "../../images/women.webp";
import baby from "../../images/baby.webp";

import { Link } from "react-router-dom";

// import { useHistory } from "react-router";

const Home = () => {
  // const history = useHistory();
  // const handleCart = () => {
  //   history.push("/shipment");
  // };

  return (
    <>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="#/">
              <span className="logoDesign">
                <FontAwesomeIcon icon={faStoreAlt} className="mainLogo" />
              </span>
              <span className="e65">Easy65</span>
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
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0 fw-bold">
                <li className="nav-item">
                  <Link className="nav-link" to="/shop">
                    Shop
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="">
                    Blog
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
              <Link to="" className="iconLink">
                <MdOutlineSearch className="icon" />
              </Link>
              <Link to="/login" className="iconLink">
                <MdOutlineAccountCircle className="icon" />
              </Link>
              <Link to="/review" className="iconLink">
                <MdShoppingCart className="iconLast" />
              </Link>
            </div>
          </div>
        </nav>
      </div>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={slider1} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block text">
              <h1>Minimal Menz Style</h1>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={slider2} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block text">
              <h1>Minimal Ladiez Style</h1>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={slider3} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block text">
              <h1>Minimal Kidz Style</h1>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <br />
      <br />
      <h1 className="text-center">C A T A G O R I E S</h1>
      <div className="container catagories-card d-flex justify-content-center">
        <Link to="/shop">
          <div className="catagoriesName">
            <div>
              <img src={men} alt="" />
            </div>
            <div className="catagoreName">
              <h2>MEN</h2>
            </div>
          </div>
        </Link>
        <Link to="/shop">
          <div className="catagoriesName">
            <div>
              <img src={women} alt="" />
            </div>
            <div className="catagoreName">
              <h2>WOMEN</h2>
            </div>
          </div>
        </Link>
        <Link to="/shop">
          <div className="catagoriesName">
            <div>
              <img src={baby} alt="" />
            </div>
            <div className="catagoreName">
              <h2>KIDS</h2>
            </div>
          </div>
        </Link>
      </div>
      <br />
      <h1 className="text-center">T E R M S</h1>
      <br />
      <div className="delivery d-flex justify-content-center">
        <div className="support">
          <GrDeliver className="deliveryIcon" />
          <h4>Fast & Free Delivery</h4>
          <p>Free delivery on all orders</p>
        </div>
        <div className="support">
          <RiSecurePaymentLine className="deliveryIcon" />
          <h4>Secure Payment</h4>
          <p>Free delivery on all orders</p>
        </div>
        <div className="support">
          <FaMoneyBillAlt className="deliveryIcon" />
          <h4>Money Back Guarantee</h4>
          <p>Free delivery on all orders</p>
        </div>
        <div className="lastSupport">
          <BiSupport className="deliveryIcon" />
          <h4>Online Support</h4>
          <p>Free delivery on all orders</p>
        </div>
      </div>
      <br />
      <br />
      <h1 className="text-center">D E V E L O P E R</h1>
      <br />
      <br />

      <div className="mainFooter">
        <div className="footer-area d-flex justify-content-center">
          <div className="footer-box">
            <span>
              <FontAwesomeIcon icon={faStoreAlt} className="footerLogo" />
            </span>
            <span className="footerEasy65">Easy65</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus, quis.
            </p>
          </div>
          <div className="footer-box">
            <h5>Address</h5>
            <p>
              Any questions? Let us know in store at 8th floor, 379 Hudson St,
              New York, NY 10018 or call us on (+1) 96 716 6879
            </p>
            <a href="/contact">FAQ</a>
          </div>
          <div className="footer-box">
            <h5>Network</h5>
            <ul>
              <li>
                <BsFacebook /> <a href="www.facebook.com">Facebook</a>
              </li>
              <li>
                <BsTwitter /> <a href="www.twitter.com">Twitter</a>
              </li>
              <li>
                <AiFillYoutube /> <a href="www.youtube.com">Youtube</a>
              </li>
              <li>
                <AiFillLinkedin /> <a href="www.linkedin.com">Linkedin</a>
              </li>
            </ul>
          </div>
        </div>

        <p className="text-center">
          Copyright ©2021 All rights reserved | Made by <AiFillHeart />
          <span className="developerTag">
            <a href="https://www.linkedin.com/login"> mehedi hasan</a>
          </span>
        </p>
      </div>
    </>
  );
};

export default Home;
