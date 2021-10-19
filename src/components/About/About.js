import React from "react";

const About = () => {
  return (
    <div className="container">
      <div className="row container py-4">
        <div className="col-12 col-lg-6">
          <img
            className="img-fluid rounded"
            src="http://webdemo2.risegraph.net/wp-content/uploads/elementor/thumbs/friendly-female-doctor-and-small-girl-in-bed-in-ho-5A5LE87-1-p4u5qmntfwtdos5c7lbn6udf9ujs1q3z1nm7dh24a2.jpg"
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
