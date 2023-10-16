import React, { useState } from "react";
import "./styles.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginPage from "./LoginPage";
import MoviesListPage from "./MoviesListPage";
import MovieDetailPage from "./MovieDetailPage";
import ActorListPage from "./ActorListPage";
import ActorDetailPage from "./ActorDetailPage";
import NavBar from "./NavBar";

function App() {
  const [user, setUser] = useState(null);


  const handleLogin = (username) => {
    setUser(username);
  };

  return (
    <Router>
      <div className="App">
        {user && <NavBar user={user} />}

        <Routes>
          <Route
            path="/"
            element={
              <>
                {user ? (
                  <MoviesListPage />
                ) : (
                  <>
                    <LoginPage onLogin={handleLogin} />
                  </>
                )}
              </>
            }
          />
          <Route path="/movies" element={<MoviesListPage />} />
          <Route path="/movies/:movieName" element={<MovieDetailPage />} />
          <Route path="/actors" element={<ActorListPage />} />
          <Route path="/actors/:actorName" element={<ActorDetailPage />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
