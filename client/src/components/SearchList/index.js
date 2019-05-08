import React from "react";
import "./SearchList.css";
import BookSearched from "../BookSearched";

function SearchList () {
  return (
    <div className="row" id="list">
      <div className="col col-md-1">
        {/* blank */}
      </div>
      <div className="col col-md-10">
        <div id="resultsTitle">
          Search results:
        </div>
        <BookSearched />
      </div>
      <div className="col col-md-1">
        {/* blank */}
      </div>
    </div>
  );
}

export default SearchList;