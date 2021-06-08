import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import Menu from "./components/ui/organisms/menu/menu";
import { Link } from "react-router-dom";

import AddMovie from "./components/pages/addMovie";
import AllMovies from "./components/pages/allMovies";
import MyMovies from "./components/pages/myMovies";

const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=2eb432ffbed462250f1e1cfc103ef208&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w400";
const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?api_key=2eb432ffbed462250f1e1cfc103ef208&query=";
const App = () => {
  const [searchValue, setSearchValue] = useState("");
  const [movies, setMovies] = useState([]);

  const getMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setMovies(data.results);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(movies);
    let newMovies;
    if (searchValue && searchValue !== "") {
      newMovies = getMovies(SEARCH_API + searchValue);
    }
    console.log(movies);
    setSearchValue("");
    console.log(newMovies);
    console.log(SEARCH_API + searchValue);
  };

  return (
    <Router>
      <Menu
        onChange={(e) => setSearchValue(e.target.value)}
        onSubmit={onSubmit}
        searchValue={searchValue}
      >
        <Link className="item linkHeader" to="/allMovies">
          Movies
        </Link>
        <Link className="item linkHeader" to="/myMovies">
          My Movies
        </Link>
      </Menu>
      <Route path="/myMovies" component={MyMovies} />
      <Route path="/addMovie" component={AddMovie} />
      <Route
        path="/allMovies"
        exact
        render={() => <AllMovies movies={movies} pathImg={IMG_PATH} />}
      />
    </Router>
  );
};

export default App;
