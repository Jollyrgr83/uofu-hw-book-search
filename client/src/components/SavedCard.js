import React from "react";

function SavedCard({ data, delBook }) {
  if (data) {
    return (
      <div>
        {data.data.map(x => {
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
    );
  } else {
    return null;
  }
}

export default SavedCard;
