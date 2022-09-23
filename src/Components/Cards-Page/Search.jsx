import React, { useState } from "react";

function Search({ searchQuery, setSearchQuery }) {
  const filterFunction = (e) => {
    setSearchQuery(e.target.value);
  };
  return (
    <form className="search-form">
      <label htmlFor="search">search for starships</label>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="name or model"
        value={searchQuery}
        onChange={filterFunction}
      />
    </form>
  );
}

export default Search;
