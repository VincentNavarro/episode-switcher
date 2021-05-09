import { useState } from "react";
import { getRandomSeries } from "../../services/tv-maze-api-client";
import "./series.css";

export default function Series({ currentSeries }) {
  const { name, premiered, summary, image } = currentSeries || {};

  const formattedGenres =
    currentSeries && currentSeries.genres.length
      ? `${currentSeries.genres.join(", ")} | `
      : "";

  const formattedPremieredDate = premiered ? `Premiered on ${premiered}` : "";

  return (
    <div className="container">
      <div className="row">
        <div className="image">
          {image ? <img src={image} alt="Series Preview" /> : "N/A"}
        </div>
        <div className="col-sm-8">
          <h1 className="seriesName">{name}</h1>
          <div className="seriesInfo">
            {formattedGenres}
            {formattedPremieredDate}
          </div>
          <div className="seriesSummary">{summary}</div>
        </div>
      </div>
    </div>
  );
}
