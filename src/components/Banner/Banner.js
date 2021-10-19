import React from "react";
import { Carousel } from "react-bootstrap";

const Banner = () => {
  return (
    <div className="container w-75">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media.istockphoto.com/photos/healthcare-workers-portrait-picture-id1284636209?b=1&k=20&m=1284636209&s=170667a&w=0&h=j_vm0DELoS5ZhzbqYAI60nHoO57jHlrGIyLgqBs6Wyg="
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media.istockphoto.com/photos/mature-doctor-and-nurse-discussing-patient-case-picture-id1307543555?b=1&k=20&m=1307543555&s=170667a&w=0&h=KKk1RkwzUkT_a6Kqf0jh7aBEVpIMG048FALjEAPyDp0="
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media.istockphoto.com/photos/ensuring-her-vitals-are-nominal-before-the-procedure-picture-id175264754?b=1&k=20&m=175264754&s=170667a&w=0&h=aCiBfeBoIuCDLQ0DR0nIto6IAV8ZSg2eMYy3tvN6VHs="
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
