import React from "react";
import SearchInput from "../components/SearchInput";
import "../styles/Search.css";
import { Link } from "react-router-dom";
import Books from "../components/Books";
import { FaBookOpenReader } from "react-icons/fa6";

const Search = ({
  books,
  setBooks,
  bookValue,
  setBookValue,
  isLoading,
  setIsLoading,
}) => {
  return (
    <div className="search">
      <Link to={"/"} className="page-title">
        PagePal <FaBookOpenReader fill={"#28636c"} className="title-icon" />{" "}
      </Link>

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
