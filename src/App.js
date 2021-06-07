import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import AddMovies from "./components/pages/addMovies";
import AllMovies from "./components/pages/allMovies";
import MyMovies from "./components/pages/myMovies";

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <Link to="/allMovies"> All Movies </Link>
          </ul>
          <ul>
            <Link to="/myMovies"> My Movies </Link>
          </ul>
        </nav>

        <AddMovies />
      </div>
      <Route path="/myMovies" component={MyMovies} />

      <Route path="/allMovies" exact render={() => <AllMovies />} />
    </Router>
  );
};

export default App;
