import React from "react";

import SearchCard from "./SearchCard";

function SearchContainer({ title, data, saveBook }) {
  return (
    <div className="search-container">
      <h3>{title}</h3>
      <SearchCard data={data} saveBook={saveBook} />
    </div>
  );
}

export default SearchContainer;
