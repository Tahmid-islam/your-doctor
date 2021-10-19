import React from "react";
import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <div className="newsletter text-center shadow-sm m-4 p-4 rounded-4">
      <h4 className="text-white fw-bolder fs-4 p-4">NEWSLETTER</h4>
      <div className="row">
        <div className="col-md-12 col-lg-6">
          <p className="fs-1 text-white">
            Subscribe to get latest health update
          </p>
        </div>
        <div className="col-md-12 col-lg-6">
          <div className="input-group rounded-3 pt-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Email"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <button
              className="btn btn-dark text-white"
              type="button"
              id="button-addon2"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
