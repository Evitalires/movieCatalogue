import React from "react";
import Card from "../../molecules/card/card";

const Cards = ({ movies, pathImg, onScoreClick }) => {
  return (
    <section className="ui stackable three column grid">
      {movies.map((movie, key) => (
        <div key={movie.id} className="column">
          <Card
            movie={movie}
            key={movie.id}
            title={movie.title}
            score={movie.vote_average}
            url={pathImg + movie.poster_path}
            overview={movie.overview}
            onScoreClick={onScoreClick}
          />
        </div>
      ))}
    </section>
  );
};

export default Cards;
