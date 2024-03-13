import React from "react";
import BookItem from "./BookItem";
import "../styles/Books.css";
import Loading from "./Loading";

const Books = ({ books, isLoading }) => {
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="books">
          {books.slice(0, 30).map((book, index) => (
            <BookItem
              key={`${book.key}-${index}`}
              id={book.cover_edition_key}
              title={book.title}
              author={book.author_name}
              published={book.first_publish_year}
              rating={book.ratings_count}
              picture={`https://covers.openlibrary.org/b/id/${book.cover_i}-S.jpg`}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Books;
