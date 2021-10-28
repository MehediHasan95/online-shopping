import React from "react";
import "./Header.css";
import { BsCart3 } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";

import slider1 from "../../images/slider-1.png";
import slider2 from "../../images/slider-2.png";
import slider3 from "../../images/slider-3.png";

const Header = () => {
  return (
    <div className="Header">
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
              <a className="nav-link" id="men" href="/men">
                MEN
              </a>
              <a className="nav-link" id="women" href="/women">
                WOMEN
              </a>
              <a className="nav-link" id="baby" href="/baby">
                KIDS
              </a>
              <a className="nav-link" id="about" href="/about">
                ABOUT
              </a>
              <a className="nav-link" id="contact" href="/contact">
                CONTACT
              </a>
            </div>
            <div className="">
              <BsCart3 className="BsCart3" />
              <VscAccount className="VscAccount" />
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
              The Online Shopping System for electronics item shop web
              application is intended to provide complete solutions for vendors
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

export default Header;
