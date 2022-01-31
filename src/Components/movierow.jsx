import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImdb } from "@fortawesome/free-brands-svg-icons";

function MovieRow(props) {
  const [rating, setRating] = useState();

  useEffect(() => {
    async function fetchData() {
      //console.log(props);

      let response = await axios.get(
        "https://api.themoviedb.org/3/movie/" + props.movie.id + "?api_key=87b82e1ce0bcea0c95a22cdc1e04617e"
      );
      //console.log(response);


      response = await axios.get(
        "https://imdb8.p.rapidapi.com/title/get-ratings",
        {
          params: {
            tconst: response["data"].imdb_id,
          },
          headers: {
            "x-rapidapi-host": "imdb8.p.rapidapi.com",
            "x-rapidapi-key":
              "61755a145emsh57865b4e7c1657ep1c6011jsnda462f4e35af",
          },
        }
      );
      setRating(response["data"].rating);
    }
    fetchData();
  }, []);

  function findGenre(id) {
    //console.log(id)
    if (id == 28) {
      return "Action";
    } else if (id == 12) {
      return "Adventure";
    } else if (id == 16) {
      return "Animation";
    } else if (id == 35) {
      return "Comedy";
    } else if (id == 80) {
      return "Crime";
    } else if (id == 99) {
      return "Documentary";
    } else if (id == 10751) {
      return "Family";
    } else if (id == 14) {
      return "Fantasy";
    } else if (id == 36) {
      return "History";
    } else if (id == 27) {
      return "Horror";
    } else if (id == 10402) {
      return "Music";
    } else if (id == 9648) {
      return "Mystery";
    } else if (id == 10749) {
      return "Romance";
    } else if (id == 878) {
      return "Science Fiction";
    } else if (id == 10770) {
      return "TV Movie";
    } else if (id == 53) {
      return "Thriller";
    } else if (id == 10752) {
      return "War";
    } else {
      return "Western";
    }
  }

  return (
    <>
      <div className="col-12 mb-4 p-0">
        <div className="row py-2" style={{backgroundColor: "#1b1f23"}}>
          <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-5 p-0">
            <img
              src={
                "https://image.tmdb.org/t/p/original/" + props.movie.poster_path
              }
              style={{
                maxHeight: "200px",
                width: "100%",
                objectFit: "contain",
              }}
            ></img>
          </div>
          <div className="col-xl-10 col-lg-10 col-md-9 col-sm-8 col-7 my-auto">
            <h5>{props.movie.title}</h5>
            <div className="mb-2">
              <small className="me-2">
                {props.movie.release_date.substring(0, 4)}
              </small>
              <small>|</small>
              <small className="ms-2">
                {findGenre(props.movie.genre_ids[0])}
              </small>
              <small>
                {props.movie.genre_ids.slice(1).map((k) => ", " + findGenre(k))}
              </small>
            </div>
            <div className="d-none d-lg-block">
              <p>{props.movie.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieRow;
