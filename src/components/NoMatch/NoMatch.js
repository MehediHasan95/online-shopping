import React from "react";
import "./NoMatch.css";
import error from "../../images/error.png";

const NoMatch = () => {
  return (
    <div className="error d-flex align-items-center">
      <div className="d-flex justify-content-center">
        <img src={error} alt="" id="errorImage" />
      </div>
    </div>
  );
};

export default NoMatch;
