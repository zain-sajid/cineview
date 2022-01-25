import React, { useState } from "react";

function Navbar() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark"
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

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
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
                  Movies
                </a>
              </li>
              <li className="nav-item me-2">
                <a className="nav-link" href="#">
                  Watchlist
                </a>
              </li>
              <li>
                <a
                  className="nav-link login"
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#signUpModal"
                >
                  Signup
                </a>
              </li>
              <li>
                <a
                  className="nav-link login"
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#loginModal"
                >
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Login Modal */}
      <div
        class="modal fade"
        id="loginModal"
        tabindex="-1"
        aria-labelledby="loginModalExample"
        aria-hidden="true"
      >
        <div class="modal-dialog text-body">
          <div class="modal-content">
            <div class="modal-header text-center p-0">
              <a
                href="#"
                data-bs-toggle="modal"
                data-bs-target="#signUpModal"
                className="col-6 p-3 text-decoration-none text-body border-bottom border-4"
                style={{backgroundColor: "#eaeaea" }}
              >
                <h3>Sign up</h3>
              </a>
              <a
                className="col-6 p-3 text-decoration-none text-body border-bottom border-4 border-warning"
                href="#"
              >
                <h3>Login</h3>
              </a>
            </div>
            <div class="modal-body">
              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                ></input>
                <label for="floatingInput">Email address</label>
              </div>
              <div class="form-floating">
                <input
                  type="password"
                  class="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                ></input>
                <label for="floatingPassword">Password</label>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-lg btn-primary">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Signup Modal */}
      <div
        class="modal fade"
        id="signUpModal"
        tabindex="-1"
        aria-labelledby="signUpModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog text-body">
          <div class="modal-content">
            <div class="modal-header text-center p-0">
              <a
                href="#"
                className="col-6 p-3 text-decoration-none text-body border-bottom border-4 border-warning"
              >
                <h3>Sign up</h3>
              </a>
              <a
                className="col-6 p-3 text-decoration-none text-body border-bottom border-4"
                href="#"
                data-bs-toggle="modal"
                data-bs-target="#loginModal"
                style={{ backgroundColor: "#eaeaea" }}
              >
                <h3>Login</h3>
              </a>
            </div>
            <div class="modal-body">
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                ></input>
                <label for="floatingInput">Name</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                ></input>
                <label for="floatingInput">Email address</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="password"
                  class="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                ></input>
                <label for="floatingPassword">Password</label>
              </div>
              <div class="form-floating">
                <input
                  type="password"
                  class="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                ></input>
                <label for="floatingPassword">Confirm Password</label>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-lg btn-primary">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
