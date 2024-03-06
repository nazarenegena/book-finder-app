import React from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import { FaBookOpenReader } from "react-icons/fa6";
import heroImg from "../images/digital-library.png";
const Home = () => {
  return (
    <div className="home-page">
      <p className="home-title">
        PagePal <FaBookOpenReader fill={"#28636c"} className="title-icon" />{" "}
      </p>{" "}
      <div className="hero-section">
        <div className="hero-content">
          <p>
            Find the <span>books</span> <br /> you are looking for <br /> here
            ...
          </p>
          <Link to={"/search"} className="search-action">
            <div className="search-link">Search Now</div>
          </Link>
        </div>
        <img src={heroImg} alt="hero-img" className="hero-image" width={450} />
      </div>
      <div className="details">ALL THE BOOKS YOU WANT IN ONE PLACE</div>
      <div className="about-details">Importance of Reading</div>
    </div>
  );
};

export default Home;
