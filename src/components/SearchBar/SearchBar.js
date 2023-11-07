import React from "react";
import { ReactComponent as SearchIcon } from "./search-icon.svg";
import "./SearchBar.css";
const SearchBar = () => {
  return (
    <form className="form">
      <input className="input" placeholder="Search a album of your choice" />
      <button className="button1">
        <SearchIcon height={20} width={20} />
      </button>
    </form>
  );
};

export default SearchBar;
