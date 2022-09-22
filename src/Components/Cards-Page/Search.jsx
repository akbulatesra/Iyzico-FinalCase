import React, { useState } from "react";

function Search() {
  const [filterText, setFilterText] = useState("");
  const filterFunction = (e) => {
    setFilterText(e.target.value);
  };
  return (
    <form className="search-form">
      <label htmlFor="search">search for starships</label>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="name or model"
        value={filterText}
        onChange={filterFunction}
      />
    </form>
  );
}

export default Search;
