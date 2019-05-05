import React from "react";
import "./BookSaved.css";
import BookContext from "../BookContext";

function BookSaved () {
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

export default BookSaved;