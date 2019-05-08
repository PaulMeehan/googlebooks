// eslint-disable-next-line
import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Search from "./components/Search";
import Saved from "./components/Saved";
import BookContext from "./components/BookContext";

class App extends React.Component {
  
  state = {
    currentPage: "saved",
    books: [],
    setPage: (currentPage) => {
      this.setState({ currentPage });
    },
    updateBooks: (books) => {
      this.setState({ books })
    }
  };

  componentDidMount() {
    this.getBooks();
  }

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "saved") {
      return <Saved />
    } else {
      return <Search />
    }
  };

  getBooks = () => {
    axios.get(
      "/api/books"
    ).then((res) => {
      this.setState({
        books: res.data
      });
    });
  ;}

  render() {
    return (
      <div className="App">
        <BookContext.Provider value={this.state}>
          <Nav />
          <Header />
          {this.renderPage() }
        </BookContext.Provider>
      </div>
    );
  }
}

export default App;
