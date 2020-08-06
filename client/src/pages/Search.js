import React, { useState } from "react";

import API from "../util/API";

import Jumbotron from "../components/Jumbotron";
import SearchContainer from "../components/SearchContainer";

function Search() {
  const [searchTerms, setSearchTerms] = useState();
  const [searchResults, setSearchResults] = useState();
  
  function handleInputChange(e) {
    const { id, value } = e.target;
    console.log("id", id);
    console.log("value", value);
    setSearchTerms({[id]: value});
  };

  function handleFormSubmit(e) {
    e.preventDefault();
    API.search(searchTerms.searchTerms)
    .then(res => {
      console.log("res", res);
      let refinedArr = res.data.items.map(x => {
        return {
          title: x.volumeInfo.title,
          author: x.volumeInfo.authors[0],
          src: x.volumeInfo.imageLinks.thumbnail,
          text: x.volumeInfo.description,
          id: x.id,
          link: x.volumeInfo.previewLink
        }
      })
      setSearchResults(refinedArr);
      console.log(refinedArr)})
    .catch(err => console.log(err));
  };

  function saveBook(e) {
    let el = e.target;
    let bookObj = {
      id: el.dataset.id,
      title: el.dataset.title,
      author: el.dataset.author,
      text: el.dataset.text,
      src: el.dataset.src,
      link: el.dataset.link
    };
    console.log("bookObj", bookObj);
    API.saveBook(bookObj);
  };

  return (
    <div>
      <Jumbotron title="Google Books Search" text="Search for and Save Books of Interest (using React!)" />
      <div className="search-container">
        <div className="text-center">
          <input type="search" id="searchTerms" onChange={handleInputChange}></input>
          <button type="submit" className="button search mx-auto" onClick={handleFormSubmit}>Search</button>
        </div>
      </div>
      <SearchContainer title="Search Results" data={searchResults} saveBook={saveBook} />
    </div>
  );
}

export default Search;
