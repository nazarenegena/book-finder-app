import React from "react";
import BookItem from "./BookItem";
import "../styles/Books.css";

const Books = () => {
  const bookList = [
    {
      id: Math.round(),
      title: "born to fight",
      author: "nazarene",
      published: "Nyeri-2020",
      date: "24th march 2020",
      picture: "picture this",
    },
    {
      id: Math.round(),

      title: "Shadows",
      author: "Austin",
      published: "Nyeri-2020",
      date: "24th march 2020",
      picture: "picture this",
    },
    {
      id: Math.round(),

      title: "Vampires",
      author: "Isaac",
      published: "Nyeri-2020",
      date: "24th march 2020",
      picture: "picture this",
    },
    {
      id: Math.round(),

      title: "Prayer changes things",
      author: "Anthony Wanyaga",
      published: "Nyeri-2020",
      date: "24th march 2020",
      picture: "picture this",
    },
  ];

  return (
    <div className="books">
      {bookList.map((book) => (
        <BookItem
          key={book.id}
          title={book.title}
          author={book.author}
          published={book.published}
          date={book.date}
          picture={book.picture}
        />
      ))}
    </div>
  );
};

export default Books;
