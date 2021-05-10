import { formatSeasonsCount } from "../../services/utils/tv-maze-util";
import Episodes from "../episodes/episodes";
import { formatDate } from "../utils/formatters";
import "./seasons.css";

export default function Seasons({ seasonsEpisodes }) {
  const getCurrentSeason = (seasonNumber) =>
    seasonsEpisodes.filter((episode) => episode.season === seasonNumber);

  const renderSubtitle = (currentSeason) => {
    return (
      <div className="subtitleSeason">
        {`${currentSeason.length} episodes | Aired ${
          currentSeason[0].airdate ? formatDate(currentSeason[0].airdate) : ""
        }`}
      </div>
    );
  };

  return (
    <div className="container">
      {formatSeasonsCount(seasonsEpisodes).map((season) => (
        <div key={`season-${season}`}>
          <h3>{`Season ${season}`}</h3>
          {renderSubtitle(getCurrentSeason(season))}
          {getCurrentSeason(season).map((episode) => (
            <Episodes episode={episode} />
          ))}
        </div>
      ))}
    </div>
  );
}
