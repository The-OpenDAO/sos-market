import React from 'react';

import styles from 'styles/components/SearchBar.module.scss';

import { SearchIcon } from 'assets/icons';

function SearchBar() {
  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        name="search"
        placeholder="Search markets"
        type="text"
        variant="warning"
      />
      <button className={styles.icon} type="submit">
        <SearchIcon />
      </button>
    </form>
  );
}

export default SearchBar;
