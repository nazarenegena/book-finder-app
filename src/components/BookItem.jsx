import React from "react";
import "../styles/BookItem.css";

const BookItem = ({ title, author, published, rating, picture, id }) => {
  return (
    <div className="book-item" key={id}>
      <img src={picture} alt="check here" className="pic" />
      <div className="book-description">
        <p className="title">{title}</p>
        <div className="pair-details">
          <span className="span-1">Author : </span>
          <span className="span-2">{author}</span>
        </div>
        <div className="pair-details">
          <span className="span-1">Published Date :</span>
          <span className="span-2">{published}</span>
        </div>
        <div className="pair-details">
          {" "}
          <span className="span-1">Rating :</span>
          <span className="span-2">{rating}</span>
        </div>
      </div>
    </div>
  );
};

export default BookItem;
