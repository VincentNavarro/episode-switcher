import { formatDate, formatSummary } from "../utils/formatters";
import "./episodes.css";

export default function Episodes({ episode }) {
  return (
    <div className="container">
      <div className="col">
        {episode.image && episode.image.medium ? (
          <img src={episode.image.medium} alt={`episode-${episode.number}`} />
        ) : (
          ""
        )}
      </div>
      <div className="col">
        <h4 className="episodeName row">{episode.name}</h4>
        <div className="episodeSubtitle row">{`Season ${
          episode.season
        } | Episode ${episode.number} | ${formatDate(episode.airdate)}`}</div>
        <div className="episodeDescription row">
          {formatSummary(episode.summary, 270)}
        </div>
      </div>
    </div>
  );
}
