import React from "react";
import "./Saved.css";
import BookSaved from "../BookSaved";

function Saved () {
  return (
    <div class="container">
      <div class="row">
        <div class="col col-md-1">
          {/* blank */}
        </div>
        <div class="col col-md-10">
          <BookSaved />
        </div>
        <div class="col col-md-1">
          {/* blank */}
        </div>
      </div>
    </div>
  );
}

export default Saved;