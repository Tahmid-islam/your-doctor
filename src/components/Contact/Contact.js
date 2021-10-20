import React from "react";
import { Form } from "react-bootstrap";
import contactImg from "../../images/contact.png";

const Contact = () => {
  return (
    <div className="row container mx-auto">
      <div className="col-md-6">
        <img className="img-fluid pt-4" src={contactImg} alt="" />
      </div>
      <div className="col-md-6">
        <h1 className="text-center text-primary p-3">Contact Us</h1>
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
    </div>
  );
};

export default Contact;
