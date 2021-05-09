import { useState } from "react";
import { getRandomSeries } from "../../services/tv-maze-api-client";

export default function Series({ currentSeries }) {
  const { name, premieredDate } = currentSeries || {};
  console.log("currentSeries :>> ", currentSeries);
  let randomList;

  const formattedGenres =
    currentSeries && currentSeries.genres.length
      ? `${currentSeries.genres.join(", ")} | `
      : "";

  const formattedPremieredDate = premieredDate
    ? `Premiered on ${premieredDate}`
    : "";

  return (
    <div>
      <h1 className="seriesName">{name}</h1>
      <h1 className="seriesInfo">
        {formattedGenres}
        {formattedPremieredDate}
      </h1>
    </div>
  );
}
