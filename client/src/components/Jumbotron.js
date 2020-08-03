import React from "react";

import jumboImage from "../images/bookshelf.png";

function Jumbotron() {
  return (
    <div className="jumbo mx-auto">
      <h1>Google Books Search</h1>
      <div className="text-center">
        <img
          className="jumbotron-image"
          src={jumboImage}
          alt="a bookshelf in a dark room"
        ></img>
      </div>
      <h2>Search for and Save Books of Interest (using React!)</h2>
    </div>
  );
}

export default Jumbotron;
