import React from "react";
import { Card } from "react-bootstrap";

const Blog = () => {
  return (
    <div className="container py-4">
      <h3 className="text-center fw-bold text-primary pb-3">Blogs</h3>
      <div className="row g-4">
        <div className="col-md-6 col-lg-4">
          <Card className="h-100">
            <Card.Img
              variant="top"
              src="https://webdemo2.risegraph.net/wp-content/uploads/2021/03/doctor-and-patient-at-hospital-775TK6U-1024x682.jpg"
            />
            <Card.Body>
              <Card.Title>Replied</Card.Title>
              <Card.Text>
                we'll explain what patient care is and how it differs from
                customer service. Then, we'll wrap things up by listing a few
                customer care examples from real companies.
              </Card.Text>
              <button className="btn btn-primary rounded-pill px-3">
                Read More
              </button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-6 col-lg-4">
          <Card className="h-100">
            <Card.Img
              variant="top"
              src="https://webdemo2.risegraph.net/wp-content/uploads/2021/03/family-at-hospital-M43S4FD-1-1024x684.jpg"
            />
            <Card.Body>
              <Card.Title>Baby Care</Card.Title>
              <Card.Text>
                Newborn care and safety are the activities and precautions
                recommended for new parents or caregivers. It is also an
                educational goal of many hospitals and birthing centers when
                it's time to bring their infant home.
              </Card.Text>
              <button className="btn btn-primary rounded-pill px-3">
                Read More
              </button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-6 col-lg-4">
          <Card className="h-100">
            <Card.Img
              variant="top"
              src="https://webdemo2.risegraph.net/wp-content/uploads/2021/03/mature-male-patient-in-consultation-with-doctor-in-5NLWPDQ-1024x683.jpg"
            />
            <Card.Body>
              <Card.Title>Don't forget use</Card.Title>
              <Card.Text>
                Don’t forget to see the doctor! MyHint wants to be your virtual
                health coach (exclusive)
              </Card.Text>
              <button className="btn btn-primary rounded-pill px-3">
                Read More
              </button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-6 col-lg-4">
          <Card className="h-100">
            <Card.Img
              variant="top"
              src="https://webdemo2.risegraph.net/wp-content/uploads/2021/03/portrait-of-mature-male-doctor-wearing-white-coat-H49URGD-1024x681.jpg"
            />
            <Card.Body>
              <Card.Title>Safety</Card.Title>
              <Card.Text>
                Talking to your doctor can be challenging. Sometimes it feels
                like he or she doesn’t have time to talk to you, or maybe you’re
                embarrassed about a certain question. But your nurses and
                doctors all want the same thing.
              </Card.Text>
              <button className="btn btn-primary rounded-pill px-3">
                Read More
              </button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-6 col-lg-4">
          <Card className="h-100">
            <Card.Img
              variant="top"
              src="https://webdemo2.risegraph.net/wp-content/uploads/2021/03/16-1-1024x683.jpg"
            />
            <Card.Body>
              <Card.Title>Children</Card.Title>
              <Card.Text>
                we'll explain what patient care is and how it differs from
                customer service. Then, we'll wrap things up by listing a few
                customer care examples from real companies.
              </Card.Text>
              <button className="btn btn-primary rounded-pill px-3">
                Read More
              </button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Blog;
