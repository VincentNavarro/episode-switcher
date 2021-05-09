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
