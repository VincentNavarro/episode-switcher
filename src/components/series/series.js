import { useState } from "react";
import { getRandomSeries } from "../../services/tv-maze-api-client";

export default function Series({ currentSeries }) {
  const { name, premiered, summary } = currentSeries || {};

  const formattedGenres =
    currentSeries && currentSeries.genres.length
      ? `${currentSeries.genres.join(", ")} | `
      : "";

  const formattedPremieredDate = premiered ? `Premiered on ${premiered}` : "";

  return (
    <div>
      <h1 className="seriesName">{name}</h1>
      <div className="seriesInfo">
        {formattedGenres}
        {formattedPremieredDate}
      </div>
      <div className="seriesSummary">{summary}</div>
    </div>
  );
}
