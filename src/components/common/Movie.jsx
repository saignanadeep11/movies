import React from "react";
import MovieCard from "./MovieCard";
import "../styles/movies.css";
function Movie({ movies }) {
  return (
    <div className="moviesMainDiv">
      {movies.map((val, idx) => {
        return <MovieCard key={idx} movie={val} />;
      })}
    </div>
  );
}

export default Movie;
