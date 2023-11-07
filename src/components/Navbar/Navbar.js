import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import Button from "../Button/Button";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src="logo.png" alt="logo" />
      <SearchBar />
      <Button>Give Feedback</Button>
    </div>
  );
};

export default Navbar;
