import React from "react";
import LinkHeader from "../../atoms/linkHeader/linkHeader";
import Search from "../../atoms/search/search";
import { Link } from "react-router-dom";

const Menu = (props) => {
  const onClick = (el) => {
    let links = Array.from(document.getElementsByClassName("linkHeader"));
    links.map((link) => link.classList.remove("active"));
    el.currentTarget.classList.add("active");
  };

  return (
    <header className="ui secondary menu">
      {props.children}

      <div className="right menu">
        <div className="item linkHeader">
          <form id="form" onSubmit={props.onSubmit}>
            <Search
              value={props.searchValue}
              id="search"
              onChange={props.onChange}
            />
          </form>
        </div>
        <Link className="item linkHeader" to="/logOut">
          logOut
        </Link>
      </div>
    </header>
  );
};

export default Menu;
