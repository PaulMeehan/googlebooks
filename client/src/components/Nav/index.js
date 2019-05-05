import React from "react";
import BookContext from "../BookContext";

function Nav () {
  return (
    <BookContext.Consumer>
      {bookstate => (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          Google Books
          <button class="btn btn-primary" onClick={ () => bookstate.onClick("search")}>Search</button>
          <button class="btn btn-primary" onClick={ () => bookstate.onClick("saved")}>Saved</button>
        </nav>
      )}
    </BookContext.Consumer>
  );
}

export default Nav;
