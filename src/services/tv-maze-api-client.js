import axios from "axios";

const BASE_URL = "http://api.tvmaze.com";

export const getShowByName = async (name) => {
  const response = await axios({
    url: `${BASE_URL}/search/shows`,
    params: { q: name },
    method: "GET",
    header: {
      "Content-Type": "application/json",
    },
  });

  return await response.data;
};

export const getShowById = async (showId) => {
  const response = await axios({
    url: `${BASE_URL}/shows/${showId}`,
    method: "GET",
    header: {
      "Content-Type": "application/json",
    },
  });

  return await response.data;
};

export const getEpisodesById = async (showId) => {
  const response = await axios({
    url: `${BASE_URL}/shows/${showId}/episodes`,
    method: "GET",
    header: {
      "Content-Type": "application/json",
    },
  });

  return await response.data;
};

export const getEpisodeByNumber = async (showId, season, number) => {
  const response = await axios({
    url: `${BASE_URL}/shows/${showId}/episodebynumber`,
    params: { season, number },
    method: "GET",
    header: {
      "Content-Type": "application/json",
    },
  });

  return await response.data;
};

export const getSeasonsById = async (showId) => {
  const response = await axios({
    url: `${BASE_URL}/shows/${showId}/seasons`,
    method: "GET",
    header: {
      "Content-Type": "application/json",
    },
  });

  return await response.data;
};

export const getEpisodesBySeasonId = async (seasonId) => {
  const response = await axios({
    url: `${BASE_URL}/seasons/${seasonId}/episodes`,
    method: "GET",
    header: {
      "Content-Type": "application/json",
    },
  });

  return await response.data;
};
