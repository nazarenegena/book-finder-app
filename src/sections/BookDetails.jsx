import React from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/BookDetails.css";

const BookDetails = ({ books }) => {
  let { id } = useParams();
  const selectedBook = books.find(
    (book) => String(book.cover_edition_key) === id
  );
  return (
    <div className="book-details">
      <img
        src={`https://covers.openlibrary.org/b/id/${selectedBook.cover_i}-S.jpg`}
        alt="pic here"
        className="details-image"
      />
      <div className="details">
        <p>
          <span>Book Title :</span> {selectedBook.title}
        </p>
        <p>
          <span> Author : </span>
          {selectedBook.author_name}
        </p>
        <p>
          {" "}
          <span> First Publish Year : </span>
          {selectedBook.first_publish_year}
        </p>
        <p>
          {" "}
          <span> Book Type : </span>
          {selectedBook.type}
        </p>

        <p>
          {" "}
          <span>Book Ratings : </span>
          {selectedBook.ratings_count}
        </p>
        <p>
          <span>Ebook Access : </span>
          {selectedBook.ebook_access}
        </p>
        <Link to={"/search"} className="link-div">
          Continue Searching
        </Link>
      </div>
    </div>
  );
};

export default BookDetails;
