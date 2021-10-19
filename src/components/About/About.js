import React from "react";

const About = () => {
  return (
    <div className="container">
      <div className="row container py-4">
        <div className="col-12 col-lg-6">
          <img
            className="img-fluid rounded"
            src="https://images.unsplash.com/photo-1612708771321-1cfe5ce5e106?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGRvY3RvcnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
        <div className="col-12 col-lg-6">
          <p className="text-primary fw-bold">About Us</p>
          <h3 className="fw-bold">Welcome to Your Doctor</h3>
          <p className="about-text">
            Your Doctor tertiary care doctor service in Bangladesh, providing
            comprehensive health care with the latest medical, surgical and
            diagnostic facilities. These services are provided by expert medical
            professionals, skilled nurses and technologists using
            state-of-the-art equipment, modern well researched protocols &
            processes. The eleven-storied modern structure with 435,000 square
            feet floor space, was conceptualized & designed by renowned
            architecture company Smith Group of United States of America.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
