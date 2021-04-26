import SearchBar from '../SearchBar';

function NavBarSearch() {
  function handleSearch(text: string) {
    return text;
  }

  return (
    <div className="pm-c-navbar__search">
      <SearchBar
        name="SearchMarkets"
        placeholder="Search markets"
        onSearch={handleSearch}
      />
    </div>
  );
}

NavBarSearch.displayName = 'NavBarSearch';

export default NavBarSearch;
