import React from "react";
import { Rotate } from "react-reveal";

const Facilities = () => {
  return (
    <div className="container">
      <Rotate top right>
        <h3 className="py-4 text-primary text-center fw-bolder">
          OUR SERVICES & FACILITIES
        </h3>
      </Rotate>

      <div className="row">
        <div className="col-12 col-md-6 col-lg-4">
          <div className="border border-1 shadow-sm p-4 text-center rounded">
            <img
              className="img-fluid"
              src="http://cdns.iconmonstr.com/wp-content/assets/preview/2017/240/iconmonstr-building-38.png"
              alt=""
            />
            <h5 className="text-center pt-2 fw-bold">Specialize Services</h5>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <div className="border border-1 shadow-sm p-4 text-center rounded">
            <img
              className="img-fluid"
              src="http://cdns.iconmonstr.com/wp-content/assets/preview/2017/240/iconmonstr-medical-4.png"
              alt=""
            />
            <h5 className="text-center pt-2 fw-bold">Immunization</h5>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <div className="border border-1 shadow-sm p-4 text-center rounded">
            <img
              className="img-fluid"
              src="http://cdns.iconmonstr.com/wp-content/assets/preview/2017/240/iconmonstr-medical-9.png"
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
