import "./searchBox.css";

const SearchBox = () => {
  return (
    <div className="search-box">
      <input
        className="form-control form-control-sm me-2 search-input"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
    </div>
  );
};

export default SearchBox;
