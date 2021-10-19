import React from "react";

const Facilities = () => {
  return (
    <div className="container">
      <h3 className="py-4 text-primary text-center fw-bolder">
        OUR SERVICES & FACILITIES
      </h3>
      <div className="row">
        <div className="col-12 col-md-6 col-lg-4">
          <div className="border border-1 shadow-sm p-4 text-center">
            <img
              className="img-fluid"
              src="https://cdns.iconmonstr.com/wp-content/assets/preview/2017/240/iconmonstr-building-38.png"
              alt=""
            />
            <h5 className="text-center pt-2 fw-bold">Specialize Services</h5>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <div className="border border-1 shadow-sm p-4 text-center">
            <img
              className="img-fluid"
              src="https://cdns.iconmonstr.com/wp-content/assets/preview/2017/240/iconmonstr-medical-4.png"
              alt=""
            />
            <h5 className="text-center pt-2 fw-bold">Immunization</h5>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <div className="border border-1 shadow-sm p-4 text-center">
            <img
              className="img-fluid"
              src="https://cdns.iconmonstr.com/wp-content/assets/preview/2017/240/iconmonstr-medical-9.png"
              alt=""
            />
            <h5 className="text-center pt-2 fw-bold">
              Nursing, Paramedical Services
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
