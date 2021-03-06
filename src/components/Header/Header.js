import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="text-dark navbar sticky-top px-2"
        sticky="top"
        style={{ backgroundColor: "white" }}
      >
        <Navbar.Brand as={Link} to="/">
          <img
            className="w-25 px-4 img-fluid"
            src="https://cdns.iconmonstr.com/wp-content/assets/preview/2017/240/iconmonstr-medical-8.png"
            alt=""
          />
          <Navbar.Brand className="text-dark">Your Doctor</Navbar.Brand>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="fw-bolder text-dark ps-3" as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link
              className="fw-bolder text-dark ps-3"
              as={Link}
              to="/about"
            >
              About
            </Nav.Link>
            <Nav.Link className="fw-bolder text-dark ps-3" as={Link} to="/blog">
              Blog
            </Nav.Link>
            <Nav.Link
              className="fw-bolder text-dark ps-3"
              as={Link}
              to="/contact"
            >
              Contact
            </Nav.Link>
            {user.email ? (
              <Nav.Link onClick={logOut} className="fw-bolder text-dark px-3">
                Logout
              </Nav.Link>
            ) : (
              <Nav.Link
                className="fw-bolder text-dark px-3"
                as={Link}
                to="/login"
              >
                Login
              </Nav.Link>
            )}
          </Nav>
          {user.email && (
            <Navbar.Text className="fw-bolder text-dark px-3">
              Signed in as: {user.displayName}
            </Navbar.Text>
          )}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
