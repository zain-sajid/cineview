import React, { useState } from "react";

function Navbar() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "#1B1F23" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="https://gcdn.pbrd.co/images/9K8lUbWq1bxc.png?o=1"
              alt=""
              height={"40vh"}
              className="d-inline-block align-text-top"
            ></img>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Movies
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Watchlist
                </a>
              </li>
            </ul>
            <form className="d-flex me-2">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              ></input>
              <button className="btn btn-primary" type="submit">
                <i className="bi bi-search"></i>
              </button>
            </form>
            <ul className="navbar-nav">
            <li className="nav-item">
                <a className="nav-link" href="#">
                  Signup
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">
                  Login
                </a>
            </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
