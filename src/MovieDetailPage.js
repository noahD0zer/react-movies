import React from "react";
import { useParams } from "react-router-dom";
import { movies } from "./data"; // Import the movies array

function MovieDetailPage() {
  // Get the movieName parameter from the URL using useParams
  const { movieName } = useParams();

  // Find the movie object from the movies data
  const movie = movies.find(
    (movie) => movie.title === decodeURIComponent(movieName)
  );

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div className="movie-detail-page">
      <h2>{movie.title}</h2>
      <p>Release Date: {movie.releaseDate}</p>
      <h3>Cast:</h3>
      <ul>
        {movie.cast.map((actor) => (
          <li key={actor}>{actor}</li>
        ))}
      </ul>
    </div>
  );
}

export default MovieDetailPage;
