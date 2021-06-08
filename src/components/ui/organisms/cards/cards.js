import React from "react";
import Card from "../../molecules/card/card";

const Cards = ({ movies, pathImg }) => {
  return (
    <section className="ui three column grid">
      {movies.map(({ id, title, poster_path, vote_average, overview }) => (
        <div key={id} className="column">
          <Card
            key={id}
            title={title}
            score={vote_average}
            url={pathImg + poster_path}
            overview={overview}
          />
        </div>
      ))}
    </section>
  );
};

export default Cards;
