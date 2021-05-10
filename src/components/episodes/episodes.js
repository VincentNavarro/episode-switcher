import { formatDate } from "../utils/formatters";
import "./episodes.css";

export default function Episodes({ episode }) {
  return (
    <div key={episode.number}>
      <h5>{episode.number}</h5>
      {episode.image && episode.image.medium ? (
        <img src={episode.image.medium} alt={`episode-${episode.number}`} />
      ) : (
        ""
      )}
    </div>
  );
}

// {seasonsEpisodes[season.number - 1].map((episode) => (
//   <div key={`season-${season.number}-episodes`}></div>
// ))}
