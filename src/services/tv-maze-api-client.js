import { getRandomShowId } from "./utils/tv-maze-util";

const BASE_URL = "http://api.tvmaze.com";

export const getShowByName = (name) => {
  return fetch(`${BASE_URL}/search/shows?q=${name}`).then((response) =>
    response.json()
  );
};

export const getShowById = async (showId) => {
  return fetch(`${BASE_URL}/shows/${showId}`).then((response) =>
    response.json()
  );
};

export const getEpisodesById = async (showId) => {
  return fetch(`${BASE_URL}/shows/${showId}/episodes`).then((response) =>
    response.json()
  );
};

export const getEpisodeByNumber = async (id, season, episode) => {
  return fetch(
    `${BASE_URL}/shows/${id}/episodebynumber?season=${season}&number=${episode}`
  ).then((response) => response.json());
};
