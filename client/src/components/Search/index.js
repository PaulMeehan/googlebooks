import React from "react";
import "./Search.css";
import BookSearched from "../BookSearched";

function Search () {
  return (
    <div class="container">
      <div class="row" id="searchBox">
        <div class="col col-md-1">
          {/* blank */}
        </div>
        <div class="col col-md-10">
          <h2>Book Search:</h2>
          <h4>Enter the name of the book to search for:</h4>
          <input type="text" name="searchString" placeholder="this is a hint" size="100"></input>
          <button class="btn btn-success">Search</button>
        </div>
        <div class="col col-md-1">
          {/* blank */}
        </div>
      </div>

      <div class="row">
        <div class="col col-md-1">
          {/* blank */}
        </div>
        <div class="col col-md-10">
          <BookSearched />
        </div>
        <div class="col col-md-1">
          {/* blank */}
        </div>
      </div>
    </div>
  );
}

export default Search;



