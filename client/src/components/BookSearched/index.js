import React from "react";
import "./BookSearched.css";
import BookContext from "../BookContext";

function BookSearched () {
  return (
    <BookContext.Consumer>
      {bookstate => (
        bookstate.books.map(thisBook => {
          return (
            <p>
              {thisBook.title}
            </p>
          );
        })
      )}
    </BookContext.Consumer>
  );
}

export default BookSearched;
