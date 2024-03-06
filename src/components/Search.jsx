import React from "react";
import SearchInput from "./SearchInput";
import "../styles/Search.css";
import { useState } from "react";
import Books from "./Books";

const Search = () => {
  const [books, setBooks] = useState([]);
  const [bookValue, setBookValue] = useState("");

  return (
    <div className="search">
      <SearchInput
        books={books}
        setBooks={setBooks}
        bookValue={bookValue}
        setBookValue={setBookValue}
      />

      <Books books={books} />
    </div>
  );
};

export default Search;
