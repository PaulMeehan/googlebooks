const express = require("express");
const app = express();

const mongoose = require("mongoose");
const db = require("./models");

const PORT = process.env.PORT || 3001;

const path = require("path");
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, '/client/build/index.html'))
  })
} else {
  app.use(express.static("client/public"));
}

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/googlebooks";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

app.get("/api/books", (req, res) => {
  console.log("in books");
  db.Book.find({})
    .then(dbBooks => {
      res.json(dbBooks);
    })
    .catch(err => {
      res.json(err);
    });
});

app.get("/emptyall", (req, res) => {
  console.log("in emptyall");
  db.Book.remove({})
    .then(dbBook => {
      console.log(dbBook);
      res.json(dbBook)
    })
    .catch(err => res.status(422).json(err));
});

app.get("/minsert", (req, res) => {
  console.log("in insert");
  db.Book.create(
    {
    "title" : "title 1",
    "authors" : ["author 1a", "author 1b"],
    "description" : "description 1",
    "image" : "image 1",
    "link" : "link 1"
    },
    {
      "title": "title 2",
      "authors": ["author 2a", "author 2b"],
      "description": "description 2",
      "image": "image 2",
      "link": "link 2"
    },
    {
      "title": "title 3",
      "authors": ["author 3a", "author 3b"],
      "description": "description 3",
      "image": "image 3",
      "link": "link 3"
    }
    )
  .then(dbBook => {
    console.log(dbBook);
    res.json(dbBook)
  })
  .catch(err => res.status(422).json(err));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

module.exports = app;
