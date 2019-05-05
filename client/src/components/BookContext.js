import React from "react";

const BookContext = React.createContext({
  currentPage: "search",
  books: [],
  onClick: () => undefined
});

export default BookContext;
