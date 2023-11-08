import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="heroSection">
      <div className="heroHeading">
        <h2>100 Thousand Songs, ad-free</h2>
        <h2>Over thousands podcast episodes</h2>
      </div>
      <img src="headphone.jpg" height={212} width={212} alt="headphone" />
    </div>
  );
};

export default HeroSection;
