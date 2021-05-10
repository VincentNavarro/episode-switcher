import { useState } from "react";
import { formatSeasonsCount } from "../../services/utils/tv-maze-util";

export default function Replace({ episodes, onReplace }) {
  const [values, setValues] = useState({
    searchValue: "",
    selectedSeason: 1,
    selectedEpisode: 1,
  });

  const handleSeasonChange = (event) => {
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
            {formatSeasonsCount(episodes).map((_, index) => (
              <option key={`season-${index + 1}`}>Season {index + 1}</option>
            ))}
          </select>
          <select
            name="episodes"
            className="episodes"
            onChange={handleEpisodeChange}
          >
            {[
              ...Array(
                episodes.filter(
                  (episode) => episode.season === values.selectedSeason
                ).length
              ),
            ].map((_, index) => (
              <option key={`episode-${index + 1}`}>Episode {index + 1}</option>
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
