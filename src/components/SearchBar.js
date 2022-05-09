import React, { useState } from "react";

const SearchBar = ({ onSubmit }) => {
  const [search, setSearch] = useState("");

  let onFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(search);
  };

  return (
    <div className="search-bar ui segment ">
      <form className="ui form" onSubmit={onFormSubmit}>
        <div className="field">
          <label htmlFor="video-search">
            <input
              id="video-search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            ></input>
          </label>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
