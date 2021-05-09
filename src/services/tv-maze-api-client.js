import { getRandomShowId } from "./utils/tv-maze-util";

const BASE_URL = "http://api.tvmaze.com";

export const getRandomSeries = async () => {
  return fetch(
    `${BASE_URL}/shows/${getRandomShowId()}?embed=cast`
  ).then((response) => response.json());
};
