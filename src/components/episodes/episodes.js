import { formatDate, formatSummary } from "../utils/formatters";
import "./episodes.css";

export default function Episodes({ episode }) {
  return (
    <div className="container p-10">
      <div className="row">
        <div className="episodeImage">
          {episode.image && episode.image.medium ? (
            <img src={episode.image.medium} alt={`episode-${episode.number}`} />
          ) : (
            "NA"
          )}
        </div>
        <div className="col-sm-8">
          <h4>{episode.name}</h4>
          <div className="episodeSubtitle">{`Season ${
            episode.season
          } | Episode ${episode.number} | ${formatDate(episode.airdate)}`}</div>
          <div className="episodeDescription">
            {formatSummary(episode.summary, 270)}
          </div>
        </div>
      </div>
    </div>
  );
}
