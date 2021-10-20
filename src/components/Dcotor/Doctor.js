import React from "react";
import { Card, Col } from "react-bootstrap";
import { useHistory } from "react-router";

const Doctor = ({ doctor }) => {
  const { id, name, description, img } = doctor;

  const history = useHistory();
  const handleAppointment = (id) => {
    history.push(`/details/${id}`);
  };
  return (
    <div>
      <Col>
        <Card className="border-0 text-center card shadow-sm rounded-3 h-100">
          <Card.Img variant="top" className="img-fluid" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Card.Text>
              <button
                onClick={() => handleAppointment(id)}
                className="btn btn-primary rounded-pill"
              >
                <i className="fas fa-calendar-check pe-1"></i>
                Appointment Now
              </button>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Doctor;
