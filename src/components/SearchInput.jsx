import React from "react";
import "../styles/SearchInput.css";

const SearchInput = ({ books, setBooks, bookValue, setBookValue }) => {
  const handleSearch = (event) => {
    event.preventDefault();
    const fetchBooks = async () => {
      const response = await fetch(
        `http://openlibrary.org/search.json?q=${bookValue}`
      );
      const data = await response.json();
      setBooks(data.docs);
    };
    fetchBooks();
    console.log(books, "the search");
    setBookValue("");
  };

  return (
    <div className="search-input">
      <input
        type="text"
        placeholder="search book"
        name="search"
        value={bookValue}
        // onChange={handleChange}
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
