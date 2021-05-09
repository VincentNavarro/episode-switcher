import "./search-bar.css";

export default function SearchBar(props) {
  const updateSearchValue = (event) => {
    props.searchValue(event.target.value);
  };

  const handleKeypress = (event) => {
    if (event.code === "Enter") props.fetchSeries();
  };

  return (
    <div className="container searchBar">
      <div className="row">
        <div className="col-sm-10">
          <h2>Episode Switcher</h2>
        </div>
        <div className="col-sm-3">
          <input
            className="searchBox"
            type="search"
            placeholder="Enter a TV show"
            onChange={updateSearchValue}
            onKeyPress={handleKeypress}
          />
        </div>
        <div className="searchButton">
          <button onClick={props.fetchSeries}>Search</button>
        </div>
      </div>
    </div>
  );
}
