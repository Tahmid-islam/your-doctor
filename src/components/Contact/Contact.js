import React from "react";
import { Form } from "react-bootstrap";

const Contact = () => {
  return (
    <div className="container w-75 py-5">
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label className="fw-bolder text-primary">
            Your Message
          </Form.Label>
          <Form.Control as="textarea" rows={3} />
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
