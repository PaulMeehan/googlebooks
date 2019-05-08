import React from "react";
import "./Saved.css";
import BookSaved from "../BookSaved";

function Saved () {
  return (
    <div className="container">
      <div className="row">
        <div className="col col-md-1">
          {/* blank */}
          In saved page
        </div>
        <div className="col col-md-10">
          <BookSaved />
        </div>
        <div className="col col-md-1">
          {/* blank */}
        </div>
      </div>
    </div>
  );
}

export default Saved;