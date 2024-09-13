
const SearchBar = ({ searchParameter, setSearchParameter }) => {
  return (
    <div className="searchBar">
      <label>
        Search Cat by Name:
        {/* default type of input is text, so we don't need ot add type="text" */}
        <input
          value={searchParameter}
          onChange={(event) => setSearchParameter(event.target.value)}
        />
      </label>
    </div>
  );
};

export default SearchBar;