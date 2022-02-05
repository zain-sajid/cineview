import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Homepage from "./Components/homepage";
import Details from "./Components/details";
import Watchlist from "./Components/watchlist";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path={"/details/:id"}element={<Details />} />
      <Route path="/watchlist" element={<Watchlist />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
