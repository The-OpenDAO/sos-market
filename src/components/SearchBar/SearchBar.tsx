import { useState, ChangeEvent, FormEvent } from 'react';

import { SearchIcon } from 'assets/icons';

type SearchBarProps = {
  /**
   * Name of the component
   */
  name: string;
  /**
   * Placeholder of the input field
   */
  placeholder?: string;
  /**
   * The callback function triggered when click or press Enter on search button
   */
  // eslint-disable-next-line
  onSearch: (text: string) => void;
};

/**
 * A search bar with standard search input
 */
function SearchBar({ name, placeholder, onSearch }: SearchBarProps) {
  const [searchText, setSearchText] = useState('');

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.currentTarget;

    setSearchText(value);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    onSearch(searchText);
  }

  return (
    <form className="pm-c-searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        className="pm-c-searchbar__input"
        id={name}
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
      />
      <button
        className="pm-c-searchbar__icon"
        type="submit"
        aria-label="Search"
      >
        <SearchIcon />
      </button>
    </form>
  );
}

export default SearchBar;
