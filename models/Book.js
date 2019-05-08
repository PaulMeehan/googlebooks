const mongoose = require("mongoose");
console.log("in book model");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: true
  },
  authors: {
    type: Array,
    required: false
  },
  description: {
    type: String,
    trim: true,
    required: false
  },
  image: {
    type: String,
    required: false
  },
  link: {
    type: String,
    required: false
  }
});

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;
