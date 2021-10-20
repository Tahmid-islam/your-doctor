import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { Rotate } from "react-reveal";
import Doctor from "../Dcotor/Doctor";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    const url = "/data.json";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setDoctors(data);
      });
  }, []);
  return (
    <div className="py-3 my-4 fw-bold">
      <Rotate top left>
        <h3 className="py-4 text-primary text-center fw-bolder">OUR DOCTORS</h3>
      </Rotate>
      <Row xs={1} md={2} lg={3} className="g-4 container mx-auto">
        {doctors.map((doctor) => (
          <Doctor key={doctor.id} doctor={doctor}></Doctor>
        ))}
      </Row>
    </div>
  );
};

export default Doctors;
