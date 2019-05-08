import React from "react";
import "./Search.css";
import SearchBox from "../SearchBox";
import SearchList from "../SearchList";

function Search () {
  return (
    <div className="container">
    In search page
      <SearchBox />
      <SearchList />
    </div>
  );
}

export default Search;



