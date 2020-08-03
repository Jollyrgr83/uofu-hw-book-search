import React from "react";

const test = {
  "title": "Harry Potter Book 2",
  "author": "J. K. Rowling",
  "src": "https://via.placeholder.com/150",
  "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
}

function Card() {
  return (
    <div className="search-card">
      <div className="row">
        <div className="col-sm-8">
          <p className="card-title">{test.title}</p>
          <p className="card-author">Written by: {test.author}</p>
        </div>
        <div className="col-sm-4 text-right">
          <button className="button">View</button>
          <button className="button delete">Delete</button>
        </div>
      </div>
      <div className="row">
        <img className="card-image" src={test.src} alt={test.text} />
        <div className="col-sm-10">
          <p className="card-text">{test.text}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
