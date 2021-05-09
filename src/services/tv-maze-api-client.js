import { getRandomShowId } from "./utils/tv-maze-util";

const BASE_URL = "http://api.tvmaze.com";

export const getSeriesByName = (name) => {
  return fetch(`${BASE_URL}/search/shows?q=${name}`).then((response) =>
    response.json()
  );
};

export const getRandomSeries = async () => {
  return fetch(
    `${BASE_URL}/shows/${getRandomShowId()}?embed=cast`
  ).then((response) => response.json());
};
