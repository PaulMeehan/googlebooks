import React from "react";
import "./BookSearched.css";
import BookContext from "../BookContext";

function BookSearched () {
  return (
    <BookContext.Consumer>
      {bookstate => (
        bookstate.books.map(thisBook => {
          return (
            <div className="card bookCard">
              <div class="row no-gutters">
                <div class="col-md-3">
                  <a src={thisBook.image} alt="book cover" class="bookImage"></a>                
                </div>

                <div class="col-md-9">
                  <div className="card-body">
                    <h5 className="card-title">
                      {thisBook.title}
                    </h5>
                    <h6>
                      by: {thisBook.authors}
                    </h6>
                    <p className="card-text">
                      {thisBook.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      )}
    </BookContext.Consumer>
  );
}

export default BookSearched;
