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
    currentPage: "search",
    books: [],
    onClick: (currentPage) => {
      this.setState({ currentPage });
    }
  };

  componentDidMount() {
    this.getBooks();
  }

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    switch (this.state.currentPage) {
      case "search":
          return <Search />;
        break;
      case "saved":
          return <Saved />;
        break;
      default:
        return <Search />;
    };
  };

  getBooks = () => {
    axios.get(
      "/api/books"
    ).then((res) => {
      console.log(res);
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
