import React, { useState } from "react";
import $ from "jquery";

function Homepage() {
  $.getJSON(
    "https://api.themoviedb.org/3/movie/550?api_key=922ab3d05d2360b60d9628fefaa55b8c"
  );
  return (
    <div>
      <h4 className="m-4">Popular</h4>
    </div>
  );
}

export default Homepage;
