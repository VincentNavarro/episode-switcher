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
