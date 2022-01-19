import React, { useState } from "react";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-light" style={{ backgroundColor: "#1B1F23" }}>
        <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img
                src="https://i.ibb.co/C66R1gj/Minimalist-Movie-Film-Strip-Logo-1000-x-200-px.png"
                alt=""
                height={"50vh"}
                className="d-inline-block align-text-top"
              ></img>
            </a>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            ></input>
            <button className="btn btn-outline-success btn-lg me-5" type="submit">
              Search
            </button>
            <button className="btn btn-outline-info btn-lg ms-5" type="button">
              Movies
            </button>
            <button className="btn btn-outline-info btn-lg ms-3" type="button">
              Login
            </button>
            <button className="btn btn-outline-info btn-lg ms-3 me-3" type="button">
              Register
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
