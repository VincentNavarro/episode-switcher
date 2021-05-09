import { useState } from "react";
import { getRandomSeries } from "../../services/tv-maze-api-client";

export default function Series({ currentSeries }) {
  console.log("currentSeries :>> ", currentSeries);
  let randomList;

  //   const renderGenres = currentSeries.genres.length
  //     ? currentSeries.genres.join(", ")
  //     : "";

  //   const formattedSeries = callSeries();

  //   console.log(" formattedSeries :>> ", Promise.resolve(formattedSeries));
  return (
    <div>
      <h1>Yo there</h1>
    </div>
  );
}
