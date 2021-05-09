const BASE_URL = "http://api.tvmaze.com";

export const getRandomSeries = async () => {
  let response;

  await fetch(`${BASE_URL}/shows/1?embed=cast`)
    .then((response) => response.json())
    .then((data) => (response = data));

  console.log("response :>> ", response);

  return response;
};
