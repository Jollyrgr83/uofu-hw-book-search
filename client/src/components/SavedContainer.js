import React from "react";

import SavedCard from "./SavedCard";

function SavedContainer({ title, data, delBook }) {
  return (
    <div className="search-container">
      <h3>{title}</h3>
      <SavedCard data={data} delBook={delBook} />
    </div>
  );
}

export default SavedContainer;
