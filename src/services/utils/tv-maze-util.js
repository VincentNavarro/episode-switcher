export const getRandomShowId = () => 1 + Math.random() * (60000 - 1);

export const formatSeries = (series) => ({
  genres: series.genres.length ? series.genres : [],
});
