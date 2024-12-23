import React, { useState, useEffect } from "react";

function MovieCard(movies) {
  const movie = movies.movie;
  if (!movie) {
    return <div>No movie data available</div>;
  }
  let [rating, setRating] = useState(0);
  let [rateCount, setRateCount] = useState(0);
  useEffect(() => {
    if (movie) {
      setRating(Math.ceil(movie.vote_average));
      setRateCount(Math.ceil(movie.vote_count / 100));
    }
  }, [movie]);
  return (
    <div>
      <div className="imageCard">
        {movie.poster_path ? (
          <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} />
        ) : (
          <img src="" />
        )}
      </div>
      <div className="movieName">{movie.original_title}</div>
      <div className="movieRating">
        <div>{rating}⭐</div>
        <div>{rateCount}k</div>
      </div>
    </div>
  );
}

export default MovieCard;
