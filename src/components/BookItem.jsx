import React from "react";
import "../styles/BookItem.css";

const BookItem = ({ title, author, published, date, picture }) => {
  return (
    <div className="book-item">
      <img src={picture} alt="check here" />
      <p>{title}</p>
      <p>{author}</p>
      <p>{published}</p>
      <p>{date}</p>
    </div>
  );
};

export default BookItem;
