import Episodes from "../episodes/episodes";
import { formatDate } from "../utils/formatters";
import "./seasons.css";

export default function Seasons({ seasonsInfo, seasonsEpisodes }) {
  console.log("seasonsEpisodes[0] :>> ", seasonsEpisodes);
  // map through seasoninfo and render seasons component
  // inside map render seasonsEpisodes
  const renderSubtitle = (seasonNumber) => {
    console.log("seasonsInfo :>> ", seasonsInfo);
    const selectedSeason = seasonsInfo[seasonNumber - 1];
    return (
      <div className="subtitleSeason">
        {`${selectedSeason.episodeOrder} episodes | Aired ${
          selectedSeason.premiereDate
            ? formatDate(selectedSeason.premiereDate)
            : ""
        }`}
      </div>
    );
  };

  return (
    <div className="container">
      {seasonsInfo.map((season) => (
        <div key={`season-${season.number}`}>
          <h3>{`Season ${season.number}`}</h3>
          {renderSubtitle(season.number)}
          {/* {seasonsEpisodes[season.number - 1].map((episode) => (
            <Episodes episode={episode} />
          ))} */}
        </div>
      ))}
    </div>
  );
}
