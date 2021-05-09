import { useState } from "react";
import "./search-bar.css";

export default function SearchBar({ onSearch }) {
  const [search, setSearch] = useState("");

  const handleSearchChange = (event) => setSearch(event.target.value);

  const handleKeypress = (event) => {
    if (event.code === "Enter") onSearch(search);
  };

  return (
    <div className="container searchBar">
      <div className="row">
        <div className="col-sm-4">
          <h2>Episode Switcher</h2>
        </div>
        <div className="col-sm-3">
          <input
            className="searchBox"
            type="search"
            placeholder="Enter a TV show"
            onChange={handleSearchChange}
            onKeyPress={handleKeypress}
          />
        </div>
        <div className="col-sm-4 searchButton">
          <button onClick={() => onSearch(search)}>Search</button>
        </div>
      </div>
    </div>
  );
}
