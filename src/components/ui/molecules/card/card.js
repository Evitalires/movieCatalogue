import React from "react";
import "./card.css";

const Card = (props) => {
  return (
    <div className="ui card">
      <img alt="movie" className="image" src={props.url} />
      <div className="content">
        <span className="right floated">
          <i className="star outline like icon"></i>
          {props.score}
        </span>
        {props.title}
        <p className="overlay">{props.description}</p>
      </div>
    </div>
  );
};

export default Card;
