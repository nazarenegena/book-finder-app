import React from "react";
import BookItem from "./BookItem";
import "../styles/Books.css";

const Books = ({ books }) => {
  console.log(books, "bookzz");
  return (
    <div className="books">
      {books.slice(0, 30).map((book) => (
        <BookItem
          key={book.key}
          title={book.title}
          author={book.author_name}
          published={book.first_publish_year}
          rating={book.ratings_count}
          picture={`https://covers.openlibrary.org/b/id/${book.cover_i}-S.jpg`}
        />
      ))}
    </div>
  );
};

export default Books;
