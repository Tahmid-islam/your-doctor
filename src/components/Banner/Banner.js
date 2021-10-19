import React from "react";

const Banner = () => {
  return (
    <div
      style={{ backgroundColor: "#00b894", textAlign: "justify" }}
      className="text-white"
    >
      <div className="container">
        <div className="row container">
          <div className="col-md-6 col-lg-8 d-flex align-items-center justify-content-center">
            <div>
              <p className="fw-bolder">Your Doctor</p>
              <h3>We are a reliable partner</h3>
              <p>
                Your Doctor is an organization that promotes the art and science
                of medicine and the betterment of public health. Although the
                AMA supports the principles of competent, compassionate, ethical
                care and excellent patient-physician communication, we are not
                an organization that is authorized to review specific complaints
                about care.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <img
              className="img-fluid"
              src="http://webdemo2.risegraph.net/wp-content/uploads/2021/03/main-1.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
