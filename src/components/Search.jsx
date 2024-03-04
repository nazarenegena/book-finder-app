import React from "react";
import SearchInput from "./SearchInput";
import "../styles/Search.css";
import SearchDisplay from "./SearchDisplay";
import { useState } from "react";
import Books from "./Books";

const Search = () => {
  const [books, setBooks] = useState([]);
  return (
    <div className="search">
      <SearchInput books={books} setBooks={setBooks} />
      <SearchDisplay />
      <Books books={books} />
    </div>
  );
};

export default Search;
