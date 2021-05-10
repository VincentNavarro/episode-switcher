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

export const getEpisodeByNumber = async (showId, season, episode) => {
  return fetch(
    `${BASE_URL}/shows/${showId}/episodebynumber?season=${season}&number=${episode}`
  ).then((response) => response.json());
};

export const getSeasonsById = async (showId) => {
  return fetch(`${BASE_URL}/shows/${showId}/seasons`).then((response) =>
    response.json()
  );
};

export const getEpisodesBySeasonId = async (seasonId) => {
  return fetch(`${BASE_URL}/seasons/${seasonId}/episodes`).then((response) =>
    response.json()
  );
};
