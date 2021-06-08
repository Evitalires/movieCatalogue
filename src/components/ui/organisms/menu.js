import React from "react";
import LinkHeader from "../atoms/linkHeader/linkHeader";
import { Link } from "react-router-dom";

const Menu = ({ children }) => {
  const onClick = (el) => {
    let links = Array.from(document.getElementsByClassName("linkHeader"));
    links.map((link) => link.classList.remove("active"));
    el.currentTarget.classList.add("active");
  };

  return (
    <header className="ui secondary menu">
      {children}
      <Link
        component={LinkHeader}
        className="item linkHeader"
        to="/myMovies"
        text="My Movies"
        onClick={onClick}
      />

      <div className="right menu">
        <div className="item linkHeader">
          <div className="ui icon input">
            <input type="text" placeholder="Search..." />
            <i className="search link icon"></i>
          </div>
        </div>
        <Link
          component={LinkHeader}
          className="item linkHeader"
          to="/logOut"
          text="Log Out"
          onClick={onClick}
        />
      </div>
    </header>
  );
};

export default Menu;
