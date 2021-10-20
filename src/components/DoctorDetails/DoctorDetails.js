import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";

const DoctorDetails = () => {
  const { doctorId } = useParams();
  const [doctorDetails, setDoctorDetails] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const url = "/data.json";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const matchedId = data.filter((doctor) => doctor.id === doctorId);
        setDoctorDetails(matchedId);
      });
  }, [doctorId]);

  const handleAppointment = () => {
    alert("Appointment confirmed!! We will email you soon.");
    history.push("/home");
  };

  return (
    <div className="border m-3 shadow-lg border border-primary">
      {doctorDetails.map((doctor) => (
        <div
          style={{ textAlign: "justify" }}
          className="container row mx-auto my-3 py-3"
        >
          <h3 className="text-center fw-bolder text-primary pt-2 pb-4">
            Appointment Details Of Doctor {doctor.name}
          </h3>
          <div className="col-12 col-lg-6 d-flex flex-row justify-content-center align-items-center">
            <div>
              <h2>
                <span className="fw-bolder">Name: </span>
                {doctor.name}
              </h2>
              <p>
                <span className="fw-bolder">Description: </span>
                {doctor.description}
              </p>
              <p>
                <span className="fw-bolder">Visiting Time: </span>
                {doctor.visiting_time}
              </p>

              <button
                onClick={handleAppointment}
                className="btn btn-primary rounded-pill px-3"
              >
                <i className="fas fa-check-circle pe-1"></i>
                Confirm Appointment
              </button>
            </div>
            <div className="mt-5 mx-auto"></div>
          </div>
          <div className="col-12 col-lg-6 pt-3">
            <img className="img-fluid rounded" src={doctor.img} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default DoctorDetails;
