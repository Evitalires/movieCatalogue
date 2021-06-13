import React from "react";
import Cards from "../ui/organisms/cards/cards";

const AllMovies = ({ movies, pathImg, onScoreClick }) => {
  return (
    <Cards movies={movies} pathImg={pathImg} onScoreClick={onScoreClick} />
  );
};

export default AllMovies;
