import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import Menu from "./components/ui/organisms/menu";
import LinkHeader from "./components/ui/atoms/linkHeader/linkHeader";
import { Link } from "react-router-dom";

import AddMovie from "./components/pages/addMovie";
import AllMovies from "./components/pages/allMovies";
import MyMovies from "./components/pages/myMovies";

const App = () => {
  return (
    <Router>
      <Menu>
        <Link className="item linkHeader" to="/allMovies">
          Movies
        </Link>
      </Menu>
      <Route path="/myMovies" component={MyMovies} />
      <Route path="/addMovie" component={AddMovie} />
      <Route path="/allMovies" exact render={() => <AllMovies />} />
    </Router>
  );
};

export default App;
