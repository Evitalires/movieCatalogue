import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import Menu from "./components/ui/organisms/menu/menu";
import { Link } from "react-router-dom";

import AddMovie from "./components/pages/addMovie";
import AllMovies from "./components/pages/allMovies";
import MyMovies from "./components/pages/myMovies";

import { API_URL, IMG_PATH, SEARCH_API } from "./models/fetchMovies";

const App = () => {
  const [searchValue, setSearchValue] = useState("");
  const [movies, setMovies] = useState([]);
  const [favoriteMovies, setFavoriteMovies] = useState({});

  const getMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setMovies(data.results);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (searchValue && searchValue !== "")
      setMovies(getMovies(SEARCH_API + searchValue));
    setSearchValue("");
  };

  const onScoreClick = (movie) => {
    //filter if already exist
    if (favoriteMovies.length >= 0) {
      let newFavoriteMovies = [movie, ...favoriteMovies];
      setFavoriteMovies(newFavoriteMovies);
    } else {
      setFavoriteMovies([movie]);
    }
  };

  const showFavoriteMovies = () => {
    if (favoriteMovies.length >= 0) {
      return (
        <AllMovies
          movies={favoriteMovies}
          pathImg={IMG_PATH}
          onScoreClick={onScoreClick}
        />
      );
    } else {
      return <MyMovies />;
    }
  };

  /* 
  state for url
  fixed header.
  when submited change rout to movies.
  Migrate app to JWT
  sign in and log out pages.
  Add Sheet DB 
  Button for request another page of movies. 
  */

  useEffect(() => {
    if (movies.length < 1) {
      getMovies(API_URL);
    }
  });

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
      <Route path="/myMovies" exact render={showFavoriteMovies} />
      <Route path="/addMovie" component={AddMovie} />
      <Route
        path="/allMovies"
        exact
        render={() => (
          <AllMovies
            movies={movies}
            pathImg={IMG_PATH}
            onScoreClick={onScoreClick}
          />
        )}
      />
    </Router>
  );
};

export default App;
