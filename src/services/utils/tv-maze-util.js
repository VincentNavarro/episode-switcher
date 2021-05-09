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

export const formatEpisodesToSeasons = (episodes) => {
  // use filter
  // episodes.filter(episde => episode.season === 1)
  return episodes.map((episode) => episode["id"]);

  // IN THE OPTION THING DO MAP AND DO CONCAT OF STRING
};

export const formatSeasonsCount = (episodes) => [
  ...new Set(episodes.map((episode) => episode["season"])),
];
