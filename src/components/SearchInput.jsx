import React from "react";
import "../styles/SearchInput.css";

const SearchInput = () => {
  return (
    <div className="search-input">
      <input type="text" placeholder="search book" name="search" />
      <button>Search</button>
    </div>
  );
};

export default SearchInput;
