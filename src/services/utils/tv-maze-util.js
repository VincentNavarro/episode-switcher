export const getRandomShowId = () => 1 + Math.random() * (60000 - 1);

export const formatSeries = (series) => {
  console.log("series :>> ", series);

  //   const formatDate = () => {
  //       const dateNums = series.premiered.split('-');
  //       const date = new Date(dateNums[0], dateNums[1], dateNums[2])
  //   }

  return {
    name: series.name,
    genres: series.genres && series.genres.length ? series.genres : [],
  };
};
