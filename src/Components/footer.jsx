import React, { useState } from "react";

function Footer() {
  return (
    <div>
      <footer class="footer font-small blue pt-4 mt-5">
        <div class="container-fluid text-center text-md-left">
          <div class="row">
            <div class="col-md-7 mt-md-0 mt-3">
              <h5>Cineview</h5>
              <p>
                Here you can use rows and columns to organize your footer
                content.
              </p>
            </div>

            <div class="col-md-5 mb-md-0 mb-3">
              <h5>Links</h5>

              <ul class="list-unstyled ">
                <li>
                  <a href="#!" className="text-decoration-none">
                    Link 1
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-decoration-none">
                    Link 1
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-decoration-none">
                    Link 1
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-decoration-none">
                    Link 1
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="text-center py-3">Cineview © 2022</div>
      </footer>
    </div>
  );
}

export default Footer;
