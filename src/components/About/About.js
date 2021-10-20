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
          <p className="text-primary fw-bold pt-4">About Us</p>
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

      <div className="pt-4">
        <div className="row text-center">
          <div className="col-lg-4">
            <img
              src="https://cdns.iconmonstr.com/wp-content/assets/preview/2013/96/iconmonstr-pin-1.png"
              alt=""
            />
            <h3>Our Vision</h3>
            <p>
              To build a legacy of accessible, high quality, safe private
              healthcare for low and middle-income patients in emerging markets.
            </p>
          </div>
          <div className="col-lg-4">
            <img
              src="https://cdns.iconmonstr.com/wp-content/assets/preview/2013/96/iconmonstr-flag-14.png"
              alt=""
            />
            <h3>Our Mission</h3>
            <p>
              To be the emerging markets largest integrated healthcare network.
            </p>
          </div>
          <div className="col-lg-4">
            <img
              src="https://cdns.iconmonstr.com/wp-content/assets/preview/2013/96/iconmonstr-pin-7.png"
              alt=""
            />
            <h3>Our Motto</h3>
            <p>
              Helping to create healthier populations, increasing employment,
              boosting local retention of professional expertise.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
