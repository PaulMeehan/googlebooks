import React from "react";
import BookContext from "../BookContext";

function Nav () {
  return (
    <BookContext.Consumer>
      {bookstate => (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          Google Books
          <button className="btn btn-primary" onClick={ () => bookstate.setPage("search")}>Search</button>
          <button className="btn btn-primary" onClick={ () => bookstate.setPage("saved")}>Saved</button>
        </nav>
      )}
    </BookContext.Consumer>
  );
}

export default Nav;
