import React, { useState, useEffect } from "react";
import axios from "axios";

function Details() {
  const [movie, setMovie] = useState({});
  const [rating, setRating] = useState();

  useEffect(() => {
    async function fetchData() {
      let response = await axios.get(
        "https://api.themoviedb.org/3/movie/634649?api_key=87b82e1ce0bcea0c95a22cdc1e04617e"
      );
      console.log(response);
      setMovie(response["data"]);

      // IMDB
      var options = {
        method: "GET",
        url: "https://imdb8.p.rapidapi.com/title/get-ratings",
        params: { tconst: response["data"].imdb_id },
        headers: {
          "x-rapidapi-host": "imdb8.p.rapidapi.com",
          "x-rapidapi-key":
            "b75feabe7amsh7968ce5c937d81fp1b1941jsn4ef5570d14f1",
        },
      };

      axios
        .request(options)
        .then(function (response) {
          setRating(response["data"].rating);
        })
        .catch(function (error) {
          console.error(error);
        });
    }
    fetchData();
  }, []);

  return (
    <div>
      <div className="row m-0">
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div
            className="card my-5 mx-4"
            style={{
              width: "auto",
              backgroundColor: "#1B1F23",
            }}
          >
            <img
              className="card-img-top"
              src={"https://image.tmdb.org/t/p/original/" + movie.poster_path}
              alt="Card image cap"
            ></img>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <h1 className="my-5">{movie.title}</h1>
          <img
            src="https://ia.media-imdb.com/images/M/MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE@._V1_.png"
            alt=""
            width={"10%"}
          />
          <p className="d-inline">{rating}</p>
        </div>
      </div>
    </div>
  );
}

export default Details;
