import React, { useState } from "react";
import "./card.css";

/* 
recevie a prop for know if is all movies, or favorites movies.
set styles for add to favorites
set styles for remove from favorites
set styles to defina if the score is low, medium, heigh

*/

const Card = (props) => {
  return (
    <div className="ui fluid card">
      <img alt="movie" className="image" src={props.url} />
      <div
        className="containerTitle"
        onClick={() => props.onScoreClick(props.movie)}
      >
        <div className="title">{props.title}</div>
        <span className="score">
          <i className="star blue icon"></i>
          {props.score}
        </span>
      </div>
      <p className="overlay">{props.overview}</p>
    </div>
  );
};

export default Card;
