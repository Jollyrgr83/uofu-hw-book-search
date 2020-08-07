import React, { useState, useEffect } from "react";

import API from "../util/API";

import Jumbotron from "../components/Jumbotron";

function Saved() {
  const [books, setBooks] = useState();

  useEffect(() => {
    loadBooks()
  }, []);

  function loadBooks() {
    API.getAllBooks()
    .then(res => setBooks(res))
    .catch(err => console.log(err));
  }

  function delBook(e) {
    API.deleteBook(e.target.id)
    .then(loadBooks())
    .catch(err => console.log(err));
  } 

  if (books) {
    return (
      <div>
        <Jumbotron title="Your Saved Books" />
        <div className="search-container">
          <h3>Saved Books</h3>
          <div>
          {books.data.map(x => {
            return (
              <div className="search-card" key={x.id}>
                <div className="row">
                  <div className="col-sm-8">
                    <p className="card-title">{x.title}</p>
                    <p className="card-author">Written by: {x.author}</p>
                  </div>
                  <div className="col-sm-4 text-right">
                    <a href={x.link} rel="noopener noreferrer" target="_blank" className="book-links">View on Google Books</a>
                    <button
                      className="button delete"
                      onClick={delBook}
                      id={x._id}  
                    >Delete</button>
                  </div>
                </div>
                <div className="row">
                  <img className="card-image mx-auto" src={x.src} alt={x.text} />
                  <div className="col-sm-10">
                    <p className="card-text">{x.text}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
    );
  } else {
    return (
      <div>
        <Jumbotron title="Your Saved Books" />
        <div className="search-container">
          <h3>Saved Books</h3>
          <p>You haven't saved any books yet!</p>
        </div>
      </div>
    );
  }
}

export default Saved;
