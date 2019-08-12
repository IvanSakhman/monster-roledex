import React from "react";
import "./search.css";

const Search = ({ handleChange, placeholder }) => (
  <input
    type="text"
    placeholder={placeholder}
    onChange={handleChange}
    className="search"
  />
);

export default Search;
