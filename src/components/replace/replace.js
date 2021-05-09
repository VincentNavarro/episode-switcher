import { useEffect, useState } from "react";

export default function Replace({ seasons, onReplace }) {
  const [values, setValues] = useState({
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
          <button onClick={() => onReplace()}>Search</button>
        </div>
      </div>
    </div>
  );
}
