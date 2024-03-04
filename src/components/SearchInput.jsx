import React from "react";
import "../styles/SearchInput.css";
import { useState } from "react";

const SearchInput = ({ books, setBooks }) => {
  const [bookValue, setBookValue] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();

    const fetchBooks = async () => {
      const response = await fetch(
        `http://openlibrary.org/search.json?title=${bookValue}`
      );
      const data = await response.json();
      setBooks(data.docs);
      console.log(books, "the books");
    };
    fetchBooks();

    setBookValue("");
  };
  return (
    <div className="search-input">
      <input
        type="text"
        placeholder="search book"
        name="search"
        value={bookValue}
        onChange={(event) => {
          setBookValue(event.target.value);
        }}
      />
      <button className="" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchInput;
