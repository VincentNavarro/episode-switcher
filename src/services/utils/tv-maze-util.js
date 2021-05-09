import { formatDate, formatSummary } from "../../components/utils/formatters";

export const getRandomShowId = () => Math.floor(Math.random() * 55000) + 1;

export const formatSeries = (series) => {
  return {
    name: series.name,
    genres: series.genres && series.genres.length ? series.genres : [],
    premiered: series.premiered ? formatDate(series.premiered) : "",
    summary: series.summary ? formatSummary(series.summary) : "",
    image: series.image && series.image.medium ? series.image.medium : "",
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
