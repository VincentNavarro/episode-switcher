import { useState } from "react";
import "./search-bar.css";

export default function SearchBar({ onSearch }) {
  const [search, setSearch] = useState("");

  const handleSearchChange = (event) => setSearch(event.target.value);

  const handleKeypress = (event) => {
    if (event.code === "Enter") onSearch(search);
  };

  return (
    <div className="searchBar">
      <div className="searchContainer container">
        <div className="row align-items-center">
          <div className="col-sm-6">
            <h2 className="appTitle">Episode Switcher</h2>
          </div>
          <div className="row">
            <div className="searchBoxContainer">
              <input
                className="searchBox"
                type="search"
                placeholder="Enter a TV show"
                onChange={handleSearchChange}
                onKeyPress={handleKeypress}
              />
            </div>
            <div className="searchButtonContainer">
              <button className="searchButton" onClick={() => onSearch(search)}>
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
