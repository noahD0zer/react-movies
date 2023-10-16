import React from "react";
import { Link } from "react-router-dom";
import { movies} from "./data"
import MovieCard from "./MovieCard";

function NavBar({ user }) {
  return (
    <nav>
      <ul className="nav-horizontal">
        <li>
          <Link to="/movies" className="nav-link">
            Movies
          </Link>
        </li>
        <li>
          <Link to="/actors" className="nav-link">
            Actors
          </Link>
        </li>
        {user && <li>Welcome, {user}!</li>}
      </ul>
    </nav>
  );
}

export default NavBar;
