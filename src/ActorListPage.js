import React from "react";
import { Link } from "react-router-dom";
import { movies } from "./data";
import ActorCard from "./ActorCard";

function ActorsListPage() {
  const uniqueActors = new Set();

  movies.forEach((movie) => {
    movie.cast.forEach((actor) => {
      uniqueActors.add(actor);
    });
  });

  const uniqueActorsArray = Array.from(uniqueActors);

  return (
    <div className="actors-list">
      <h2>Actors List</h2>
      <div className="actor-cards">
        {uniqueActorsArray.map((actor, index) => (
          <Link key={index} to={`/actors/${actor}`}>
            <ActorCard name={actor} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ActorsListPage;
