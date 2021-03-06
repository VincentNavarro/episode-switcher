export const formatSearch = (result) => {
  return result.length ? result[0].show : {};
};

export const formatDate = (date) => {
  const dateArray = date.split("-");
  const newDate = new Date(dateArray[0], dateArray[1], dateArray[2]);

  const formattedDate = newDate.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return formattedDate.replace(" ", ". ");
};

export const formatSummary = (summary, charLimiit) => {
  const scrubbedString = summary ? summary.replace(/<(.|\n)*?>/g, "") : "";
  return scrubbedString.length >= charLimiit
    ? `${scrubbedString.substr(0, charLimiit)}...`
    : scrubbedString;
};

export const formatShow = (show) => {
  return {
    name: show.name,
    genres: show.genres && show.genres.length ? show.genres : [],
    premiered: show.premiered ? formatDate(show.premiered) : "",
    summary: show.summary ? formatSummary(show.summary, 700) : "",
    image: show.image && show.image.medium ? show.image.medium : "",
  };
};

export const formatSeasonsCount = (episodes) => [
  ...new Set(episodes.map((episode) => episode["season"])),
];
