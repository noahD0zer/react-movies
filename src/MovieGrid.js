import React from "react";
import { movies } from "./data";
import MovieCard from "./MovieCard";

function MovieGrid() {
  return (
    <div className="movie-grid">
      {movies.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}
    </div>
  );
}

export default MovieGrid;
