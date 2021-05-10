import { formatDate, formatSummary } from "../../components/utils/formatters";

export const getRandomShowId = () => Math.floor(Math.random() * 55000) + 1;

export const formatShow = (show) => {
  return {
    name: show.name,
    genres: show.genres && show.genres.length ? show.genres : [],
    premiered: show.premiered ? formatDate(show.premiered) : "",
    summary: show.summary ? formatSummary(show.summary, 700) : "",
    image: show.image && show.image.medium ? show.image.medium : "",
  };
};

export const formatSeasonsCount = (episodes) => [
  ...new Set(episodes.map((episode) => episode["season"])),
];

export const formatSeasons = (episodes) => {
  const seasonArray = formatSeasonsCount(episodes);
  return seasonArray.map((count) => ({
    season: count,
    episodes: episodes.filter((episode) => episode.season === count),
  }));
};
