import React from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import { FaBookOpenReader } from "react-icons/fa6";
import heroImg from "../images/stick-man-reading-newspaper.png";
import digitalLib from "../images/digital-library.png";
import bookLovers from "../images/book-lovers.png";
import brightIdeas from "../images/idea.png";
import searchBooks from "../images/search-engine.png";

const Home = () => {
  return (
    <div className="home-page">
      <p className="home-title">
        PagePal <FaBookOpenReader fill={"#28636c"} className="title-icon" />{" "}
      </p>{" "}
      <div className="hero-section">
        <div className="hero-content">
          <p>
            Find the <span>books</span> you <br /> are looking for <br /> here
            ...
          </p>
          <Link to={"/search"} className="search-action">
            <div className="search-link">Search Now</div>
          </Link>
        </div>
        <img src={heroImg} alt="hero-img" className="hero-image" width={450} />
      </div>
      <div className="about-details">
        <p className="details-title">
          WHY READING IS <span>FUN ?</span>
        </p>

        <div className="description-section">
          <div className="description">
            <h5>Knowledge Acquisition</h5>
            <p>
              Reading is one of the most effective ways to acquire knowledge.{" "}
              <br />
              Whether you're exploring textbooks, articles, or fiction,
              <br /> reading exposes you to new information, ideas, <br />
              perspectives and gain insights
            </p>
          </div>
          <img
            src={digitalLib}
            alt="digital-lib"
            className="description-img"
            width={450}
          />
        </div>
        <div className="description-section">
          <img
            src={bookLovers}
            alt="digital-lib"
            className="description-img1"
            width={450}
          />
          <div className="description">
            <h5>Cognitive Development</h5>
            <p>
              Reading engages your brain in a way that stimulates cognitive
              function <br /> and enhances critical thinking skills. <br />
              Regular reading can also enhance concentration, focus, and
              analytical abilities.{" "}
            </p>
          </div>
        </div>
        <div className="description-section">
          <div className="description">
            <h5>Knowledge Acquisition</h5>
            <p>
              Reading builds a broad knowledge base. <br />
              This diverse knowledge provides you with a range of <br />
              perspectives that can be interconnected to form new ideas.
            </p>
          </div>
          <img
            src={brightIdeas}
            alt="digital-lib"
            className="description-img"
            width={450}
          />
        </div>
        <div className="description-section1 ">
          <img
            src={searchBooks}
            alt="search books"
            className="description-img"
            width={450}
          />

          <h5>
            All your <span>books</span> in one place
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Home;
