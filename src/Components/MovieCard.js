import React from "react";
import { Link } from "react-router-dom";

const setVoteClass = (vote) => {
  if (vote >= 9) {
    return "gold";
  } else if (vote >= 8) {
    return "green";
  } else if (vote >= 7) {
    return "orange";
  } else {
    return "red";
  }
};
const MovieCard = ({ poster, title, rate, overview, trailer,setSelectedMovie }) => {
  return (
    <Link
      to={`/description/${title.split(" ").join("-")}/`}
      onClick={() => setSelectedMovie({ poster, title, rate, overview, trailer })}
    >
      <div className="movie">
        <img src={poster} alt="movie-pic" className="movie-pic"></img>
        <div className="movie-info">
          <h1 className="movie-name">{title}</h1>
          <span className={`rate ${setVoteClass(rate)}`}>{rate}</span>
        </div>
        <div className="movie-overview">
          <h2>Overview</h2>
          <p>{overview}</p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
