import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="heroSection">
      <div className="heroHeading">
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
      </div>
      <img src="headphone.jpg" height={212} width={212} alt="headphone" />
    </div>
  );
};

export default HeroSection;
