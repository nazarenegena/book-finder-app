import "../src/styles/App.css";
import Search from "./sections/Search";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./sections/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/search" element={<Search />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
