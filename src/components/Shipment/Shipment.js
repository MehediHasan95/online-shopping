import { faStoreAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillIdcard } from "react-icons/ai";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import { db } from "../LogIn/firebase.config";
import "./Shipment.css";

const Shipment = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [payment, setPayment] = useState("");

  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPostsFromFirebase = [];
    const subscriber = db.collection("Shipment").onSnapshot((querySnapshot) => {
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
      <div className="d-flex justify-content-center spinnerCircle">
        <div className="spinner-border" role="status">
          <span className="sr-only"></span>
        </div>
      </div>
    );
  }

  const onSubmit = (Data) => {
    db.collection("Shipment")
      .add({
        name: name,
        email: email,
        address: address,
        phone: phone,
        payment: payment,
      })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
        alert("Error ", error);
      });
    setName("");
    setEmail("");
    setAddress("");
    setPhone("");
    setPayment("");
  };

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light ">
        <div class="container">
          <Link className="navbar-brand mx-auto" to="/shop">
            <FontAwesomeIcon icon={faStoreAlt} className="easy65IconShip" />
            <span className="shop-easy65-ship">Easy65</span>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <p>
            Order items: (
            <span className="totalOrderItems">{posts.length}</span>)
          </p>
        </div>
      </nav>
      <div className="Shipment container-fluid row">
        <div className="col-md-4">
          <div className="ship-form d-flex justify-content-center">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h4 className="text-center">Shipping Address</h4>
              <label htmlFor="name" className="ship-title">
                Name:
              </label>
              {errors.name && (
                <small className="ship-required">name is required</small>
              )}
              <input
                defaultValue={loggedInUser.name}
                {...register("name", { required: true })}
                className="ship-input"
                onChange={(e) => setName(e.target.value)}
              />

              <label htmlFor="email" className="ship-title">
                Email:
              </label>
              {errors.email && (
                <small className="ship-required">email is required</small>
              )}
              <input
                defaultValue={loggedInUser.email}
                {...register("email", { required: true })}
                className="ship-input"
                onChange={(e) => setEmail(e.target.value)}
              />

              <label htmlFor="address" className="ship-title">
                Address:
              </label>
              {errors.address && (
                <small className="ship-required">address is required</small>
              )}
              <input
                defaultValue={loggedInUser.address}
                {...register("address", { required: true })}
                className="ship-input"
                onChange={(e) => setAddress(e.target.value)}
              />

              <label htmlFor="phone" className="ship-title">
                Phone:
              </label>
              {errors.phone && (
                <small className="ship-required">phone is required</small>
              )}
              <input
                defaultValue={loggedInUser.phone}
                {...register("phone", { required: true })}
                className="ship-input"
                onChange={(e) => setPhone(e.target.value)}
              />
              <input
                type="submit"
                className="ship-button"
                value="PLACE ORDER"
              />
            </form>
          </div>
        </div>
        <div className="col-md-4">
          <div>
            <h5>Select Payment Method</h5>
            <select
              className="paymentOption"
              value={payment}
              onChange={(e) => setPayment(e.target.value)}
            >
              <option selected>---Select---</option>
              <option value="Cash on Delivery">Cash on Delivery</option>
              <option value="Bkash">Bkash</option>
              <option value="Nagat">Nagat</option>
              <option value="Rocket">Rocket</option>
            </select>
          </div>
        </div>
        <div className="col-md-4">
          <div className="shipment-order">
            {posts.map((item) => (
              <div className="receiverinfo">
                <div className="trakingID">
                  <span>
                    Tracking Number:<span className="trackNum">{item.key}</span>
                  </span>
                </div>
                <div className="receiverCard">
                  <p>
                    <AiFillIdcard /> <b>Receiver:</b> {item.name}
                  </p>
                  <p>
                    <b>Phone:</b> {item.phone}
                  </p>
                  <p>
                    <b>Address:</b> {item.address}
                  </p>
                  <p>
                    <b>Payment:</b> {item.payment}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Shipment;
