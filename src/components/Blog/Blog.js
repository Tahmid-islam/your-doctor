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
              src="https://media.istockphoto.com/photos/he-replied-picture-id471632661?b=1&k=20&m=471632661&s=170667a&w=0&h=Q_n95aFACzX6cSX-MQSyH-SA0gQyY4baRUh526pT4EY="
            />
            <Card.Body>
              <Card.Title>Replied</Card.Title>
              <Card.Text>
                we'll explain what patient care is and how it differs from
                customer service. Then, we'll wrap things up by listing a few
                customer care examples from real companies.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <button className="btn btn-primary rounded-pill px-3">
                Read More
              </button>
            </Card.Footer>
          </Card>
        </div>
        <div className="col-md-6 col-lg-4">
          <Card className="h-100">
            <Card.Img
              variant="top"
              src="https://media.istockphoto.com/photos/mother-kissing-smiling-baby-girl-picture-id1295340883?b=1&k=20&m=1295340883&s=170667a&w=0&h=O_B22jRZFbev4_SgyCrI5lidkgd4OPl3Axws0oXpi0E="
            />
            <Card.Body>
              <Card.Title>Baby Care</Card.Title>
              <Card.Text>
                Newborn care and safety are the activities and precautions
                recommended for new parents or caregivers. It is also an
                educational goal of many hospitals and birthing centers when
                it's time to bring their infant home.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <button className="btn btn-primary rounded-pill px-3">
                Read More
              </button>
            </Card.Footer>
          </Card>
        </div>
        <div className="col-md-6 col-lg-4">
          <Card className="h-100">
            <Card.Img
              variant="top"
              src="https://images.unsplash.com/photo-1544126592-807ade215a0b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmFieXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            />
            <Card.Body>
              <Card.Title>Don't forget use</Card.Title>
              <Card.Text>
                Not taking your medication as prescribed by your doctor can
                cause serious problems. If in doubt or confused about your
                treatment, talk to your pharmacist and ask for clarification.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <button className="btn btn-primary rounded-pill px-3">
                Read More
              </button>
            </Card.Footer>
          </Card>
        </div>
        <div className="col-md-6 col-lg-4">
          <Card className="h-100">
            <Card.Img
              variant="top"
              src="https://media.istockphoto.com/photos/shot-of-an-attractive-young-nurse-sitting-and-bonding-with-her-senior-picture-id1316738511?b=1&k=20&m=1316738511&s=170667a&w=0&h=7gJGRENOkkJ89w8LnOjAx1bHyzaV2kJx-ZVFnpW2EW8="
            />
            <Card.Body>
              <Card.Title>Safety</Card.Title>
              <Card.Text>
                Talking to your doctor can be challenging. Sometimes it feels
                like he or she doesn’t have time to talk to you, or maybe you’re
                embarrassed about a certain question. But your nurses and
                doctors all want the same thing.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <button className="btn btn-primary rounded-pill px-3">
                Read More
              </button>
            </Card.Footer>
          </Card>
        </div>
        <div className="col-md-6 col-lg-4">
          <Card className="h-100">
            <Card.Img
              variant="top"
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpbGRyZW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            />
            <Card.Body>
              <Card.Title>Children</Card.Title>
              <Card.Text>
                we'll explain what patient care is and how it differs from
                customer service. Then, we'll wrap things up by listing a few
                customer care examples from real companies.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <button className="btn btn-primary rounded-pill px-3">
                Read More
              </button>
            </Card.Footer>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Blog;
