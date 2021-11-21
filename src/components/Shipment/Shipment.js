import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../App";
import { db } from "../LogIn/firebase.config";
import "./Shipment.css";

const Shipment = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const onSubmit = (Data) => {
    db.collection("Shipment")
      .add({
        name: name,
      })
      .then(() => {
        alert("Your Order confirm");
      })
      .catch((error) => {
        alert(error);
      });
    setName("");
    setEmail("");
    setAddress("");
    setName("");
  };

  //console.log(watch("example"));

  return (
    <div className="Shipment">
      <div className="ship-form d-flex justify-content-center">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2 className="text-center">SHIPMENT</h2>
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
            onChange={(e) => setName(e.target.defaultValue)}
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
            onChange={(e) => setEmail(e.target.defaultValue)}
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
            onChange={(e) => setAddress(e.target.defaultValue)}
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
            onChange={(e) => setPhone(e.target.defaultValue)}
          />

          <input type="submit" className="ship-button" />
        </form>
      </div>
    </div>
  );
};

export default Shipment;
