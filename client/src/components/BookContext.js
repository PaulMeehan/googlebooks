import React from "react";

const BookContext = React.createContext({
  currentPage: "saved",
  books: [],
  setPage: () => undefined,
  updateBooks: () => undefined
});

export default BookContext;
