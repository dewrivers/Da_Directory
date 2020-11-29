import React from "react";

import "./Search.css";

const SearchBox = ({ handleSearchChange }) => {
  return (
    <div className="searchbox">
      <form className="form-inline">
        <input
          className="form-control"
          type="search"
          placeholder="🔍 Search"
          aria-label="Search"
          onChange={event => handleSearchChange(event)}
        />
      </form>
    </div>
  );
}
export default SearchBox;