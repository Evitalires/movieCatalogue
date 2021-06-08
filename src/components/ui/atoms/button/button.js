import React from "react";
import "semantic-ui-css/semantic.min.css";

const Button = (props) => {
  return <button className="ui orange button">{props.children}</button>;
};

Button.defaultProps = {
  text: "string"
};

export default Button;
