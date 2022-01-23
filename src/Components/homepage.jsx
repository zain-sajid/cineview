import React, { useState } from "react";
import $ from "jquery";

function Homepage() {
  $.getJSON(
    "https://api.themoviedb.org/3/movie/550?api_key=922ab3d05d2360b60d9628fefaa55b8c"
  );
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12">
          <h2 className="text-center mt-4">Popular Movies</h2>
        </div>
        <hr className="my-4"></hr>
      </div>
      <div className="row">
        <div className="col-lg-3 col-md-5 col-sm-12">
          <a href="navbar">
            <div
              className="card"
              style={{ width: "auto", backgroundColor: "#262a2d" }}
            >
              <img
                className="card-img-top"
                src="https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg"
                alt="Card image cap"
              ></img>
              <div className="card-body">
                <h5 className="card-title">The Shawshank Redemption</h5>
                <p className="card-text">1993</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
