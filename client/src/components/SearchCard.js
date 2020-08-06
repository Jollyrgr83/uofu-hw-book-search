import React from "react";

function SearchCard({ data, saveBook }) {
  if (data) {
    return (
      <div>
        {data.map(x => {
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
                    className="button"
                    onClick={saveBook}
                    data-id={x.id}
                    data-title={x.title}
                    data-author={x.author}
                    data-text={x.text}
                    data-src={x.src}
                    data-link={x.link}  
                  >Save</button>
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

export default SearchCard;
