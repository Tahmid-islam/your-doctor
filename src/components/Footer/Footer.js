import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer mt-5 pb-2 container-fluid">
      <div className="row g-4">
        <div className=" col-12 col-lg-9">
          <div className="row">
            <div className="col-md-7">
              <h1 className="px-3">About Us</h1>
              <p className="about-text px-3">
                Your Doctor is the first and only doctor chamber portal to be
                accredited by the Joint Commission International (JCI) 5 times
                in a row. The JCI Gold Seal of Approval is a globally recognized
                and reflects an organization’s commitment to best practices in
                quality and patient safety. Your Doctor was first accredited by
                JCI in 2008 and till date remains the only hospital in
                Bangladesh to hold this international recognized standard.
                Accreditation by recognized international institutions such as
                JCI are crucial to drive compliance and improve quality and
                cost-effectiveness across the hospitals and has become a
                priority for healthcare organizations across the world.
              </p>
            </div>
            <div className="col-md-5 px-4">
              <div className="row g-4">
                <div className="col-md-6 explore">
                  <h5 className="fw-bold">Explore</h5>
                  <NavLink className="nav" to="/">
                    Home
                  </NavLink>
                  <br />
                  <NavLink className="nav" to="/blog">
                    Blogs
                  </NavLink>
                  <br />
                  <NavLink className="nav" to="/contact">
                    Contact Us
                  </NavLink>
                  <br />
                  <NavLink className="nav" to="/">
                    Doctors
                  </NavLink>
                </div>

                <div className="col-md-6 legal">
                  <h5 className="fw-bold">Legal</h5>
                  <NavLink className="nav" to="/">
                    Terms & Condition
                  </NavLink>
                  <br />
                  <NavLink className="nav" to="/">
                    Privacy policy
                  </NavLink>
                  <br />
                  <NavLink className="nav" to="/">
                    Return policy
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-3 g-4">
          <h5 className="text-center fw-bold">Connect With Us</h5>
          <div className="footer-icons text-center">
            <NavLink to="/">
              <i className="fab fa-facebook fs-1 text-white px-2"></i>
            </NavLink>
            <NavLink to="/">
              <i className="fab fa-twitter fs-1 text-white px-2"></i>
            </NavLink>
            <NavLink to="/">
              <i className="fab fa-linkedin fs-1 text-white px-2"></i>
            </NavLink>
            <NavLink to="/">
              <i className="fab fa-instagram fs-1 text-white px-2"></i>
            </NavLink>
            <NavLink to="/">
              <i className="fab fa-github fs-1 text-white px-2"></i>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="text-center pt-4">
        <p className="py-2 fs-5 fw-bolder">
          Copyright &copy; {new Date().getFullYear()} Your Doctor
        </p>
      </div>
    </footer>
  );
};

export default Footer;
