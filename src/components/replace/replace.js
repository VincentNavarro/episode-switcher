import { useEffect, useState } from "react";

export default function Replace({ seasons, onReplace }) {
  const [values, setValues] = useState({
    searchValue: "",
    selectedSeason: 1,
    selectedEpisode: 1,
  });

  const handleSeasonChange = (event) => {
    console.log("event.target :>> ", event.target);
    return setValues({
      selectedSeason: event.target.selectedIndex + 1,
      selectedEpisode: 1,
    });
  };

  const handleEpisodeChange = (event) =>
    setValues({
      selectedSeason: values.selectedSeason,
      selectedEpisode: event.target.selectedIndex + 1,
    });

  const handleSearchChange = (event) =>
    setValues({ ...values, searchValue: event.target.value });

  const handleKeypress = (event) => {
    if (event.code === "Enter")
      onReplace(
        values.searchValue,
        values.selectedSeason,
        values.selectedEpisode
      );
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">Replace</div>
        <div className="col">
          <select
            name="seasons"
            className="seasons"
            onChange={handleSeasonChange}
          >
            {seasons.map((s) => (
              <option key={`season-${s.season}`}>Season {s.season}</option>
            ))}
          </select>
          <select
            name="episodes"
            className="episodes"
            onChange={handleEpisodeChange}
          >
            {seasons[values.selectedSeason - 1].episodes.map((e) => (
              <option key={`episode-${e.number}`}>Episode {e.number}</option>
            ))}
          </select>
        </div>
        <div className="col">
          <input
            className="searchBox"
            type="search"
            onChange={handleSearchChange}
            onKeyPress={handleKeypress}
          />
        </div>
        <div className="col">
          <button
            onClick={() =>
              onReplace(
                values.searchValue,
                values.selectedSeason,
                values.selectedEpisode
              )
            }
          >
            Replace
          </button>
        </div>
      </div>
    </div>
  );
}
