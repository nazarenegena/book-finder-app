import React from "react";
import SearchInput from "../components/SearchInput";
import "../styles/Search.css";
import { useState } from "react";
import Books from "../components/Books";
import { FaBookOpenReader } from "react-icons/fa6";

const Search = () => {
  const [books, setBooks] = useState([]);
  const [bookValue, setBookValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="search">
      <p className="page-title">
        PagePal <FaBookOpenReader fill={"#28636c"} className="title-icon" />{" "}
      </p>
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
