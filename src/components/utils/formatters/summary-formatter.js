export const formatSummary = (summary) => {
  const scrubbedString = summary.replace(/<(.|\n)*?>/g, "");
  return scrubbedString.length >= 700
    ? `${scrubbedString.substr(0, 700)}...`
    : scrubbedString;
};
