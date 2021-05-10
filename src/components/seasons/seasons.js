import { formatSeasonsCount } from "../../services/utils/tv-maze-util";
import Episodes from "../episodes/episodes";
import { formatDate } from "../utils/formatters";
import "./seasons.css";

export default function Seasons({ episodes }) {
  const getCurrentSeason = (seasonNumber) =>
    episodes.filter((episode) => episode.season === seasonNumber);

  const renderSubtitle = (currentSeason) => {
    return (
      <div className="seasonSubtitle">
        {`${currentSeason.length} episodes | Aired ${
          currentSeason[0].airdate ? formatDate(currentSeason[0].airdate) : ""
        }`}
      </div>
    );
  };

  return (
    <div className="container">
      {formatSeasonsCount(episodes).map((season) => (
        <div className="seasonContainer" key={`season-${season}`}>
          <h3>{`Season ${season}`}</h3>
          {renderSubtitle(getCurrentSeason(season))}
          <hr />

          {getCurrentSeason(season).map((episode) => (
            <Episodes episode={episode} key={`episode-${episode.number}`} />
          ))}
        </div>
      ))}
    </div>
  );
}
