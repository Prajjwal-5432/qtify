import React from "react";
import "./Button.css";
const Button = ({ children }) => {
  return (
    <button className="button" onClick={() => console.log("first")}>
      {children}
    </button>
  );
};

export default Button;
