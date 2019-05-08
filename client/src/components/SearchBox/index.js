import React from "react";
import "./SearchBox.css";
import BookContext from "../BookContext";


function searchBooks(searchStr) {
  var queryURL = "https://www.googleapis.com/books/v1/volumes?q=" + searchStr + "&key=AIzaSyCvc1iaa_3mIIlfIcDEEmy2X8Eb66MlgW4";
  var bookList = [];
  var currentBook = {};
  var title = "";
  var authors = "";
  var description = "";
  var image = "";
  var link = "";

  fetch(queryURL)
    .then(res => res.json())
    .then(
      (result) => {
        for (var i = 0; i < result.items.length; i++) {
          if (result.items[i].volumeInfo.title) {
            title = result.items[i].volumeInfo.title
          } else {
            title = "No title specified";
          };

          if (result.items[i].volumeInfo.authors) {
            authors = result.items[i].volumeInfo.authors.toString();
          } else {
            authors = "No authors specified";
          };

          if (result.items[i].volumeInfo.description) {
            description = result.items[i].volumeInfo.description;
          } else {
            description = "No description given";
          };

          if (result.items[i].volumeInfo.imageLinks) {
            image = result.items[i].volumeInfo.imageLinks.thumbnail;
          } else {
            image = "https://www.google.com/imgres?imgurl=https%3A%2F%2Ftimedotcom.files.wordpress.com%2F2015%2F06%2F521811839-copy.jpg&imgrefurl=http%3A%2F%2Ftime.com%2F3936846%2Fpowerful-books-list%2F&docid=pU4bvmCp3QQCXM&tbnid=LeDYMYW3FaFkxM%3A&vet=10ahUKEwjnp-KlmIXiAhUF2qwKHRfOBmgQMwiMASgYMBg..i&w=507&h=338&bih=722&biw=1536&q=books&ved=0ahUKEwjnp-KlmIXiAhUF2qwKHRfOBmgQMwiMASgYMBg&iact=mrc&uact=8"
          };

          if (result.items[i].volumeInfo.infoLink) {
            link = result.items[i].volumeInfo.infoLink;
          } else {
            link = "No link specified";
          };

          currentBook = {
            title,
            authors,
            description,
            image,
            link
          }

          bookList.push(currentBook);
        }

        // <BookContext.Consumer>
        //   {bookstate => (
        //     bookstate.updateBooks(bookList)
        //   )}
        // </BookContext.Consumer>
        console.log(bookList);
      }
    );
};

function SearchBox () {

  return (
    <div className="row" id="searchBox">
      <div className="col col-md-1">
        {/* blank */}
      </div>
      <div className="col col-md-10">
        <h2>Book Search:</h2>
        <input type="text" name="searchString" placeholder="Enter the name of the book to search for:" size="75"></input>
        <button className="btn btn-success" onClick={() => searchBooks("The+Godfather")}>Search</button>
      </div>
      <div className="col col-md-1">
        {/* blank */}
      </div>
    </div>
  
  )
}

export default SearchBox;