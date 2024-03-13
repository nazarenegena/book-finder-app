import React, { useState } from "react";
import "../src/styles/App.css";
import Search from "./sections/Search";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./sections/Home";
import BookDetails from "./sections/BookDetails";

function App() {
  const [books, setBooks] = useState([]);
  const [bookValue, setBookValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedID, setSelectedID] = useState(null);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route
            exact
            path="/search"
            element={
              <Search
                books={books}
                setBooks={setBooks}
                bookValue={bookValue}
                setBookValue={setBookValue}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
                selectedID={selectedID}
                setSelectedID={setSelectedID}
              />
            }
          ></Route>
          <Route
            exact
            path="/details/:id"
            element={<BookDetails books={books} selectedID={selectedID} />}
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
