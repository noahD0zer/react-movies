import React from "react";
import { Link } from "react-router-dom";

function NavBar({ user }) {
  return (
    <nav>
      <ul className="nav-horizontal">
        <li>
          <Link to="/movies">Movies</Link>
        </li>
        <li>
          <Link to="/actors">Actors</Link>
        </li>
        {user && <li>Welcome, {user}!</li>}
      </ul>
    </nav>
  );
}

export default NavBar;
