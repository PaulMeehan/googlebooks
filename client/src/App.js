import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Nav from "./components/Nav";
import Header from "./components/Header";

class App extends React.Component {
  
  state = {
    books: []
  };

  componentDidMount() {
    this.getBooks();
  }
  
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
        <Nav />
        <Header />
        {this.state.books.map(thisBook => {
          return (
            <p>
              {thisBook.title}
            </p>
          );
        })}
      </div>
    );
  }
}

export default App;
