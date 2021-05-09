import { formatDate, formatSummary } from "../../components/utils/formatters";

export const getRandomShowId = () => Math.floor(Math.random() * 55000) + 1;

export const formatSeries = (series) => {
  console.log("series :>> ", series);

  //   const formatDate = () => {
  //       const dateNums = series.premiered.split('-');
  //       const date = new Date(dateNums[0], dateNums[1], dateNums[2])
  //   }

  return {
    name: series.name,
    genres: series.genres && series.genres.length ? series.genres : [],
    premiered: series.premiered ? formatDate(series.premiered) : "",
    summary: series.summary ? formatSummary(series.summary) : "",
    image: series.image && series.image.medium ? series.image.medium : "",
  };
};
