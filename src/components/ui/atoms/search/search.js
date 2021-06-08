import React from "react";

const Search = (props) => {
  return (
    <div className="ui icon input">
      <input
        id={props.id}
        type="text"
        placeholder="Search..."
        onChange={props.onChange}
        value={props.value}
      />
      <i className="search link icon"></i>
    </div>
  );
};

export default Search;
