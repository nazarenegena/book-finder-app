import React from "react";
import "../styles/Loading.css";
import Lottie from "lottie-react";
import loader from "../../src/loader.json";

const Loading = () => {
  return (
    <div className="loading-page">
      <p>finding your book ...</p>

      <Lottie animationData={loader} loop={true} />
    </div>
  );
};

export default Loading;
