import React from "react";
import BookItem from "./BookItem";
import "../styles/Books.css";

const Books = ({ books }) => {
  return (
    <div className="books">
      hello
      {books.map((book) => (
        <BookItem
          key={book.key}
          title={book.title}
          author={book.author_name}
          published={book.published}
          date={book.date}
          picture={book.picture}
        />
      ))}
    </div>
  );
};

export default Books;
