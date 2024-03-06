import React from "react";
import SearchInput from "./SearchInput";
import "../styles/Search.css";
import { useState } from "react";
import Books from "./Books";

const Search = () => {
  const [books, setBooks] = useState([]);
  const [bookValue, setBookValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="search">
      <SearchInput
        books={books}
        setBooks={setBooks}
        bookValue={bookValue}
        setBookValue={setBookValue}
        setLoading={setIsLoading}
      />
      <Books books={books} isLoading={isLoading} />
    </div>
  );
};

export default Search;
