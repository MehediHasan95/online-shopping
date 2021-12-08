import React, { useState } from "react";
import fakeData from "../../fakeData/localDatabase.json";
import Product from "../Product/Product";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStoreAlt } from "@fortawesome/free-solid-svg-icons";
import { addToDb } from "../../utilities/fakedb";
//import { useHistory } from "react-router";
//import { UserContext } from "../../App";
import { Link } from "react-router-dom";
import { MdShoppingCart } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import "./Shop.css";

const Shop = () => {
  // const [loggInUser, setLoggInInUser] = useContext(UserContext);
  const data = fakeData;
  const [filters, setFilters] = useState(data);
  //console.log(filter);
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  //const history = useHistory();

  const handleAddProduct = (product) => {
    //console.log("added...", product);
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.key);
    //history.push("/review");
  };

  const filterProduct = (product) => {
    const updateList = data.filter((e) => e.category === product);
    setFilters(updateList);
  };

  const ShowProduct = () => {
    return (
      <div className="main-shop">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-0 shadow-sm sticky-top">
          <div className="container">
            <Link className="navbar-brand" to="/">
              <FontAwesomeIcon icon={faStoreAlt} className="easy65Icon" />
              <span className="shop-easy65">Easy65</span>
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
              <ul className="navbar-nav mx-auto">
                <li>
                  <Link
                    className="allLink"
                    to="#"
                    onClick={() => setFilters(data)}
                  >
                    All
                  </Link>
                </li>
                <li>
                  <Link
                    className="allLink"
                    to="#"
                    onClick={() => filterProduct("men")}
                  >
                    MEN
                  </Link>
                </li>
                <li>
                  <Link
                    className="allLink"
                    to="#"
                    onClick={() => filterProduct("women")}
                  >
                    WOMEN
                  </Link>
                </li>
                <li>
                  <Link
                    className="allLink"
                    to="#"
                    onClick={() => filterProduct("girlsBaby")}
                  >
                    GIRLS KIDS
                  </Link>
                </li>
                <li>
                  <Link
                    className="allLink"
                    to="#"
                    onClick={() => filterProduct("boysBaby")}
                  >
                    BOYS KIDS
                  </Link>
                </li>
              </ul>
              {/* <marquee width="55%" direction="left" className="scrollText">
                ⭐⭐⭐There are several offers happening here, actually. You
                have the big one: <span className="discount">10% discount</span>{" "}
                the entire site and store for everyday. Above that, you have
                free shipping on all orders your 6000tk purchase⭐⭐⭐
              </marquee> */}
              <Link to="/review" className="addToCartBtn">
                <MdShoppingCart />
                <span>
                  <sup className="addCart">
                    {cart.length === 0 ? "" : cart.length}
                  </sup>
                </span>
              </Link>
            </div>
          </div>
        </nav>

        <div className="container search-area">
          <input
            type="search"
            placeholder="Search in Easy"
            className="productSearchBar"
            onBlur={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
          <button className="searchButton">
            Search <AiOutlineSearch />
          </button>
        </div>

        {/* <div className="cart">
          <OrderSummery cart={cart} />
        </div> */}

        <div className="productCart d-flex justify-content-center">
          {filters
            .filter((e) => {
              if (searchTerm === "") {
                return e;
              } else if (
                e.title.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return e;
              }
              return 0;
            })
            .map((e) => (
              <Product
                key={e.key}
                handleAddProduct={handleAddProduct}
                product={e}
              ></Product>
            ))}
        </div>
      </div>
    );
  };

  return <>{<ShowProduct />}</>;
};

export default Shop;
