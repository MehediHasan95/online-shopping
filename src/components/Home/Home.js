import React from "react";
import "./Home.css";
import { BsCart3 } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";

import slider1 from "../../images/slider-1.png";
import slider2 from "../../images/slider-2.png";
import slider3 from "../../images/slider-3.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="Home">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a
            className="navbar-brand d-flex align-items-center"
            href="/"
            id="easy65"
          >
            EASY65
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="navbar-collapse justify-content-end"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav h6 ">
              <Link to="/shop" className="nav-link" id="men">
                SHOP
              </Link>

              <Link to="/about" className="nav-link" id="men">
                ABOUT
              </Link>

              <Link to="/contact" className="nav-link" id="men">
                CONTACT
              </Link>
            </div>
            <div>
              <Link to="/review">
                <BsCart3 className="BsCart3" />
              </Link>
              <Link to="/login">
                <VscAccount className="VscAccount" />
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="row d-flex justify-content-center headerRow">
        <div className="col-md-4 d-flex justify-content-center">
          <div className="text-area">
            <h1>ONLINE</h1>
            <h2>SHOPPING</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum
              dolore molestias sapiente dolorem inventore laudantium similique
              assumenda eaque sequi aliquid!
            </p>
            <button className="specialBtn">Shop</button>
          </div>
        </div>
        <div className="col-md-7 d-flex justify-content-center">
          <div className="slider ">
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={slider1} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src={slider2} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src={slider3} className="d-block w-100" alt="..." />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
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
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;