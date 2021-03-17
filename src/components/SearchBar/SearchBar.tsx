import React from 'react';

import { SearchIcon } from 'assets/icons';

const SearchBar = () => {
  return (
    <form className="searchbar">
      <input
        className="searchbar__input"
        name="search"
        placeholder="Search markets"
        type="text"
      />
      <button className="searchbar__icon" type="submit" aria-label="Search">
        <SearchIcon />
      </button>
    </form>
  );
};

export default SearchBar;
