import React from "react";

import jumboImage from "../images/bookshelf.png";

function Jumbotron({ title, text }) {
  return (
    <div className="jumbo mx-auto">
      <h1>{title}</h1>
      <div className="text-center">
        <img
          className="jumbotron-image"
          src={jumboImage}
          alt="a bookshelf in a dark room"
        ></img>
      </div>
      <h2>{text}</h2>
    </div>
  );
}

export default Jumbotron;
