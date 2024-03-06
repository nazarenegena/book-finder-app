import React from "react";
import "../styles/SearchInput.css";
import { FaSearch } from "react-icons/fa";
const SearchInput = ({
  books,
  setBooks,
  bookValue,
  setBookValue,
  setLoading,
}) => {
  const handleSearch = (event) => {
    event.preventDefault();
    const fetchBooks = async () => {
      setLoading(true);

      const response = await fetch(
        `http://openlibrary.org/search.json?q=${bookValue}`
      );
      const data = await response.json();

      setBooks(data.docs);
      setLoading(false);
    };
    fetchBooks();
    console.log("the search");
    setBookValue("");
  };

  return (
    <div className="search-input">
      <input
        type="text"
        placeholder="Type author, book ..."
        name="search"
        value={bookValue}
        onChange={(event) => {
          setBookValue(event.target.value);
        }}
      />
      <FaSearch
        className="search-btn"
        onClick={handleSearch}
        size={20}
        fill={"#28636c"}
        fontWeight={"bold"}
      />{" "}
    </div>
  );
};

export default SearchInput;
