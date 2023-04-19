import React from "react";

function Search({plantSearch, onPlantSearch}) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={plantSearch}
        onChange={(e) => onPlantSearch(e.target.value)}
      />
    </div>
  );
}

export default Search;
