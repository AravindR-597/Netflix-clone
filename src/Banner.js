import React, { useEffect, useState } from "react";
import Axios from "./axios";
import requests from "./request";
import "./Banner.css"

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await Axios.get(requests.fetchTrending);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  console.log(movie);

  function truncateString(str, num) {
    return str?.length > num ?str.substr(0, num-1)+".....":str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      <div className="banner_content">
        <h1 className="banner_title">{movie?.title || movie?.name || movie?.orginal_name}</h1>
        <div>
          <button className="banner_buttons">Play</button>
          <button className="banner_buttons">My List</button>
        </div>
        <h1 className="banner_description">{movie?.overview}
        {truncateString(movie?.overview,150)}
        </h1>
      </div>
      <div className="banner_fadeAction"/>
    </header>
  );
}

export default Banner;
