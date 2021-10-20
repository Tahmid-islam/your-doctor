import React from "react";
import doctorImg from "../../images/doctor-removebg-preview.png";

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
              <p className="fw-bolder fs-4 pt-4">Your Doctor</p>
              <h3>We are a reliable partner</h3>
              <p className="fs-5">
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
            <img className="img-fluid pt-4" src={doctorImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
