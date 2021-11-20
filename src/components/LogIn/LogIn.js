import React, { useContext, useState } from "react";
import "./LogIn.css";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import * as firebase from "firebase/app";
import "firebase/auth";
import {
  getAuth,
  signInWithPopup,
  FacebookAuthProvider,
  signOut,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import firebaseConfig from "./firebase.config";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router";

import Cookies from "js-cookie";

firebase.initializeApp(firebaseConfig);

const LogIn = () => {
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignedIn: false,
    username: "",
    email: "",
    photo: "",
    password: "",
    success: false,
    error: "",
  });

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  const auth = getAuth();
  const GoogleProvider = new GoogleAuthProvider();
  const FacebookProvider = new FacebookAuthProvider();

  const handleSignIn = () => {
    signInWithPopup(auth, GoogleProvider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const { displayName, photoURL, email } = result.user;

        const SignedInUser = {
          isSignedIn: true,
          username: displayName,
          email: email,
          photo: photoURL,
        };
        setUser(SignedInUser);
        //console.log(displayName, email, photoURL);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(errorCode, errorMessage, email, credential);
      });
  };

  const handleFbSignIn = () => {
    signInWithPopup(auth, FacebookProvider)
      .then((result) => {
        const user = result.user;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        const signedOutUser = {
          isSignedIn: false,
          username: "",
          email: "",
          photo: "",
        };
        setUser(signedOutUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleBlur = (e) => {
    let isFormValid = true;
    if (e.target.name === "username") {
      isFormValid = /^[a-zA-Z0-9]+$/.test(e.target.value);
    }
    if (e.target.name === "email") {
      isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if (e.target.name === "password") {
      const isPasswordValid = e.target.value > 6;
      const passwordHasNumber = /\d{1}/.test(e.target.value);
      isFormValid = isPasswordValid && passwordHasNumber;
    }
    if (isFormValid) {
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  };

  const handleSubmit = (e) => {
    if (newUser && user.email && user.password) {
      createUserWithEmailAndPassword(auth, user.email, user.password)
        .then((res) => {
          const newUserInfo = { ...user };
          newUserInfo.success = true;
          newUserInfo.error = "";
          setUser(newUserInfo);
          updateUserInfo(user.username);
        })
        .catch((error) => {
          const newUserInfo = { ...user };
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setUser(newUserInfo);
        });
    }

    if (!newUser && user.email && user.password) {
      signInWithEmailAndPassword(auth, user.email, user.password)
        .then((res) => {
          const newUserInfo = { ...user };
          newUserInfo.success = true;
          newUserInfo.error = "";
          setUser(newUserInfo);
          setLoggedInUser(newUserInfo);
          history.replace(from);
          //localStorage.setItem("user", user.email);

          Cookies.set("token", user.email);
          //console.log("Customer Username", res.user);
        })

        .catch((error) => {
          const newUserInfo = { ...user };
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setUser(newUserInfo);
        });
    }
    e.preventDefault();
  };

  const updateUserInfo = (username) => {
    updateProfile(auth.currentUser, {
      displayName: username,
    })
      .then((res) => {
        console.log("user profile updated", res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="SignInSignUp">
      {/* {user.isSignedIn && <h3>Email: {user.username}</h3>}
      {user.isSignedIn && <h3>Email: {user.email}</h3>} */}

      <form onSubmit={handleSubmit} className="form-field">
        <h4>{newUser ? "CREATE ACCOUNT" : "LOG IN"}</h4>
        {!newUser && (
          <div>
            <div className="input-field">
              <input
                type="email"
                name="email"
                onBlur={handleBlur}
                placeholder="Email"
                required
              ></input>
            </div>
            <div className="input-field">
              <input
                type="password"
                name="password"
                onBlur={handleBlur}
                placeholder="Password"
                required
              ></input>
            </div>
          </div>
        )}

        {newUser && (
          <div>
            <div className="input-field">
              <input
                type="text"
                name="username"
                onBlur={handleBlur}
                placeholder="Username"
                required
              ></input>
            </div>

            <div className="input-field">
              <input
                type="email"
                name="email"
                onBlur={handleBlur}
                placeholder="Email Address"
                required
              ></input>
            </div>

            <div className="input-field">
              <input
                type="email"
                name="email"
                onBlur={handleBlur}
                placeholder="Confirm Email Address"
                required
              ></input>
            </div>

            <div className="input-field">
              <input
                type="password"
                name="password"
                onBlur={handleBlur}
                placeholder="Password"
                required
              ></input>
            </div>

            <div className="input-field">
              <input
                type="password"
                placeholder="Confirm Password"
                onBlur={handleBlur}
                required
              ></input>
            </div>
          </div>
        )}

        <div className="text-center">
          <input
            type="submit"
            className="submit-field"
            value={newUser ? "SIGN UP" : "SIGN IN"}
          ></input>
        </div>
      </form>

      <div className="linkConnected">
        <p>Or Sign Up Using</p>
        {user.isSignedIn ? (
          <FcGoogle onClick={handleSignOut} className="google" />
        ) : (
          <FcGoogle onClick={handleSignIn} className="google" />
        )}
        <BsFacebook onClick={handleFbSignIn} className="facebook" />
      </div>

      <div className="d-flex justify-content-center">
        <button className="toggleButton" onClick={() => setNewUser(!newUser)}>
          {newUser ? "SIGN IN" : "SIGN UP"}
        </button>
      </div>

      {user.success && (
        <p className="successMessage">
          {newUser ? "Account Sucessfully Created" : "Log In Successfull"}
        </p>
      )}
      {user.error && (
        <p className="errorMessage">
          {newUser ? "Already have an account?" : "Couldn't find your account"}
        </p>
      )}
    </div>
  );
};

export default LogIn;
