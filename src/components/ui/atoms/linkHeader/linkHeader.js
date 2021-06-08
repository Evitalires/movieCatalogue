import React from "react";

const LinkHeader = (props) => {
  return (
    <a className={props.className} href={props.to} onClick={props.onClick}>
      {props.text}
    </a>
  );
};

export default LinkHeader;
