import React from "react";
import { Form } from "react-bootstrap";

const Contact = () => {
  return (
    <div className="container w-75 py-5">
      <h3 className="text-center fw-bold text-primary pb-3">Contact Us</h3>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label className="fw-bolder text-primary">
            Your Message
          </Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter Your Message....."
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="fw-bolder text-primary">
            Email address
          </Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <button className="btn btn-primary text-center">Submit</button>
      </Form>
    </div>
  );
};

export default Contact;
