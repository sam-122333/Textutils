import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" id="navbar">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link"
                aria-current="page"
                to="/textForm"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/about">
                About
              </Link>
            </li>
          </ul>
        </div>
        <div className="d-flex">
        <div
            className="bg-light rounded mx-2"
            style={{
              width: "30px",
              height: "30px",
              cursor: "pointer",
              border: "2px solid black",
            }}
            onClick={() => {
              props.theme("light");
            }}
          ></div>
          <div
            className="bg-dark rounded mx-2"
            style={{
              width: "30px",
              height: "30px",
              cursor: "pointer",
              border: "2px solid white",
            }}
            onClick={() => {
              props.theme("dark");
            }}
          ></div>
          <div
            className="bg-primary rounded mx-2"
            style={{
              width: "30px",
              height: "30px",
              cursor: "pointer",
              border: "2px solid white",
            }}
            onClick={() => {
              props.theme("primary");
            }}
          ></div>
          <div
            className="bg-danger rounded mx-2"
            style={{
              width: "30px",
              height: "30px",
              cursor: "pointer",
              border: "2px solid white",
            }}
            onClick={() => {
              props.theme("danger");
            }}
          ></div>
          <div
            className="bg-success rounded mx-2"
            style={{
              width: "30px",
              height: "30px",
              cursor: "pointer",
              border: "2px solid white",
            }}
            onClick={() => {
              props.theme("success");
            }}
          ></div>
        </div>
      </div>
    </nav>
  );
};
Navbar.defaultProps = { title: "defaultTitle" };
Navbar.propTypes = { title: PropTypes.string.isRequired };

// again changed something