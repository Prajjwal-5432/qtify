import React from "react";
import "./Card.css";
const Card = ({ album }) => {
  const { image, follows, title } = album;
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-img-frame">
          <img src={image} alt="cardImage" className="card-img" />
        </div>
        <div className="card-content">
          <span className="card-content-pill">{follows} Follows</span>
        </div>
      </div>
      <div className="card-label">{title}</div>
    </div>
  );
};

export default Card;
