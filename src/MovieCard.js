import React from "react";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <Link
      to={`/movies/${encodeURIComponent(movie.title)}`}
      className="movie-card"
    >
      <h3>{movie.title}</h3>
      <p>Release Date: {movie.releaseDate}</p>
    </Link>
  );
}

export default MovieCard;
