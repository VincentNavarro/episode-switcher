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

export const formatSummary = (summary) => {
  const scrubbedString = summary.replace(/<(.|\n)*?>/g, "");
  return scrubbedString.length >= 700
    ? `${scrubbedString.substr(0, 700)}...`
    : scrubbedString;
};
